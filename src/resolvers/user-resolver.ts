import { randomUUID } from "crypto";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Context } from "../context";
import { userCreateInput } from "../dtos/inputs/create-user-input";
import { User } from "../dtos/models/model-users";

@Resolver(() => User)
export class UserResolver {
  /*  TODO: definindo como query falamos para que ele somente leia os dados da query, 
  assim podemos utlizar mais de um tipo de chamada em apenas uma resquete  */
  @Query(() => [User!]) // aqui definimos o escopo da query por um model que contem os typos que vai ser usado na class
  async view(@Ctx() ctx: Context): Promise<User[]> {
    const userFind = await ctx.prisma.user.findMany();
    return userFind;
  }

  @Mutation(() => User)
  async createuser(
    @Arg("datauser") datauser: userCreateInput,
    @Ctx() ctx: Context
  ): Promise<User> {
    const { name, gender } = datauser;
    const user: User = await ctx.prisma.user.create({
      data: {
        name,
        gender,
      },
    });

    return user;
  }
}
