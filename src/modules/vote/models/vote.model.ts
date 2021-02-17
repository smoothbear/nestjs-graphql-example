import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Vote {
    @Field(type => ID)
    id: string;

    @Field()
    title: string;

    @Field({ nullable: true })
    description?: string;

    @Field()
    votes: number;

    @Field()
    creationDate: Date;
}