import { IsNotEmpty, IsString } from "class-validator";
import { Field, ID, InputType } from "type-graphql";

@InputType()
export class userCreateInput {
  @Field()
  name!: string;

  @Field()
  gender!: string;
}
