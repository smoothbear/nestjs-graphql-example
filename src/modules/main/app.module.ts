import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { VoteModule } from '../vote/vote.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
    }),
    VoteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
