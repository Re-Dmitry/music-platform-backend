import { FileModule } from './file/file.module';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
    imports: [
        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static'),}),
        FileModule,
        MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.erddb.mongodb.net/music-platform?retryWrites=true&w=majority'),
        TrackModule,],
    controllers: [],
    providers: [],
})
export class AppModule { }
