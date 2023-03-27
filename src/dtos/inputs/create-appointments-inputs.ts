import { InputType, Field, GraphQLISODateTime } from "type-graphql"
import { IsNotEmpty } from "class-validator";


@InputType()
export class createAppointmentInput {
    @Field()
    @IsNotEmpty()
    customerId: string;

    @Field()
    startsAt: Date;

    @Field()
    endsAt: Date;
}