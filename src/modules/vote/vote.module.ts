import { Module } from "@nestjs/common";
import { VoteResolver } from "./vote.resolver";

@Module({
    imports: [],
    providers: [VoteResolver]
})
export class VoteModule {}