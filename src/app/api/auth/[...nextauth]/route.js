import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"



const userList = [
    {
        name: "hablu", password: '1234'
    },
    {
        name: "dablu", password: '5678'
    },
    {
        name: "bablu", password: '8901'
    },
]

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            // Sign in with {name} button
            name: 'Credentials',


            // form inputs
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
                secretCode: { label: "Secret Code", type: "number", placeholder: " enter code" },
            },
            async authorize(credentials, req) {

                const { username, password ,secretCode} = credentials;

                const user = userList.find(u => u.name == username)
                if(!user) return null;

                const isPasswordOk = user.password == password;
                if(isPasswordOk){
                    return user;
                }


                // const res = await fetch("/your/endpoint", {
                //     method: 'POST',
                //     body: JSON.stringify(credentials),
                //     headers: { "Content-Type": "application/json" }
                // })
                // const user = await res.json()

                // // If no error and we have user data, return it
                // if (res.ok && user) {
                //     return user
                // }
                // // Return null if user data could not be retrieved

                //my own logic login 
                return null
            }
        })
    ],
}


const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
