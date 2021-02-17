import { Module } from "@nestjs/common";
import { VoteResolver } from "./vote.resolver";

@Module({
    imports: [VoteResolver],
})
export class VoteModule {}