import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UserModule } from './user/user.module';
import { PetroleumModule } from './petroleum/petroleum.module';
import { UploaderModule } from './uploader/uploader.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { VillageModule } from './village/village.module';
import { SurveyModule } from './survey/survey.module';
import { QueryModule } from './query/query.module';
import { DealinghandModule } from './dealinghand/dealinghand.module';
import { PaymentModule } from './payment/payment.module';
import { DeathRegiserModule } from './dmc/death_regiser/death_regiser.module';
import { BirthRegisterModule } from './dmc/birth_register/birth_register.module';
import { MarriageModule } from './est/marriage/marriage.module';
import { RoadshowModule } from './est/roadshow/roadshow.module';
import { ReligiousModule } from './est/religious/religious.module';
import { RtiModule } from './pda/rti/rti.module';
import { ZoneinfoModule } from './pda/zoneinfo/zoneinfo.module';
import { OldcopyModule } from './pda/oldcopy/oldcopy.module';
import { LandsectionModule } from './pda/landsection/landsection.module';
import { CpModule } from './pda/cp/cp.module';
import { PlinthModule } from './pda/plinth/plinth.module';
import { OcModule } from './pda/oc/oc.module';
import { TempWaterConnectModule } from './pwd/temp_water_connect/temp_water_connect.module';
import { NewWaterConnectModule } from './pwd/new_water_connect/new_water_connect.module';
import { TempWaterDisconnectModule } from './pwd/temp_water_disconnect/temp_water_disconnect.module';
import { PermanentWaterDisconnectModule } from './pwd/permanent_water_disconnect/permanent_water_disconnect.module';
import { WaterSizeChangeModule } from './pwd/water_size_change/water_size_change.module';
import { WaterReconnectModule } from './pwd/water_reconnect/water_reconnect.module';
import { BirthCertificateModule } from './crsr/birth_certificate/birth_certificate.module';
import { BirthTeorModule } from './crsr/birth_teor/birth_teor.module';
import { DeathCertificateModule } from './crsr/death_certificate/death_certificate.module';
import { DeathTeorModule } from './crsr/death_teor/death_teor.module';
import { MarriageCertificateModule } from './crsr/marriage_certificate/marriage_certificate.module';
import { MarriageTeorModule } from './crsr/marriage_teor/marriage_teor.module';
import { MarriageRegisterModule } from './crsr/marriage_register/marriage_register.module';
import { NewrationcardModule } from './fcs/newrationcard/newrationcard.module';
import { NewrationcardmembersModule } from './fcs/newrationcardmembers/newrationcardmembers.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      serveRoot: '/public',
      rootPath: join(process.cwd(), 'public'),
    }),
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    RtiModule,
    UserModule,
    PetroleumModule,
    ZoneinfoModule,
    OldcopyModule,
    UploaderModule,
    AuthModule,
    CommonModule,
    LandsectionModule,
    VillageModule,
    SurveyModule,
    QueryModule,
    DealinghandModule,
    PaymentModule,
    CpModule,
    PlinthModule,
    OcModule,
    MarriageModule,
    RoadshowModule,
    ReligiousModule,
    BirthRegisterModule,
    DeathRegiserModule,
    TempWaterConnectModule,
    NewWaterConnectModule,
    TempWaterDisconnectModule,
    PermanentWaterDisconnectModule,
    WaterSizeChangeModule,
    WaterReconnectModule,
    BirthCertificateModule,
    BirthTeorModule,
    DeathCertificateModule,
    DeathTeorModule,
    MarriageCertificateModule,
    MarriageTeorModule,
    MarriageRegisterModule,
    NewrationcardModule,
    NewrationcardmembersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
