import { Args, Query, Resolver } from "@nestjs/graphql";
import { Vote } from './models/vote.model';

@Resolver(of => Vote)
export class VoteResolver {
    @Query(returns => Vote)
    async vote(@Args('id') id: string): Promise<Vote> {
        return null;
    }
}