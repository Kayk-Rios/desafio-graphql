import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateOneUserArgs } from "../args/create-one-user-args";
import { UserObject } from "../objects/user.object";

@Resolver()
export class UserResolvere{
    @Query(()=>String)
    users(){  
        return 'Ola Mundo'  
    }

    @Mutation(()=> UserObject)
    createUser(@Args() args: CreateOneUserArgs){
        return args.data
    }
}