import { Resolver, Query, Mutation, Arg, FieldResolver, Root } from "type-graphql";
import { randomUUID } from "node:crypto";
import { createAppointmentInput } from "../dtos/inputs/create-appointments-inputs";
import { Appointment } from "../dtos/models/model-appointments";
import { Customer } from "../dtos/models/model-customer";


@Resolver(() => Appointment)
export class AppointmentsResolver {


  @Query(() => [Appointment!])
  async appointment() {
    return [
      {
        startsAt: new Date(),
        endsAt: new Date()
      }
    ]
  }

  @Mutation(() => Appointment)
  async createAppointment(@Arg('data') data: createAppointmentInput) {

    const { startsAt, endsAt } = data
    const appointment = {
      startsAt,
      endsAt
    };
    return appointment;
  }

  @FieldResolver(() => Customer)
  async customer(@Root() aappointment: Appointment) {
    return {
      name: "Maike Walzalkin"
    }
  }
}
