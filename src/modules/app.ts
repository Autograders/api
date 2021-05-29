import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import GraqhQLConfig from '@config/gql';

@Module({
  imports: [TypeOrmModule.forRoot(), GraphQLModule.forRoot(GraqhQLConfig)]
})
export class AppModule {}
