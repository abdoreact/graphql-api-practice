const graphql=require("graphql")
const {
    GraphQLObjectType, 
    GraphQLSchema, 
    GraphQLString,
    GraphQLID, 
    GraphQLInt
} = graphql
const emailType=new GraphQLObjectType({
    name:'Email',
    fields:{
        email:{
            type:GraphQLString
        },
        id:{
            type:GraphQLID
        }
    }
})
const userType=new GraphQLObjectType({
    name:'User',
    fields:{
        name:{
            type:GraphQLString
        },
        age:{
            type:GraphQLInt
        },
        email:{
            type:emailType
        }
    }
})
let users=[{name:'abdo', age:3, emailid:'hhhgggunv'}, {name:'bob', age:400, emailid:'i'}]
let emails=[{email:'abdo@abdo.abdo', id:'hhhgggunv'}, {email:'bob@bob.bob', id:'i'}]
const RootQuery=new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        user:{
            type:userType,
            args:{id:{type:GraphQLID}},
            resolve:(parent, args) => {
                return {name:users[args.id].name, age:users[args.id].age, email:emails.filter(email => email.id == users[args.id].emailid)[0]}
            }
        }
    }
})
module.exports=new GraphQLSchema({
    query:RootQuery
})