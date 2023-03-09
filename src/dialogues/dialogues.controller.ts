import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { DialoguesRequestById, DialoguesSingleResponse } from './dialogues';
import { MySqlConfig } from './dialogues.interface';
import * as dotenv from 'dotenv';
import * as mysql from 'mysql';
import { Connection } from 'mysql';
import * as fs from 'fs';

dotenv.config();

const config: MySqlConfig = {
  host: process.env.HOST_NAME,
  user: process.env.USER_NAME,
  password: process.env.USER_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: 3306,
  ssl: {
    ca: fs.readFileSync('./DigiCertGlobalRootCA.crt.pem'),
  },
};

@Controller()
export class DialoguesController {
  @GrpcMethod('DialoguesService', 'FindOne')
  async findOne(data: DialoguesRequestById): Promise<DialoguesSingleResponse> {
    const conn: Connection = mysql.createConnection(config);

    const fetchDialogues = (data) => {
      // TODO: validate
      const reqId: string = data.id;

      return new Promise((resolve, reject) => {
        conn.connect((err) => {
          if (err) reject(err);
          conn.query(
            `SELECT * FROM dialogues WHERE id = ${reqId}`,
            (err, results) => {
              if (err) reject(err);
              resolve(results);
            },
          );
          conn.end((err) => {
            if (err) reject(err);
          });
        });
      });
    };

    // NOTE: [RowDataPacket {key: value}]の形式で返却
    const dialoguesAddRowDataPacket: any = await fetchDialogues(data).catch(
      (err) => {
        throw err;
      },
    );

    const dialogues: any = dialoguesAddRowDataPacket.map((data) => {
      // NOTE: RowDataPacket {key: value}から
      //　　　 {key: value}を取得するため、stringify→parseを行う
      const convertedJson = JSON.stringify(data);
      const convertedObject = JSON.parse(convertedJson);
      return convertedObject;
    });

    const test: DialoguesSingleResponse = {
      id: '0000001',
      datetime: '2023-03-06T05:52:44.000Z',
      memo: 'テスト',
      bossId: '0000100',
      memberId: '0000200',
    };

    return test;
  }
}
