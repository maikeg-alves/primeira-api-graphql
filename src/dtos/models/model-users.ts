import { IsNotEmpty, IsString } from "class-validator";
import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
export class User {
  @Field()
  name: string;

  @Field()
  gender: string;
}
