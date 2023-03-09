/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "dialogues";

/** dialogues/dialogues.proto */

export interface DialoguesRequestById {
  id: number;
}

export interface DialoguesSingleResponse {
  id: string;
  datetime: string;
  memo: string;
  bossId: string;
  memberId: string;
}

export const DIALOGUES_PACKAGE_NAME = "dialogues";

export interface DialoguesServiceClient {
  findOne(request: DialoguesRequestById): Observable<DialoguesSingleResponse>;
}

export interface DialoguesServiceController {
  findOne(
    request: DialoguesRequestById,
  ): Promise<DialoguesSingleResponse> | Observable<DialoguesSingleResponse> | DialoguesSingleResponse;
}

export function DialoguesServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["findOne"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("DialoguesService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("DialoguesService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const DIALOGUES_SERVICE_NAME = "DialoguesService";
