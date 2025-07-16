
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model StorageFile
 * 
 */
export type StorageFile = $Result.DefaultSelection<Prisma.$StorageFilePayload>
/**
 * Model Process
 * 
 */
export type Process = $Result.DefaultSelection<Prisma.$ProcessPayload>
/**
 * Model ProcessHstsMvs
 * 
 */
export type ProcessHstsMvs = $Result.DefaultSelection<Prisma.$ProcessHstsMvsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Permission: {
  USER_READ: 'USER_READ',
  USER_CREATE: 'USER_CREATE',
  USER_UPDATE: 'USER_UPDATE',
  USER_DELETE: 'USER_DELETE',
  USER_RESET_PASSWORD: 'USER_RESET_PASSWORD',
  PROCESS_READ_OWN: 'PROCESS_READ_OWN',
  PROCESS_READ_ALL: 'PROCESS_READ_ALL',
  HSTS_MVS_CREATE: 'HSTS_MVS_CREATE'
};

export type Permission = (typeof Permission)[keyof typeof Permission]


export const Status: {
  PENDING: 'PENDING',
  STARTED: 'STARTED',
  END: 'END',
  ERROR: 'ERROR'
};

export type Status = (typeof Status)[keyof typeof Status]


export const ProcessType: {
  HSTS_MVS: 'HSTS_MVS'
};

export type ProcessType = (typeof ProcessType)[keyof typeof ProcessType]


export const HstsMvsStage: {
  NOT_STARTED: 'NOT_STARTED',
  PARSE_DRIVER_LICENCE: 'PARSE_DRIVER_LICENCE',
  VALIDATE_DRIVER_LICENCE: 'VALIDATE_DRIVER_LICENCE',
  PARSE_CAR_INFO: 'PARSE_CAR_INFO',
  VALIDATE_CAR_INFO: 'VALIDATE_CAR_INFO',
  MODIFY_DATA: 'MODIFY_DATA',
  GENERATE_RESULT_DATA: 'GENERATE_RESULT_DATA',
  FINISHED: 'FINISHED'
};

export type HstsMvsStage = (typeof HstsMvsStage)[keyof typeof HstsMvsStage]

}

export type Permission = $Enums.Permission

export const Permission: typeof $Enums.Permission

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type ProcessType = $Enums.ProcessType

export const ProcessType: typeof $Enums.ProcessType

export type HstsMvsStage = $Enums.HstsMvsStage

export const HstsMvsStage: typeof $Enums.HstsMvsStage

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storageFile`: Exposes CRUD operations for the **StorageFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StorageFiles
    * const storageFiles = await prisma.storageFile.findMany()
    * ```
    */
  get storageFile(): Prisma.StorageFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.process`: Exposes CRUD operations for the **Process** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Processes
    * const processes = await prisma.process.findMany()
    * ```
    */
  get process(): Prisma.ProcessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.processHstsMvs`: Exposes CRUD operations for the **ProcessHstsMvs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProcessHstsMvs
    * const processHstsMvs = await prisma.processHstsMvs.findMany()
    * ```
    */
  get processHstsMvs(): Prisma.ProcessHstsMvsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    StorageFile: 'StorageFile',
    Process: 'Process',
    ProcessHstsMvs: 'ProcessHstsMvs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "storageFile" | "process" | "processHstsMvs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      StorageFile: {
        payload: Prisma.$StorageFilePayload<ExtArgs>
        fields: Prisma.StorageFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StorageFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StorageFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageFilePayload>
          }
          findFirst: {
            args: Prisma.StorageFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StorageFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageFilePayload>
          }
          findMany: {
            args: Prisma.StorageFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageFilePayload>[]
          }
          create: {
            args: Prisma.StorageFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageFilePayload>
          }
          createMany: {
            args: Prisma.StorageFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StorageFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageFilePayload>[]
          }
          delete: {
            args: Prisma.StorageFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageFilePayload>
          }
          update: {
            args: Prisma.StorageFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageFilePayload>
          }
          deleteMany: {
            args: Prisma.StorageFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StorageFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StorageFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageFilePayload>[]
          }
          upsert: {
            args: Prisma.StorageFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageFilePayload>
          }
          aggregate: {
            args: Prisma.StorageFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStorageFile>
          }
          groupBy: {
            args: Prisma.StorageFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<StorageFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.StorageFileCountArgs<ExtArgs>
            result: $Utils.Optional<StorageFileCountAggregateOutputType> | number
          }
        }
      }
      Process: {
        payload: Prisma.$ProcessPayload<ExtArgs>
        fields: Prisma.ProcessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>
          }
          findFirst: {
            args: Prisma.ProcessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>
          }
          findMany: {
            args: Prisma.ProcessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>[]
          }
          create: {
            args: Prisma.ProcessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>
          }
          createMany: {
            args: Prisma.ProcessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProcessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>[]
          }
          delete: {
            args: Prisma.ProcessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>
          }
          update: {
            args: Prisma.ProcessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>
          }
          deleteMany: {
            args: Prisma.ProcessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProcessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>[]
          }
          upsert: {
            args: Prisma.ProcessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>
          }
          aggregate: {
            args: Prisma.ProcessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcess>
          }
          groupBy: {
            args: Prisma.ProcessGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcessGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcessCountArgs<ExtArgs>
            result: $Utils.Optional<ProcessCountAggregateOutputType> | number
          }
        }
      }
      ProcessHstsMvs: {
        payload: Prisma.$ProcessHstsMvsPayload<ExtArgs>
        fields: Prisma.ProcessHstsMvsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcessHstsMvsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessHstsMvsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcessHstsMvsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessHstsMvsPayload>
          }
          findFirst: {
            args: Prisma.ProcessHstsMvsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessHstsMvsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcessHstsMvsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessHstsMvsPayload>
          }
          findMany: {
            args: Prisma.ProcessHstsMvsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessHstsMvsPayload>[]
          }
          create: {
            args: Prisma.ProcessHstsMvsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessHstsMvsPayload>
          }
          createMany: {
            args: Prisma.ProcessHstsMvsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProcessHstsMvsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessHstsMvsPayload>[]
          }
          delete: {
            args: Prisma.ProcessHstsMvsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessHstsMvsPayload>
          }
          update: {
            args: Prisma.ProcessHstsMvsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessHstsMvsPayload>
          }
          deleteMany: {
            args: Prisma.ProcessHstsMvsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcessHstsMvsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProcessHstsMvsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessHstsMvsPayload>[]
          }
          upsert: {
            args: Prisma.ProcessHstsMvsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessHstsMvsPayload>
          }
          aggregate: {
            args: Prisma.ProcessHstsMvsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcessHstsMvs>
          }
          groupBy: {
            args: Prisma.ProcessHstsMvsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcessHstsMvsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcessHstsMvsCountArgs<ExtArgs>
            result: $Utils.Optional<ProcessHstsMvsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    storageFile?: StorageFileOmit
    process?: ProcessOmit
    processHstsMvs?: ProcessHstsMvsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    processes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    processes?: boolean | UserCountOutputTypeCountProcessesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProcessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessWhereInput
  }


  /**
   * Count Type StorageFileCountOutputType
   */

  export type StorageFileCountOutputType = {
    driverLicenseProcesses: number
    carInfoProcesses: number
    resultProcesses: number
  }

  export type StorageFileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driverLicenseProcesses?: boolean | StorageFileCountOutputTypeCountDriverLicenseProcessesArgs
    carInfoProcesses?: boolean | StorageFileCountOutputTypeCountCarInfoProcessesArgs
    resultProcesses?: boolean | StorageFileCountOutputTypeCountResultProcessesArgs
  }

  // Custom InputTypes
  /**
   * StorageFileCountOutputType without action
   */
  export type StorageFileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFileCountOutputType
     */
    select?: StorageFileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StorageFileCountOutputType without action
   */
  export type StorageFileCountOutputTypeCountDriverLicenseProcessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessHstsMvsWhereInput
  }

  /**
   * StorageFileCountOutputType without action
   */
  export type StorageFileCountOutputTypeCountCarInfoProcessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessHstsMvsWhereInput
  }

  /**
   * StorageFileCountOutputType without action
   */
  export type StorageFileCountOutputTypeCountResultProcessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessHstsMvsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    displayName: string | null
    isSuperUser: boolean | null
    isBlocked: boolean | null
    isTotpEnabled: boolean | null
    totpSecret: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    displayName: string | null
    isSuperUser: boolean | null
    isBlocked: boolean | null
    isTotpEnabled: boolean | null
    totpSecret: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    displayName: number
    isSuperUser: number
    isBlocked: number
    isTotpEnabled: number
    totpSecret: number
    permissions: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    displayName?: true
    isSuperUser?: true
    isBlocked?: true
    isTotpEnabled?: true
    totpSecret?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    displayName?: true
    isSuperUser?: true
    isBlocked?: true
    isTotpEnabled?: true
    totpSecret?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    displayName?: true
    isSuperUser?: true
    isBlocked?: true
    isTotpEnabled?: true
    totpSecret?: true
    permissions?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    displayName: string
    isSuperUser: boolean
    isBlocked: boolean
    isTotpEnabled: boolean
    totpSecret: string | null
    permissions: $Enums.Permission[]
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    displayName?: boolean
    isSuperUser?: boolean
    isBlocked?: boolean
    isTotpEnabled?: boolean
    totpSecret?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    processes?: boolean | User$processesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    displayName?: boolean
    isSuperUser?: boolean
    isBlocked?: boolean
    isTotpEnabled?: boolean
    totpSecret?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    displayName?: boolean
    isSuperUser?: boolean
    isBlocked?: boolean
    isTotpEnabled?: boolean
    totpSecret?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    displayName?: boolean
    isSuperUser?: boolean
    isBlocked?: boolean
    isTotpEnabled?: boolean
    totpSecret?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "displayName" | "isSuperUser" | "isBlocked" | "isTotpEnabled" | "totpSecret" | "permissions" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    processes?: boolean | User$processesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      processes: Prisma.$ProcessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      displayName: string
      isSuperUser: boolean
      isBlocked: boolean
      isTotpEnabled: boolean
      totpSecret: string | null
      permissions: $Enums.Permission[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    processes<T extends User$processesArgs<ExtArgs> = {}>(args?: Subset<T, User$processesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly isSuperUser: FieldRef<"User", 'Boolean'>
    readonly isBlocked: FieldRef<"User", 'Boolean'>
    readonly isTotpEnabled: FieldRef<"User", 'Boolean'>
    readonly totpSecret: FieldRef<"User", 'String'>
    readonly permissions: FieldRef<"User", 'Permission[]'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.processes
   */
  export type User$processesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    where?: ProcessWhereInput
    orderBy?: ProcessOrderByWithRelationInput | ProcessOrderByWithRelationInput[]
    cursor?: ProcessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcessScalarFieldEnum | ProcessScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model StorageFile
   */

  export type AggregateStorageFile = {
    _count: StorageFileCountAggregateOutputType | null
    _avg: StorageFileAvgAggregateOutputType | null
    _sum: StorageFileSumAggregateOutputType | null
    _min: StorageFileMinAggregateOutputType | null
    _max: StorageFileMaxAggregateOutputType | null
  }

  export type StorageFileAvgAggregateOutputType = {
    size: number | null
  }

  export type StorageFileSumAggregateOutputType = {
    size: number | null
  }

  export type StorageFileMinAggregateOutputType = {
    id: string | null
    inputFilename: string | null
    outputFilename: string | null
    extension: string | null
    size: number | null
    bucket: string | null
    path: string | null
  }

  export type StorageFileMaxAggregateOutputType = {
    id: string | null
    inputFilename: string | null
    outputFilename: string | null
    extension: string | null
    size: number | null
    bucket: string | null
    path: string | null
  }

  export type StorageFileCountAggregateOutputType = {
    id: number
    inputFilename: number
    outputFilename: number
    extension: number
    size: number
    bucket: number
    path: number
    _all: number
  }


  export type StorageFileAvgAggregateInputType = {
    size?: true
  }

  export type StorageFileSumAggregateInputType = {
    size?: true
  }

  export type StorageFileMinAggregateInputType = {
    id?: true
    inputFilename?: true
    outputFilename?: true
    extension?: true
    size?: true
    bucket?: true
    path?: true
  }

  export type StorageFileMaxAggregateInputType = {
    id?: true
    inputFilename?: true
    outputFilename?: true
    extension?: true
    size?: true
    bucket?: true
    path?: true
  }

  export type StorageFileCountAggregateInputType = {
    id?: true
    inputFilename?: true
    outputFilename?: true
    extension?: true
    size?: true
    bucket?: true
    path?: true
    _all?: true
  }

  export type StorageFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StorageFile to aggregate.
     */
    where?: StorageFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageFiles to fetch.
     */
    orderBy?: StorageFileOrderByWithRelationInput | StorageFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StorageFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StorageFiles
    **/
    _count?: true | StorageFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StorageFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StorageFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StorageFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StorageFileMaxAggregateInputType
  }

  export type GetStorageFileAggregateType<T extends StorageFileAggregateArgs> = {
        [P in keyof T & keyof AggregateStorageFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStorageFile[P]>
      : GetScalarType<T[P], AggregateStorageFile[P]>
  }




  export type StorageFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StorageFileWhereInput
    orderBy?: StorageFileOrderByWithAggregationInput | StorageFileOrderByWithAggregationInput[]
    by: StorageFileScalarFieldEnum[] | StorageFileScalarFieldEnum
    having?: StorageFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StorageFileCountAggregateInputType | true
    _avg?: StorageFileAvgAggregateInputType
    _sum?: StorageFileSumAggregateInputType
    _min?: StorageFileMinAggregateInputType
    _max?: StorageFileMaxAggregateInputType
  }

  export type StorageFileGroupByOutputType = {
    id: string
    inputFilename: string
    outputFilename: string | null
    extension: string
    size: number
    bucket: string
    path: string
    _count: StorageFileCountAggregateOutputType | null
    _avg: StorageFileAvgAggregateOutputType | null
    _sum: StorageFileSumAggregateOutputType | null
    _min: StorageFileMinAggregateOutputType | null
    _max: StorageFileMaxAggregateOutputType | null
  }

  type GetStorageFileGroupByPayload<T extends StorageFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StorageFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StorageFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StorageFileGroupByOutputType[P]>
            : GetScalarType<T[P], StorageFileGroupByOutputType[P]>
        }
      >
    >


  export type StorageFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inputFilename?: boolean
    outputFilename?: boolean
    extension?: boolean
    size?: boolean
    bucket?: boolean
    path?: boolean
    driverLicenseProcesses?: boolean | StorageFile$driverLicenseProcessesArgs<ExtArgs>
    carInfoProcesses?: boolean | StorageFile$carInfoProcessesArgs<ExtArgs>
    resultProcesses?: boolean | StorageFile$resultProcessesArgs<ExtArgs>
    _count?: boolean | StorageFileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storageFile"]>

  export type StorageFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inputFilename?: boolean
    outputFilename?: boolean
    extension?: boolean
    size?: boolean
    bucket?: boolean
    path?: boolean
  }, ExtArgs["result"]["storageFile"]>

  export type StorageFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inputFilename?: boolean
    outputFilename?: boolean
    extension?: boolean
    size?: boolean
    bucket?: boolean
    path?: boolean
  }, ExtArgs["result"]["storageFile"]>

  export type StorageFileSelectScalar = {
    id?: boolean
    inputFilename?: boolean
    outputFilename?: boolean
    extension?: boolean
    size?: boolean
    bucket?: boolean
    path?: boolean
  }

  export type StorageFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inputFilename" | "outputFilename" | "extension" | "size" | "bucket" | "path", ExtArgs["result"]["storageFile"]>
  export type StorageFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driverLicenseProcesses?: boolean | StorageFile$driverLicenseProcessesArgs<ExtArgs>
    carInfoProcesses?: boolean | StorageFile$carInfoProcessesArgs<ExtArgs>
    resultProcesses?: boolean | StorageFile$resultProcessesArgs<ExtArgs>
    _count?: boolean | StorageFileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StorageFileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StorageFileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StorageFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StorageFile"
    objects: {
      driverLicenseProcesses: Prisma.$ProcessHstsMvsPayload<ExtArgs>[]
      carInfoProcesses: Prisma.$ProcessHstsMvsPayload<ExtArgs>[]
      resultProcesses: Prisma.$ProcessHstsMvsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      inputFilename: string
      outputFilename: string | null
      extension: string
      size: number
      bucket: string
      path: string
    }, ExtArgs["result"]["storageFile"]>
    composites: {}
  }

  type StorageFileGetPayload<S extends boolean | null | undefined | StorageFileDefaultArgs> = $Result.GetResult<Prisma.$StorageFilePayload, S>

  type StorageFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StorageFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StorageFileCountAggregateInputType | true
    }

  export interface StorageFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StorageFile'], meta: { name: 'StorageFile' } }
    /**
     * Find zero or one StorageFile that matches the filter.
     * @param {StorageFileFindUniqueArgs} args - Arguments to find a StorageFile
     * @example
     * // Get one StorageFile
     * const storageFile = await prisma.storageFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StorageFileFindUniqueArgs>(args: SelectSubset<T, StorageFileFindUniqueArgs<ExtArgs>>): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StorageFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StorageFileFindUniqueOrThrowArgs} args - Arguments to find a StorageFile
     * @example
     * // Get one StorageFile
     * const storageFile = await prisma.storageFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StorageFileFindUniqueOrThrowArgs>(args: SelectSubset<T, StorageFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StorageFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageFileFindFirstArgs} args - Arguments to find a StorageFile
     * @example
     * // Get one StorageFile
     * const storageFile = await prisma.storageFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StorageFileFindFirstArgs>(args?: SelectSubset<T, StorageFileFindFirstArgs<ExtArgs>>): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StorageFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageFileFindFirstOrThrowArgs} args - Arguments to find a StorageFile
     * @example
     * // Get one StorageFile
     * const storageFile = await prisma.storageFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StorageFileFindFirstOrThrowArgs>(args?: SelectSubset<T, StorageFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StorageFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StorageFiles
     * const storageFiles = await prisma.storageFile.findMany()
     * 
     * // Get first 10 StorageFiles
     * const storageFiles = await prisma.storageFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storageFileWithIdOnly = await prisma.storageFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StorageFileFindManyArgs>(args?: SelectSubset<T, StorageFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StorageFile.
     * @param {StorageFileCreateArgs} args - Arguments to create a StorageFile.
     * @example
     * // Create one StorageFile
     * const StorageFile = await prisma.storageFile.create({
     *   data: {
     *     // ... data to create a StorageFile
     *   }
     * })
     * 
     */
    create<T extends StorageFileCreateArgs>(args: SelectSubset<T, StorageFileCreateArgs<ExtArgs>>): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StorageFiles.
     * @param {StorageFileCreateManyArgs} args - Arguments to create many StorageFiles.
     * @example
     * // Create many StorageFiles
     * const storageFile = await prisma.storageFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StorageFileCreateManyArgs>(args?: SelectSubset<T, StorageFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StorageFiles and returns the data saved in the database.
     * @param {StorageFileCreateManyAndReturnArgs} args - Arguments to create many StorageFiles.
     * @example
     * // Create many StorageFiles
     * const storageFile = await prisma.storageFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StorageFiles and only return the `id`
     * const storageFileWithIdOnly = await prisma.storageFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StorageFileCreateManyAndReturnArgs>(args?: SelectSubset<T, StorageFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StorageFile.
     * @param {StorageFileDeleteArgs} args - Arguments to delete one StorageFile.
     * @example
     * // Delete one StorageFile
     * const StorageFile = await prisma.storageFile.delete({
     *   where: {
     *     // ... filter to delete one StorageFile
     *   }
     * })
     * 
     */
    delete<T extends StorageFileDeleteArgs>(args: SelectSubset<T, StorageFileDeleteArgs<ExtArgs>>): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StorageFile.
     * @param {StorageFileUpdateArgs} args - Arguments to update one StorageFile.
     * @example
     * // Update one StorageFile
     * const storageFile = await prisma.storageFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StorageFileUpdateArgs>(args: SelectSubset<T, StorageFileUpdateArgs<ExtArgs>>): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StorageFiles.
     * @param {StorageFileDeleteManyArgs} args - Arguments to filter StorageFiles to delete.
     * @example
     * // Delete a few StorageFiles
     * const { count } = await prisma.storageFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StorageFileDeleteManyArgs>(args?: SelectSubset<T, StorageFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StorageFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StorageFiles
     * const storageFile = await prisma.storageFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StorageFileUpdateManyArgs>(args: SelectSubset<T, StorageFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StorageFiles and returns the data updated in the database.
     * @param {StorageFileUpdateManyAndReturnArgs} args - Arguments to update many StorageFiles.
     * @example
     * // Update many StorageFiles
     * const storageFile = await prisma.storageFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StorageFiles and only return the `id`
     * const storageFileWithIdOnly = await prisma.storageFile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StorageFileUpdateManyAndReturnArgs>(args: SelectSubset<T, StorageFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StorageFile.
     * @param {StorageFileUpsertArgs} args - Arguments to update or create a StorageFile.
     * @example
     * // Update or create a StorageFile
     * const storageFile = await prisma.storageFile.upsert({
     *   create: {
     *     // ... data to create a StorageFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StorageFile we want to update
     *   }
     * })
     */
    upsert<T extends StorageFileUpsertArgs>(args: SelectSubset<T, StorageFileUpsertArgs<ExtArgs>>): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StorageFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageFileCountArgs} args - Arguments to filter StorageFiles to count.
     * @example
     * // Count the number of StorageFiles
     * const count = await prisma.storageFile.count({
     *   where: {
     *     // ... the filter for the StorageFiles we want to count
     *   }
     * })
    **/
    count<T extends StorageFileCountArgs>(
      args?: Subset<T, StorageFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StorageFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StorageFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StorageFileAggregateArgs>(args: Subset<T, StorageFileAggregateArgs>): Prisma.PrismaPromise<GetStorageFileAggregateType<T>>

    /**
     * Group by StorageFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageFileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StorageFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StorageFileGroupByArgs['orderBy'] }
        : { orderBy?: StorageFileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StorageFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStorageFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StorageFile model
   */
  readonly fields: StorageFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StorageFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StorageFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driverLicenseProcesses<T extends StorageFile$driverLicenseProcessesArgs<ExtArgs> = {}>(args?: Subset<T, StorageFile$driverLicenseProcessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessHstsMvsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    carInfoProcesses<T extends StorageFile$carInfoProcessesArgs<ExtArgs> = {}>(args?: Subset<T, StorageFile$carInfoProcessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessHstsMvsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resultProcesses<T extends StorageFile$resultProcessesArgs<ExtArgs> = {}>(args?: Subset<T, StorageFile$resultProcessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessHstsMvsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StorageFile model
   */
  interface StorageFileFieldRefs {
    readonly id: FieldRef<"StorageFile", 'String'>
    readonly inputFilename: FieldRef<"StorageFile", 'String'>
    readonly outputFilename: FieldRef<"StorageFile", 'String'>
    readonly extension: FieldRef<"StorageFile", 'String'>
    readonly size: FieldRef<"StorageFile", 'Int'>
    readonly bucket: FieldRef<"StorageFile", 'String'>
    readonly path: FieldRef<"StorageFile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StorageFile findUnique
   */
  export type StorageFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFile
     */
    select?: StorageFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageFile
     */
    omit?: StorageFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageFileInclude<ExtArgs> | null
    /**
     * Filter, which StorageFile to fetch.
     */
    where: StorageFileWhereUniqueInput
  }

  /**
   * StorageFile findUniqueOrThrow
   */
  export type StorageFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFile
     */
    select?: StorageFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageFile
     */
    omit?: StorageFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageFileInclude<ExtArgs> | null
    /**
     * Filter, which StorageFile to fetch.
     */
    where: StorageFileWhereUniqueInput
  }

  /**
   * StorageFile findFirst
   */
  export type StorageFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFile
     */
    select?: StorageFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageFile
     */
    omit?: StorageFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageFileInclude<ExtArgs> | null
    /**
     * Filter, which StorageFile to fetch.
     */
    where?: StorageFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageFiles to fetch.
     */
    orderBy?: StorageFileOrderByWithRelationInput | StorageFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StorageFiles.
     */
    cursor?: StorageFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StorageFiles.
     */
    distinct?: StorageFileScalarFieldEnum | StorageFileScalarFieldEnum[]
  }

  /**
   * StorageFile findFirstOrThrow
   */
  export type StorageFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFile
     */
    select?: StorageFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageFile
     */
    omit?: StorageFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageFileInclude<ExtArgs> | null
    /**
     * Filter, which StorageFile to fetch.
     */
    where?: StorageFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageFiles to fetch.
     */
    orderBy?: StorageFileOrderByWithRelationInput | StorageFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StorageFiles.
     */
    cursor?: StorageFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StorageFiles.
     */
    distinct?: StorageFileScalarFieldEnum | StorageFileScalarFieldEnum[]
  }

  /**
   * StorageFile findMany
   */
  export type StorageFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFile
     */
    select?: StorageFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageFile
     */
    omit?: StorageFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageFileInclude<ExtArgs> | null
    /**
     * Filter, which StorageFiles to fetch.
     */
    where?: StorageFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageFiles to fetch.
     */
    orderBy?: StorageFileOrderByWithRelationInput | StorageFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StorageFiles.
     */
    cursor?: StorageFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageFiles.
     */
    skip?: number
    distinct?: StorageFileScalarFieldEnum | StorageFileScalarFieldEnum[]
  }

  /**
   * StorageFile create
   */
  export type StorageFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFile
     */
    select?: StorageFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageFile
     */
    omit?: StorageFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageFileInclude<ExtArgs> | null
    /**
     * The data needed to create a StorageFile.
     */
    data: XOR<StorageFileCreateInput, StorageFileUncheckedCreateInput>
  }

  /**
   * StorageFile createMany
   */
  export type StorageFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StorageFiles.
     */
    data: StorageFileCreateManyInput | StorageFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StorageFile createManyAndReturn
   */
  export type StorageFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFile
     */
    select?: StorageFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StorageFile
     */
    omit?: StorageFileOmit<ExtArgs> | null
    /**
     * The data used to create many StorageFiles.
     */
    data: StorageFileCreateManyInput | StorageFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StorageFile update
   */
  export type StorageFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFile
     */
    select?: StorageFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageFile
     */
    omit?: StorageFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageFileInclude<ExtArgs> | null
    /**
     * The data needed to update a StorageFile.
     */
    data: XOR<StorageFileUpdateInput, StorageFileUncheckedUpdateInput>
    /**
     * Choose, which StorageFile to update.
     */
    where: StorageFileWhereUniqueInput
  }

  /**
   * StorageFile updateMany
   */
  export type StorageFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StorageFiles.
     */
    data: XOR<StorageFileUpdateManyMutationInput, StorageFileUncheckedUpdateManyInput>
    /**
     * Filter which StorageFiles to update
     */
    where?: StorageFileWhereInput
    /**
     * Limit how many StorageFiles to update.
     */
    limit?: number
  }

  /**
   * StorageFile updateManyAndReturn
   */
  export type StorageFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFile
     */
    select?: StorageFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StorageFile
     */
    omit?: StorageFileOmit<ExtArgs> | null
    /**
     * The data used to update StorageFiles.
     */
    data: XOR<StorageFileUpdateManyMutationInput, StorageFileUncheckedUpdateManyInput>
    /**
     * Filter which StorageFiles to update
     */
    where?: StorageFileWhereInput
    /**
     * Limit how many StorageFiles to update.
     */
    limit?: number
  }

  /**
   * StorageFile upsert
   */
  export type StorageFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFile
     */
    select?: StorageFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageFile
     */
    omit?: StorageFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageFileInclude<ExtArgs> | null
    /**
     * The filter to search for the StorageFile to update in case it exists.
     */
    where: StorageFileWhereUniqueInput
    /**
     * In case the StorageFile found by the `where` argument doesn't exist, create a new StorageFile with this data.
     */
    create: XOR<StorageFileCreateInput, StorageFileUncheckedCreateInput>
    /**
     * In case the StorageFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StorageFileUpdateInput, StorageFileUncheckedUpdateInput>
  }

  /**
   * StorageFile delete
   */
  export type StorageFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFile
     */
    select?: StorageFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageFile
     */
    omit?: StorageFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageFileInclude<ExtArgs> | null
    /**
     * Filter which StorageFile to delete.
     */
    where: StorageFileWhereUniqueInput
  }

  /**
   * StorageFile deleteMany
   */
  export type StorageFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StorageFiles to delete
     */
    where?: StorageFileWhereInput
    /**
     * Limit how many StorageFiles to delete.
     */
    limit?: number
  }

  /**
   * StorageFile.driverLicenseProcesses
   */
  export type StorageFile$driverLicenseProcessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessHstsMvs
     */
    select?: ProcessHstsMvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessHstsMvs
     */
    omit?: ProcessHstsMvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessHstsMvsInclude<ExtArgs> | null
    where?: ProcessHstsMvsWhereInput
    orderBy?: ProcessHstsMvsOrderByWithRelationInput | ProcessHstsMvsOrderByWithRelationInput[]
    cursor?: ProcessHstsMvsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcessHstsMvsScalarFieldEnum | ProcessHstsMvsScalarFieldEnum[]
  }

  /**
   * StorageFile.carInfoProcesses
   */
  export type StorageFile$carInfoProcessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessHstsMvs
     */
    select?: ProcessHstsMvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessHstsMvs
     */
    omit?: ProcessHstsMvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessHstsMvsInclude<ExtArgs> | null
    where?: ProcessHstsMvsWhereInput
    orderBy?: ProcessHstsMvsOrderByWithRelationInput | ProcessHstsMvsOrderByWithRelationInput[]
    cursor?: ProcessHstsMvsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcessHstsMvsScalarFieldEnum | ProcessHstsMvsScalarFieldEnum[]
  }

  /**
   * StorageFile.resultProcesses
   */
  export type StorageFile$resultProcessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessHstsMvs
     */
    select?: ProcessHstsMvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessHstsMvs
     */
    omit?: ProcessHstsMvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessHstsMvsInclude<ExtArgs> | null
    where?: ProcessHstsMvsWhereInput
    orderBy?: ProcessHstsMvsOrderByWithRelationInput | ProcessHstsMvsOrderByWithRelationInput[]
    cursor?: ProcessHstsMvsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcessHstsMvsScalarFieldEnum | ProcessHstsMvsScalarFieldEnum[]
  }

  /**
   * StorageFile without action
   */
  export type StorageFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFile
     */
    select?: StorageFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageFile
     */
    omit?: StorageFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageFileInclude<ExtArgs> | null
  }


  /**
   * Model Process
   */

  export type AggregateProcess = {
    _count: ProcessCountAggregateOutputType | null
    _min: ProcessMinAggregateOutputType | null
    _max: ProcessMaxAggregateOutputType | null
  }

  export type ProcessMinAggregateOutputType = {
    id: string | null
    status: $Enums.Status | null
    userId: string | null
    owner: string | null
    type: $Enums.ProcessType | null
    createdAt: Date | null
  }

  export type ProcessMaxAggregateOutputType = {
    id: string | null
    status: $Enums.Status | null
    userId: string | null
    owner: string | null
    type: $Enums.ProcessType | null
    createdAt: Date | null
  }

  export type ProcessCountAggregateOutputType = {
    id: number
    status: number
    userId: number
    owner: number
    type: number
    createdAt: number
    _all: number
  }


  export type ProcessMinAggregateInputType = {
    id?: true
    status?: true
    userId?: true
    owner?: true
    type?: true
    createdAt?: true
  }

  export type ProcessMaxAggregateInputType = {
    id?: true
    status?: true
    userId?: true
    owner?: true
    type?: true
    createdAt?: true
  }

  export type ProcessCountAggregateInputType = {
    id?: true
    status?: true
    userId?: true
    owner?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type ProcessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Process to aggregate.
     */
    where?: ProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processes to fetch.
     */
    orderBy?: ProcessOrderByWithRelationInput | ProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Processes
    **/
    _count?: true | ProcessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcessMaxAggregateInputType
  }

  export type GetProcessAggregateType<T extends ProcessAggregateArgs> = {
        [P in keyof T & keyof AggregateProcess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcess[P]>
      : GetScalarType<T[P], AggregateProcess[P]>
  }




  export type ProcessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessWhereInput
    orderBy?: ProcessOrderByWithAggregationInput | ProcessOrderByWithAggregationInput[]
    by: ProcessScalarFieldEnum[] | ProcessScalarFieldEnum
    having?: ProcessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcessCountAggregateInputType | true
    _min?: ProcessMinAggregateInputType
    _max?: ProcessMaxAggregateInputType
  }

  export type ProcessGroupByOutputType = {
    id: string
    status: $Enums.Status
    userId: string
    owner: string | null
    type: $Enums.ProcessType
    createdAt: Date
    _count: ProcessCountAggregateOutputType | null
    _min: ProcessMinAggregateOutputType | null
    _max: ProcessMaxAggregateOutputType | null
  }

  type GetProcessGroupByPayload<T extends ProcessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcessGroupByOutputType[P]>
            : GetScalarType<T[P], ProcessGroupByOutputType[P]>
        }
      >
    >


  export type ProcessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    userId?: boolean
    owner?: boolean
    type?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    hstsMvs?: boolean | Process$hstsMvsArgs<ExtArgs>
  }, ExtArgs["result"]["process"]>

  export type ProcessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    userId?: boolean
    owner?: boolean
    type?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["process"]>

  export type ProcessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    userId?: boolean
    owner?: boolean
    type?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["process"]>

  export type ProcessSelectScalar = {
    id?: boolean
    status?: boolean
    userId?: boolean
    owner?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type ProcessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "userId" | "owner" | "type" | "createdAt", ExtArgs["result"]["process"]>
  export type ProcessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    hstsMvs?: boolean | Process$hstsMvsArgs<ExtArgs>
  }
  export type ProcessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProcessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProcessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Process"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      hstsMvs: Prisma.$ProcessHstsMvsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.Status
      userId: string
      owner: string | null
      type: $Enums.ProcessType
      createdAt: Date
    }, ExtArgs["result"]["process"]>
    composites: {}
  }

  type ProcessGetPayload<S extends boolean | null | undefined | ProcessDefaultArgs> = $Result.GetResult<Prisma.$ProcessPayload, S>

  type ProcessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProcessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcessCountAggregateInputType | true
    }

  export interface ProcessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Process'], meta: { name: 'Process' } }
    /**
     * Find zero or one Process that matches the filter.
     * @param {ProcessFindUniqueArgs} args - Arguments to find a Process
     * @example
     * // Get one Process
     * const process = await prisma.process.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcessFindUniqueArgs>(args: SelectSubset<T, ProcessFindUniqueArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Process that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcessFindUniqueOrThrowArgs} args - Arguments to find a Process
     * @example
     * // Get one Process
     * const process = await prisma.process.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcessFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Process that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessFindFirstArgs} args - Arguments to find a Process
     * @example
     * // Get one Process
     * const process = await prisma.process.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcessFindFirstArgs>(args?: SelectSubset<T, ProcessFindFirstArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Process that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessFindFirstOrThrowArgs} args - Arguments to find a Process
     * @example
     * // Get one Process
     * const process = await prisma.process.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcessFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcessFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Processes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Processes
     * const processes = await prisma.process.findMany()
     * 
     * // Get first 10 Processes
     * const processes = await prisma.process.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const processWithIdOnly = await prisma.process.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProcessFindManyArgs>(args?: SelectSubset<T, ProcessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Process.
     * @param {ProcessCreateArgs} args - Arguments to create a Process.
     * @example
     * // Create one Process
     * const Process = await prisma.process.create({
     *   data: {
     *     // ... data to create a Process
     *   }
     * })
     * 
     */
    create<T extends ProcessCreateArgs>(args: SelectSubset<T, ProcessCreateArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Processes.
     * @param {ProcessCreateManyArgs} args - Arguments to create many Processes.
     * @example
     * // Create many Processes
     * const process = await prisma.process.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcessCreateManyArgs>(args?: SelectSubset<T, ProcessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Processes and returns the data saved in the database.
     * @param {ProcessCreateManyAndReturnArgs} args - Arguments to create many Processes.
     * @example
     * // Create many Processes
     * const process = await prisma.process.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Processes and only return the `id`
     * const processWithIdOnly = await prisma.process.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProcessCreateManyAndReturnArgs>(args?: SelectSubset<T, ProcessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Process.
     * @param {ProcessDeleteArgs} args - Arguments to delete one Process.
     * @example
     * // Delete one Process
     * const Process = await prisma.process.delete({
     *   where: {
     *     // ... filter to delete one Process
     *   }
     * })
     * 
     */
    delete<T extends ProcessDeleteArgs>(args: SelectSubset<T, ProcessDeleteArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Process.
     * @param {ProcessUpdateArgs} args - Arguments to update one Process.
     * @example
     * // Update one Process
     * const process = await prisma.process.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcessUpdateArgs>(args: SelectSubset<T, ProcessUpdateArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Processes.
     * @param {ProcessDeleteManyArgs} args - Arguments to filter Processes to delete.
     * @example
     * // Delete a few Processes
     * const { count } = await prisma.process.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcessDeleteManyArgs>(args?: SelectSubset<T, ProcessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Processes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Processes
     * const process = await prisma.process.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcessUpdateManyArgs>(args: SelectSubset<T, ProcessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Processes and returns the data updated in the database.
     * @param {ProcessUpdateManyAndReturnArgs} args - Arguments to update many Processes.
     * @example
     * // Update many Processes
     * const process = await prisma.process.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Processes and only return the `id`
     * const processWithIdOnly = await prisma.process.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProcessUpdateManyAndReturnArgs>(args: SelectSubset<T, ProcessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Process.
     * @param {ProcessUpsertArgs} args - Arguments to update or create a Process.
     * @example
     * // Update or create a Process
     * const process = await prisma.process.upsert({
     *   create: {
     *     // ... data to create a Process
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Process we want to update
     *   }
     * })
     */
    upsert<T extends ProcessUpsertArgs>(args: SelectSubset<T, ProcessUpsertArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Processes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessCountArgs} args - Arguments to filter Processes to count.
     * @example
     * // Count the number of Processes
     * const count = await prisma.process.count({
     *   where: {
     *     // ... the filter for the Processes we want to count
     *   }
     * })
    **/
    count<T extends ProcessCountArgs>(
      args?: Subset<T, ProcessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Process.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProcessAggregateArgs>(args: Subset<T, ProcessAggregateArgs>): Prisma.PrismaPromise<GetProcessAggregateType<T>>

    /**
     * Group by Process.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProcessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcessGroupByArgs['orderBy'] }
        : { orderBy?: ProcessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProcessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Process model
   */
  readonly fields: ProcessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Process.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hstsMvs<T extends Process$hstsMvsArgs<ExtArgs> = {}>(args?: Subset<T, Process$hstsMvsArgs<ExtArgs>>): Prisma__ProcessHstsMvsClient<$Result.GetResult<Prisma.$ProcessHstsMvsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Process model
   */
  interface ProcessFieldRefs {
    readonly id: FieldRef<"Process", 'String'>
    readonly status: FieldRef<"Process", 'Status'>
    readonly userId: FieldRef<"Process", 'String'>
    readonly owner: FieldRef<"Process", 'String'>
    readonly type: FieldRef<"Process", 'ProcessType'>
    readonly createdAt: FieldRef<"Process", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Process findUnique
   */
  export type ProcessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * Filter, which Process to fetch.
     */
    where: ProcessWhereUniqueInput
  }

  /**
   * Process findUniqueOrThrow
   */
  export type ProcessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * Filter, which Process to fetch.
     */
    where: ProcessWhereUniqueInput
  }

  /**
   * Process findFirst
   */
  export type ProcessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * Filter, which Process to fetch.
     */
    where?: ProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processes to fetch.
     */
    orderBy?: ProcessOrderByWithRelationInput | ProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Processes.
     */
    cursor?: ProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Processes.
     */
    distinct?: ProcessScalarFieldEnum | ProcessScalarFieldEnum[]
  }

  /**
   * Process findFirstOrThrow
   */
  export type ProcessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * Filter, which Process to fetch.
     */
    where?: ProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processes to fetch.
     */
    orderBy?: ProcessOrderByWithRelationInput | ProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Processes.
     */
    cursor?: ProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Processes.
     */
    distinct?: ProcessScalarFieldEnum | ProcessScalarFieldEnum[]
  }

  /**
   * Process findMany
   */
  export type ProcessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * Filter, which Processes to fetch.
     */
    where?: ProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processes to fetch.
     */
    orderBy?: ProcessOrderByWithRelationInput | ProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Processes.
     */
    cursor?: ProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processes.
     */
    skip?: number
    distinct?: ProcessScalarFieldEnum | ProcessScalarFieldEnum[]
  }

  /**
   * Process create
   */
  export type ProcessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * The data needed to create a Process.
     */
    data: XOR<ProcessCreateInput, ProcessUncheckedCreateInput>
  }

  /**
   * Process createMany
   */
  export type ProcessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Processes.
     */
    data: ProcessCreateManyInput | ProcessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Process createManyAndReturn
   */
  export type ProcessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * The data used to create many Processes.
     */
    data: ProcessCreateManyInput | ProcessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Process update
   */
  export type ProcessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * The data needed to update a Process.
     */
    data: XOR<ProcessUpdateInput, ProcessUncheckedUpdateInput>
    /**
     * Choose, which Process to update.
     */
    where: ProcessWhereUniqueInput
  }

  /**
   * Process updateMany
   */
  export type ProcessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Processes.
     */
    data: XOR<ProcessUpdateManyMutationInput, ProcessUncheckedUpdateManyInput>
    /**
     * Filter which Processes to update
     */
    where?: ProcessWhereInput
    /**
     * Limit how many Processes to update.
     */
    limit?: number
  }

  /**
   * Process updateManyAndReturn
   */
  export type ProcessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * The data used to update Processes.
     */
    data: XOR<ProcessUpdateManyMutationInput, ProcessUncheckedUpdateManyInput>
    /**
     * Filter which Processes to update
     */
    where?: ProcessWhereInput
    /**
     * Limit how many Processes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Process upsert
   */
  export type ProcessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * The filter to search for the Process to update in case it exists.
     */
    where: ProcessWhereUniqueInput
    /**
     * In case the Process found by the `where` argument doesn't exist, create a new Process with this data.
     */
    create: XOR<ProcessCreateInput, ProcessUncheckedCreateInput>
    /**
     * In case the Process was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcessUpdateInput, ProcessUncheckedUpdateInput>
  }

  /**
   * Process delete
   */
  export type ProcessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * Filter which Process to delete.
     */
    where: ProcessWhereUniqueInput
  }

  /**
   * Process deleteMany
   */
  export type ProcessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Processes to delete
     */
    where?: ProcessWhereInput
    /**
     * Limit how many Processes to delete.
     */
    limit?: number
  }

  /**
   * Process.hstsMvs
   */
  export type Process$hstsMvsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessHstsMvs
     */
    select?: ProcessHstsMvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessHstsMvs
     */
    omit?: ProcessHstsMvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessHstsMvsInclude<ExtArgs> | null
    where?: ProcessHstsMvsWhereInput
  }

  /**
   * Process without action
   */
  export type ProcessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
  }


  /**
   * Model ProcessHstsMvs
   */

  export type AggregateProcessHstsMvs = {
    _count: ProcessHstsMvsCountAggregateOutputType | null
    _min: ProcessHstsMvsMinAggregateOutputType | null
    _max: ProcessHstsMvsMaxAggregateOutputType | null
  }

  export type ProcessHstsMvsMinAggregateOutputType = {
    processId: string | null
    driverLicenseFileId: string | null
    carInfoFileId: string | null
    resultFileId: string | null
    stage: $Enums.HstsMvsStage | null
    errorMessage: string | null
  }

  export type ProcessHstsMvsMaxAggregateOutputType = {
    processId: string | null
    driverLicenseFileId: string | null
    carInfoFileId: string | null
    resultFileId: string | null
    stage: $Enums.HstsMvsStage | null
    errorMessage: string | null
  }

  export type ProcessHstsMvsCountAggregateOutputType = {
    processId: number
    driverLicenseFileId: number
    carInfoFileId: number
    resultFileId: number
    stage: number
    errorMessage: number
    _all: number
  }


  export type ProcessHstsMvsMinAggregateInputType = {
    processId?: true
    driverLicenseFileId?: true
    carInfoFileId?: true
    resultFileId?: true
    stage?: true
    errorMessage?: true
  }

  export type ProcessHstsMvsMaxAggregateInputType = {
    processId?: true
    driverLicenseFileId?: true
    carInfoFileId?: true
    resultFileId?: true
    stage?: true
    errorMessage?: true
  }

  export type ProcessHstsMvsCountAggregateInputType = {
    processId?: true
    driverLicenseFileId?: true
    carInfoFileId?: true
    resultFileId?: true
    stage?: true
    errorMessage?: true
    _all?: true
  }

  export type ProcessHstsMvsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessHstsMvs to aggregate.
     */
    where?: ProcessHstsMvsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessHstsMvs to fetch.
     */
    orderBy?: ProcessHstsMvsOrderByWithRelationInput | ProcessHstsMvsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcessHstsMvsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessHstsMvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessHstsMvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProcessHstsMvs
    **/
    _count?: true | ProcessHstsMvsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcessHstsMvsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcessHstsMvsMaxAggregateInputType
  }

  export type GetProcessHstsMvsAggregateType<T extends ProcessHstsMvsAggregateArgs> = {
        [P in keyof T & keyof AggregateProcessHstsMvs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcessHstsMvs[P]>
      : GetScalarType<T[P], AggregateProcessHstsMvs[P]>
  }




  export type ProcessHstsMvsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessHstsMvsWhereInput
    orderBy?: ProcessHstsMvsOrderByWithAggregationInput | ProcessHstsMvsOrderByWithAggregationInput[]
    by: ProcessHstsMvsScalarFieldEnum[] | ProcessHstsMvsScalarFieldEnum
    having?: ProcessHstsMvsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcessHstsMvsCountAggregateInputType | true
    _min?: ProcessHstsMvsMinAggregateInputType
    _max?: ProcessHstsMvsMaxAggregateInputType
  }

  export type ProcessHstsMvsGroupByOutputType = {
    processId: string
    driverLicenseFileId: string
    carInfoFileId: string
    resultFileId: string | null
    stage: $Enums.HstsMvsStage
    errorMessage: string | null
    _count: ProcessHstsMvsCountAggregateOutputType | null
    _min: ProcessHstsMvsMinAggregateOutputType | null
    _max: ProcessHstsMvsMaxAggregateOutputType | null
  }

  type GetProcessHstsMvsGroupByPayload<T extends ProcessHstsMvsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcessHstsMvsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcessHstsMvsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcessHstsMvsGroupByOutputType[P]>
            : GetScalarType<T[P], ProcessHstsMvsGroupByOutputType[P]>
        }
      >
    >


  export type ProcessHstsMvsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    processId?: boolean
    driverLicenseFileId?: boolean
    carInfoFileId?: boolean
    resultFileId?: boolean
    stage?: boolean
    errorMessage?: boolean
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    driverLicenseFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    carInfoFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    resultFile?: boolean | ProcessHstsMvs$resultFileArgs<ExtArgs>
  }, ExtArgs["result"]["processHstsMvs"]>

  export type ProcessHstsMvsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    processId?: boolean
    driverLicenseFileId?: boolean
    carInfoFileId?: boolean
    resultFileId?: boolean
    stage?: boolean
    errorMessage?: boolean
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    driverLicenseFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    carInfoFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    resultFile?: boolean | ProcessHstsMvs$resultFileArgs<ExtArgs>
  }, ExtArgs["result"]["processHstsMvs"]>

  export type ProcessHstsMvsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    processId?: boolean
    driverLicenseFileId?: boolean
    carInfoFileId?: boolean
    resultFileId?: boolean
    stage?: boolean
    errorMessage?: boolean
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    driverLicenseFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    carInfoFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    resultFile?: boolean | ProcessHstsMvs$resultFileArgs<ExtArgs>
  }, ExtArgs["result"]["processHstsMvs"]>

  export type ProcessHstsMvsSelectScalar = {
    processId?: boolean
    driverLicenseFileId?: boolean
    carInfoFileId?: boolean
    resultFileId?: boolean
    stage?: boolean
    errorMessage?: boolean
  }

  export type ProcessHstsMvsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"processId" | "driverLicenseFileId" | "carInfoFileId" | "resultFileId" | "stage" | "errorMessage", ExtArgs["result"]["processHstsMvs"]>
  export type ProcessHstsMvsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    driverLicenseFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    carInfoFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    resultFile?: boolean | ProcessHstsMvs$resultFileArgs<ExtArgs>
  }
  export type ProcessHstsMvsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    driverLicenseFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    carInfoFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    resultFile?: boolean | ProcessHstsMvs$resultFileArgs<ExtArgs>
  }
  export type ProcessHstsMvsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    driverLicenseFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    carInfoFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    resultFile?: boolean | ProcessHstsMvs$resultFileArgs<ExtArgs>
  }

  export type $ProcessHstsMvsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProcessHstsMvs"
    objects: {
      process: Prisma.$ProcessPayload<ExtArgs>
      driverLicenseFile: Prisma.$StorageFilePayload<ExtArgs>
      carInfoFile: Prisma.$StorageFilePayload<ExtArgs>
      resultFile: Prisma.$StorageFilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      processId: string
      driverLicenseFileId: string
      carInfoFileId: string
      resultFileId: string | null
      stage: $Enums.HstsMvsStage
      errorMessage: string | null
    }, ExtArgs["result"]["processHstsMvs"]>
    composites: {}
  }

  type ProcessHstsMvsGetPayload<S extends boolean | null | undefined | ProcessHstsMvsDefaultArgs> = $Result.GetResult<Prisma.$ProcessHstsMvsPayload, S>

  type ProcessHstsMvsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProcessHstsMvsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcessHstsMvsCountAggregateInputType | true
    }

  export interface ProcessHstsMvsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProcessHstsMvs'], meta: { name: 'ProcessHstsMvs' } }
    /**
     * Find zero or one ProcessHstsMvs that matches the filter.
     * @param {ProcessHstsMvsFindUniqueArgs} args - Arguments to find a ProcessHstsMvs
     * @example
     * // Get one ProcessHstsMvs
     * const processHstsMvs = await prisma.processHstsMvs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcessHstsMvsFindUniqueArgs>(args: SelectSubset<T, ProcessHstsMvsFindUniqueArgs<ExtArgs>>): Prisma__ProcessHstsMvsClient<$Result.GetResult<Prisma.$ProcessHstsMvsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProcessHstsMvs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcessHstsMvsFindUniqueOrThrowArgs} args - Arguments to find a ProcessHstsMvs
     * @example
     * // Get one ProcessHstsMvs
     * const processHstsMvs = await prisma.processHstsMvs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcessHstsMvsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcessHstsMvsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcessHstsMvsClient<$Result.GetResult<Prisma.$ProcessHstsMvsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcessHstsMvs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessHstsMvsFindFirstArgs} args - Arguments to find a ProcessHstsMvs
     * @example
     * // Get one ProcessHstsMvs
     * const processHstsMvs = await prisma.processHstsMvs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcessHstsMvsFindFirstArgs>(args?: SelectSubset<T, ProcessHstsMvsFindFirstArgs<ExtArgs>>): Prisma__ProcessHstsMvsClient<$Result.GetResult<Prisma.$ProcessHstsMvsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcessHstsMvs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessHstsMvsFindFirstOrThrowArgs} args - Arguments to find a ProcessHstsMvs
     * @example
     * // Get one ProcessHstsMvs
     * const processHstsMvs = await prisma.processHstsMvs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcessHstsMvsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcessHstsMvsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcessHstsMvsClient<$Result.GetResult<Prisma.$ProcessHstsMvsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProcessHstsMvs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessHstsMvsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProcessHstsMvs
     * const processHstsMvs = await prisma.processHstsMvs.findMany()
     * 
     * // Get first 10 ProcessHstsMvs
     * const processHstsMvs = await prisma.processHstsMvs.findMany({ take: 10 })
     * 
     * // Only select the `processId`
     * const processHstsMvsWithProcessIdOnly = await prisma.processHstsMvs.findMany({ select: { processId: true } })
     * 
     */
    findMany<T extends ProcessHstsMvsFindManyArgs>(args?: SelectSubset<T, ProcessHstsMvsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessHstsMvsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProcessHstsMvs.
     * @param {ProcessHstsMvsCreateArgs} args - Arguments to create a ProcessHstsMvs.
     * @example
     * // Create one ProcessHstsMvs
     * const ProcessHstsMvs = await prisma.processHstsMvs.create({
     *   data: {
     *     // ... data to create a ProcessHstsMvs
     *   }
     * })
     * 
     */
    create<T extends ProcessHstsMvsCreateArgs>(args: SelectSubset<T, ProcessHstsMvsCreateArgs<ExtArgs>>): Prisma__ProcessHstsMvsClient<$Result.GetResult<Prisma.$ProcessHstsMvsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProcessHstsMvs.
     * @param {ProcessHstsMvsCreateManyArgs} args - Arguments to create many ProcessHstsMvs.
     * @example
     * // Create many ProcessHstsMvs
     * const processHstsMvs = await prisma.processHstsMvs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcessHstsMvsCreateManyArgs>(args?: SelectSubset<T, ProcessHstsMvsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProcessHstsMvs and returns the data saved in the database.
     * @param {ProcessHstsMvsCreateManyAndReturnArgs} args - Arguments to create many ProcessHstsMvs.
     * @example
     * // Create many ProcessHstsMvs
     * const processHstsMvs = await prisma.processHstsMvs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProcessHstsMvs and only return the `processId`
     * const processHstsMvsWithProcessIdOnly = await prisma.processHstsMvs.createManyAndReturn({
     *   select: { processId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProcessHstsMvsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProcessHstsMvsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessHstsMvsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProcessHstsMvs.
     * @param {ProcessHstsMvsDeleteArgs} args - Arguments to delete one ProcessHstsMvs.
     * @example
     * // Delete one ProcessHstsMvs
     * const ProcessHstsMvs = await prisma.processHstsMvs.delete({
     *   where: {
     *     // ... filter to delete one ProcessHstsMvs
     *   }
     * })
     * 
     */
    delete<T extends ProcessHstsMvsDeleteArgs>(args: SelectSubset<T, ProcessHstsMvsDeleteArgs<ExtArgs>>): Prisma__ProcessHstsMvsClient<$Result.GetResult<Prisma.$ProcessHstsMvsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProcessHstsMvs.
     * @param {ProcessHstsMvsUpdateArgs} args - Arguments to update one ProcessHstsMvs.
     * @example
     * // Update one ProcessHstsMvs
     * const processHstsMvs = await prisma.processHstsMvs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcessHstsMvsUpdateArgs>(args: SelectSubset<T, ProcessHstsMvsUpdateArgs<ExtArgs>>): Prisma__ProcessHstsMvsClient<$Result.GetResult<Prisma.$ProcessHstsMvsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProcessHstsMvs.
     * @param {ProcessHstsMvsDeleteManyArgs} args - Arguments to filter ProcessHstsMvs to delete.
     * @example
     * // Delete a few ProcessHstsMvs
     * const { count } = await prisma.processHstsMvs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcessHstsMvsDeleteManyArgs>(args?: SelectSubset<T, ProcessHstsMvsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcessHstsMvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessHstsMvsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProcessHstsMvs
     * const processHstsMvs = await prisma.processHstsMvs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcessHstsMvsUpdateManyArgs>(args: SelectSubset<T, ProcessHstsMvsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcessHstsMvs and returns the data updated in the database.
     * @param {ProcessHstsMvsUpdateManyAndReturnArgs} args - Arguments to update many ProcessHstsMvs.
     * @example
     * // Update many ProcessHstsMvs
     * const processHstsMvs = await prisma.processHstsMvs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProcessHstsMvs and only return the `processId`
     * const processHstsMvsWithProcessIdOnly = await prisma.processHstsMvs.updateManyAndReturn({
     *   select: { processId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProcessHstsMvsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProcessHstsMvsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessHstsMvsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProcessHstsMvs.
     * @param {ProcessHstsMvsUpsertArgs} args - Arguments to update or create a ProcessHstsMvs.
     * @example
     * // Update or create a ProcessHstsMvs
     * const processHstsMvs = await prisma.processHstsMvs.upsert({
     *   create: {
     *     // ... data to create a ProcessHstsMvs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProcessHstsMvs we want to update
     *   }
     * })
     */
    upsert<T extends ProcessHstsMvsUpsertArgs>(args: SelectSubset<T, ProcessHstsMvsUpsertArgs<ExtArgs>>): Prisma__ProcessHstsMvsClient<$Result.GetResult<Prisma.$ProcessHstsMvsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProcessHstsMvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessHstsMvsCountArgs} args - Arguments to filter ProcessHstsMvs to count.
     * @example
     * // Count the number of ProcessHstsMvs
     * const count = await prisma.processHstsMvs.count({
     *   where: {
     *     // ... the filter for the ProcessHstsMvs we want to count
     *   }
     * })
    **/
    count<T extends ProcessHstsMvsCountArgs>(
      args?: Subset<T, ProcessHstsMvsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcessHstsMvsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProcessHstsMvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessHstsMvsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProcessHstsMvsAggregateArgs>(args: Subset<T, ProcessHstsMvsAggregateArgs>): Prisma.PrismaPromise<GetProcessHstsMvsAggregateType<T>>

    /**
     * Group by ProcessHstsMvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessHstsMvsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProcessHstsMvsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcessHstsMvsGroupByArgs['orderBy'] }
        : { orderBy?: ProcessHstsMvsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProcessHstsMvsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcessHstsMvsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProcessHstsMvs model
   */
  readonly fields: ProcessHstsMvsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProcessHstsMvs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcessHstsMvsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    process<T extends ProcessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProcessDefaultArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    driverLicenseFile<T extends StorageFileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StorageFileDefaultArgs<ExtArgs>>): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    carInfoFile<T extends StorageFileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StorageFileDefaultArgs<ExtArgs>>): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resultFile<T extends ProcessHstsMvs$resultFileArgs<ExtArgs> = {}>(args?: Subset<T, ProcessHstsMvs$resultFileArgs<ExtArgs>>): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProcessHstsMvs model
   */
  interface ProcessHstsMvsFieldRefs {
    readonly processId: FieldRef<"ProcessHstsMvs", 'String'>
    readonly driverLicenseFileId: FieldRef<"ProcessHstsMvs", 'String'>
    readonly carInfoFileId: FieldRef<"ProcessHstsMvs", 'String'>
    readonly resultFileId: FieldRef<"ProcessHstsMvs", 'String'>
    readonly stage: FieldRef<"ProcessHstsMvs", 'HstsMvsStage'>
    readonly errorMessage: FieldRef<"ProcessHstsMvs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProcessHstsMvs findUnique
   */
  export type ProcessHstsMvsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessHstsMvs
     */
    select?: ProcessHstsMvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessHstsMvs
     */
    omit?: ProcessHstsMvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessHstsMvsInclude<ExtArgs> | null
    /**
     * Filter, which ProcessHstsMvs to fetch.
     */
    where: ProcessHstsMvsWhereUniqueInput
  }

  /**
   * ProcessHstsMvs findUniqueOrThrow
   */
  export type ProcessHstsMvsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessHstsMvs
     */
    select?: ProcessHstsMvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessHstsMvs
     */
    omit?: ProcessHstsMvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessHstsMvsInclude<ExtArgs> | null
    /**
     * Filter, which ProcessHstsMvs to fetch.
     */
    where: ProcessHstsMvsWhereUniqueInput
  }

  /**
   * ProcessHstsMvs findFirst
   */
  export type ProcessHstsMvsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessHstsMvs
     */
    select?: ProcessHstsMvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessHstsMvs
     */
    omit?: ProcessHstsMvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessHstsMvsInclude<ExtArgs> | null
    /**
     * Filter, which ProcessHstsMvs to fetch.
     */
    where?: ProcessHstsMvsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessHstsMvs to fetch.
     */
    orderBy?: ProcessHstsMvsOrderByWithRelationInput | ProcessHstsMvsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessHstsMvs.
     */
    cursor?: ProcessHstsMvsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessHstsMvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessHstsMvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessHstsMvs.
     */
    distinct?: ProcessHstsMvsScalarFieldEnum | ProcessHstsMvsScalarFieldEnum[]
  }

  /**
   * ProcessHstsMvs findFirstOrThrow
   */
  export type ProcessHstsMvsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessHstsMvs
     */
    select?: ProcessHstsMvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessHstsMvs
     */
    omit?: ProcessHstsMvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessHstsMvsInclude<ExtArgs> | null
    /**
     * Filter, which ProcessHstsMvs to fetch.
     */
    where?: ProcessHstsMvsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessHstsMvs to fetch.
     */
    orderBy?: ProcessHstsMvsOrderByWithRelationInput | ProcessHstsMvsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessHstsMvs.
     */
    cursor?: ProcessHstsMvsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessHstsMvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessHstsMvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessHstsMvs.
     */
    distinct?: ProcessHstsMvsScalarFieldEnum | ProcessHstsMvsScalarFieldEnum[]
  }

  /**
   * ProcessHstsMvs findMany
   */
  export type ProcessHstsMvsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessHstsMvs
     */
    select?: ProcessHstsMvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessHstsMvs
     */
    omit?: ProcessHstsMvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessHstsMvsInclude<ExtArgs> | null
    /**
     * Filter, which ProcessHstsMvs to fetch.
     */
    where?: ProcessHstsMvsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessHstsMvs to fetch.
     */
    orderBy?: ProcessHstsMvsOrderByWithRelationInput | ProcessHstsMvsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProcessHstsMvs.
     */
    cursor?: ProcessHstsMvsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessHstsMvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessHstsMvs.
     */
    skip?: number
    distinct?: ProcessHstsMvsScalarFieldEnum | ProcessHstsMvsScalarFieldEnum[]
  }

  /**
   * ProcessHstsMvs create
   */
  export type ProcessHstsMvsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessHstsMvs
     */
    select?: ProcessHstsMvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessHstsMvs
     */
    omit?: ProcessHstsMvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessHstsMvsInclude<ExtArgs> | null
    /**
     * The data needed to create a ProcessHstsMvs.
     */
    data: XOR<ProcessHstsMvsCreateInput, ProcessHstsMvsUncheckedCreateInput>
  }

  /**
   * ProcessHstsMvs createMany
   */
  export type ProcessHstsMvsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProcessHstsMvs.
     */
    data: ProcessHstsMvsCreateManyInput | ProcessHstsMvsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProcessHstsMvs createManyAndReturn
   */
  export type ProcessHstsMvsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessHstsMvs
     */
    select?: ProcessHstsMvsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessHstsMvs
     */
    omit?: ProcessHstsMvsOmit<ExtArgs> | null
    /**
     * The data used to create many ProcessHstsMvs.
     */
    data: ProcessHstsMvsCreateManyInput | ProcessHstsMvsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessHstsMvsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProcessHstsMvs update
   */
  export type ProcessHstsMvsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessHstsMvs
     */
    select?: ProcessHstsMvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessHstsMvs
     */
    omit?: ProcessHstsMvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessHstsMvsInclude<ExtArgs> | null
    /**
     * The data needed to update a ProcessHstsMvs.
     */
    data: XOR<ProcessHstsMvsUpdateInput, ProcessHstsMvsUncheckedUpdateInput>
    /**
     * Choose, which ProcessHstsMvs to update.
     */
    where: ProcessHstsMvsWhereUniqueInput
  }

  /**
   * ProcessHstsMvs updateMany
   */
  export type ProcessHstsMvsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProcessHstsMvs.
     */
    data: XOR<ProcessHstsMvsUpdateManyMutationInput, ProcessHstsMvsUncheckedUpdateManyInput>
    /**
     * Filter which ProcessHstsMvs to update
     */
    where?: ProcessHstsMvsWhereInput
    /**
     * Limit how many ProcessHstsMvs to update.
     */
    limit?: number
  }

  /**
   * ProcessHstsMvs updateManyAndReturn
   */
  export type ProcessHstsMvsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessHstsMvs
     */
    select?: ProcessHstsMvsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessHstsMvs
     */
    omit?: ProcessHstsMvsOmit<ExtArgs> | null
    /**
     * The data used to update ProcessHstsMvs.
     */
    data: XOR<ProcessHstsMvsUpdateManyMutationInput, ProcessHstsMvsUncheckedUpdateManyInput>
    /**
     * Filter which ProcessHstsMvs to update
     */
    where?: ProcessHstsMvsWhereInput
    /**
     * Limit how many ProcessHstsMvs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessHstsMvsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProcessHstsMvs upsert
   */
  export type ProcessHstsMvsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessHstsMvs
     */
    select?: ProcessHstsMvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessHstsMvs
     */
    omit?: ProcessHstsMvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessHstsMvsInclude<ExtArgs> | null
    /**
     * The filter to search for the ProcessHstsMvs to update in case it exists.
     */
    where: ProcessHstsMvsWhereUniqueInput
    /**
     * In case the ProcessHstsMvs found by the `where` argument doesn't exist, create a new ProcessHstsMvs with this data.
     */
    create: XOR<ProcessHstsMvsCreateInput, ProcessHstsMvsUncheckedCreateInput>
    /**
     * In case the ProcessHstsMvs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcessHstsMvsUpdateInput, ProcessHstsMvsUncheckedUpdateInput>
  }

  /**
   * ProcessHstsMvs delete
   */
  export type ProcessHstsMvsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessHstsMvs
     */
    select?: ProcessHstsMvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessHstsMvs
     */
    omit?: ProcessHstsMvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessHstsMvsInclude<ExtArgs> | null
    /**
     * Filter which ProcessHstsMvs to delete.
     */
    where: ProcessHstsMvsWhereUniqueInput
  }

  /**
   * ProcessHstsMvs deleteMany
   */
  export type ProcessHstsMvsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessHstsMvs to delete
     */
    where?: ProcessHstsMvsWhereInput
    /**
     * Limit how many ProcessHstsMvs to delete.
     */
    limit?: number
  }

  /**
   * ProcessHstsMvs.resultFile
   */
  export type ProcessHstsMvs$resultFileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFile
     */
    select?: StorageFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageFile
     */
    omit?: StorageFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageFileInclude<ExtArgs> | null
    where?: StorageFileWhereInput
  }

  /**
   * ProcessHstsMvs without action
   */
  export type ProcessHstsMvsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessHstsMvs
     */
    select?: ProcessHstsMvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessHstsMvs
     */
    omit?: ProcessHstsMvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessHstsMvsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    displayName: 'displayName',
    isSuperUser: 'isSuperUser',
    isBlocked: 'isBlocked',
    isTotpEnabled: 'isTotpEnabled',
    totpSecret: 'totpSecret',
    permissions: 'permissions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StorageFileScalarFieldEnum: {
    id: 'id',
    inputFilename: 'inputFilename',
    outputFilename: 'outputFilename',
    extension: 'extension',
    size: 'size',
    bucket: 'bucket',
    path: 'path'
  };

  export type StorageFileScalarFieldEnum = (typeof StorageFileScalarFieldEnum)[keyof typeof StorageFileScalarFieldEnum]


  export const ProcessScalarFieldEnum: {
    id: 'id',
    status: 'status',
    userId: 'userId',
    owner: 'owner',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type ProcessScalarFieldEnum = (typeof ProcessScalarFieldEnum)[keyof typeof ProcessScalarFieldEnum]


  export const ProcessHstsMvsScalarFieldEnum: {
    processId: 'processId',
    driverLicenseFileId: 'driverLicenseFileId',
    carInfoFileId: 'carInfoFileId',
    resultFileId: 'resultFileId',
    stage: 'stage',
    errorMessage: 'errorMessage'
  };

  export type ProcessHstsMvsScalarFieldEnum = (typeof ProcessHstsMvsScalarFieldEnum)[keyof typeof ProcessHstsMvsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Permission[]'
   */
  export type ListEnumPermissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Permission[]'>
    


  /**
   * Reference to a field of type 'Permission'
   */
  export type EnumPermissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Permission'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'ProcessType'
   */
  export type EnumProcessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProcessType'>
    


  /**
   * Reference to a field of type 'ProcessType[]'
   */
  export type ListEnumProcessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProcessType[]'>
    


  /**
   * Reference to a field of type 'HstsMvsStage'
   */
  export type EnumHstsMvsStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HstsMvsStage'>
    


  /**
   * Reference to a field of type 'HstsMvsStage[]'
   */
  export type ListEnumHstsMvsStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HstsMvsStage[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    isSuperUser?: BoolFilter<"User"> | boolean
    isBlocked?: BoolFilter<"User"> | boolean
    isTotpEnabled?: BoolFilter<"User"> | boolean
    totpSecret?: StringNullableFilter<"User"> | string | null
    permissions?: EnumPermissionNullableListFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    processes?: ProcessListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    isSuperUser?: SortOrder
    isBlocked?: SortOrder
    isTotpEnabled?: SortOrder
    totpSecret?: SortOrderInput | SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    processes?: ProcessOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    isSuperUser?: BoolFilter<"User"> | boolean
    isBlocked?: BoolFilter<"User"> | boolean
    isTotpEnabled?: BoolFilter<"User"> | boolean
    totpSecret?: StringNullableFilter<"User"> | string | null
    permissions?: EnumPermissionNullableListFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    processes?: ProcessListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    isSuperUser?: SortOrder
    isBlocked?: SortOrder
    isTotpEnabled?: SortOrder
    totpSecret?: SortOrderInput | SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringWithAggregatesFilter<"User"> | string
    isSuperUser?: BoolWithAggregatesFilter<"User"> | boolean
    isBlocked?: BoolWithAggregatesFilter<"User"> | boolean
    isTotpEnabled?: BoolWithAggregatesFilter<"User"> | boolean
    totpSecret?: StringNullableWithAggregatesFilter<"User"> | string | null
    permissions?: EnumPermissionNullableListFilter<"User">
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StorageFileWhereInput = {
    AND?: StorageFileWhereInput | StorageFileWhereInput[]
    OR?: StorageFileWhereInput[]
    NOT?: StorageFileWhereInput | StorageFileWhereInput[]
    id?: StringFilter<"StorageFile"> | string
    inputFilename?: StringFilter<"StorageFile"> | string
    outputFilename?: StringNullableFilter<"StorageFile"> | string | null
    extension?: StringFilter<"StorageFile"> | string
    size?: IntFilter<"StorageFile"> | number
    bucket?: StringFilter<"StorageFile"> | string
    path?: StringFilter<"StorageFile"> | string
    driverLicenseProcesses?: ProcessHstsMvsListRelationFilter
    carInfoProcesses?: ProcessHstsMvsListRelationFilter
    resultProcesses?: ProcessHstsMvsListRelationFilter
  }

  export type StorageFileOrderByWithRelationInput = {
    id?: SortOrder
    inputFilename?: SortOrder
    outputFilename?: SortOrderInput | SortOrder
    extension?: SortOrder
    size?: SortOrder
    bucket?: SortOrder
    path?: SortOrder
    driverLicenseProcesses?: ProcessHstsMvsOrderByRelationAggregateInput
    carInfoProcesses?: ProcessHstsMvsOrderByRelationAggregateInput
    resultProcesses?: ProcessHstsMvsOrderByRelationAggregateInput
  }

  export type StorageFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StorageFileWhereInput | StorageFileWhereInput[]
    OR?: StorageFileWhereInput[]
    NOT?: StorageFileWhereInput | StorageFileWhereInput[]
    inputFilename?: StringFilter<"StorageFile"> | string
    outputFilename?: StringNullableFilter<"StorageFile"> | string | null
    extension?: StringFilter<"StorageFile"> | string
    size?: IntFilter<"StorageFile"> | number
    bucket?: StringFilter<"StorageFile"> | string
    path?: StringFilter<"StorageFile"> | string
    driverLicenseProcesses?: ProcessHstsMvsListRelationFilter
    carInfoProcesses?: ProcessHstsMvsListRelationFilter
    resultProcesses?: ProcessHstsMvsListRelationFilter
  }, "id">

  export type StorageFileOrderByWithAggregationInput = {
    id?: SortOrder
    inputFilename?: SortOrder
    outputFilename?: SortOrderInput | SortOrder
    extension?: SortOrder
    size?: SortOrder
    bucket?: SortOrder
    path?: SortOrder
    _count?: StorageFileCountOrderByAggregateInput
    _avg?: StorageFileAvgOrderByAggregateInput
    _max?: StorageFileMaxOrderByAggregateInput
    _min?: StorageFileMinOrderByAggregateInput
    _sum?: StorageFileSumOrderByAggregateInput
  }

  export type StorageFileScalarWhereWithAggregatesInput = {
    AND?: StorageFileScalarWhereWithAggregatesInput | StorageFileScalarWhereWithAggregatesInput[]
    OR?: StorageFileScalarWhereWithAggregatesInput[]
    NOT?: StorageFileScalarWhereWithAggregatesInput | StorageFileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StorageFile"> | string
    inputFilename?: StringWithAggregatesFilter<"StorageFile"> | string
    outputFilename?: StringNullableWithAggregatesFilter<"StorageFile"> | string | null
    extension?: StringWithAggregatesFilter<"StorageFile"> | string
    size?: IntWithAggregatesFilter<"StorageFile"> | number
    bucket?: StringWithAggregatesFilter<"StorageFile"> | string
    path?: StringWithAggregatesFilter<"StorageFile"> | string
  }

  export type ProcessWhereInput = {
    AND?: ProcessWhereInput | ProcessWhereInput[]
    OR?: ProcessWhereInput[]
    NOT?: ProcessWhereInput | ProcessWhereInput[]
    id?: StringFilter<"Process"> | string
    status?: EnumStatusFilter<"Process"> | $Enums.Status
    userId?: StringFilter<"Process"> | string
    owner?: StringNullableFilter<"Process"> | string | null
    type?: EnumProcessTypeFilter<"Process"> | $Enums.ProcessType
    createdAt?: DateTimeFilter<"Process"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    hstsMvs?: XOR<ProcessHstsMvsNullableScalarRelationFilter, ProcessHstsMvsWhereInput> | null
  }

  export type ProcessOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    owner?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    hstsMvs?: ProcessHstsMvsOrderByWithRelationInput
  }

  export type ProcessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProcessWhereInput | ProcessWhereInput[]
    OR?: ProcessWhereInput[]
    NOT?: ProcessWhereInput | ProcessWhereInput[]
    status?: EnumStatusFilter<"Process"> | $Enums.Status
    userId?: StringFilter<"Process"> | string
    owner?: StringNullableFilter<"Process"> | string | null
    type?: EnumProcessTypeFilter<"Process"> | $Enums.ProcessType
    createdAt?: DateTimeFilter<"Process"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    hstsMvs?: XOR<ProcessHstsMvsNullableScalarRelationFilter, ProcessHstsMvsWhereInput> | null
  }, "id">

  export type ProcessOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    owner?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: ProcessCountOrderByAggregateInput
    _max?: ProcessMaxOrderByAggregateInput
    _min?: ProcessMinOrderByAggregateInput
  }

  export type ProcessScalarWhereWithAggregatesInput = {
    AND?: ProcessScalarWhereWithAggregatesInput | ProcessScalarWhereWithAggregatesInput[]
    OR?: ProcessScalarWhereWithAggregatesInput[]
    NOT?: ProcessScalarWhereWithAggregatesInput | ProcessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Process"> | string
    status?: EnumStatusWithAggregatesFilter<"Process"> | $Enums.Status
    userId?: StringWithAggregatesFilter<"Process"> | string
    owner?: StringNullableWithAggregatesFilter<"Process"> | string | null
    type?: EnumProcessTypeWithAggregatesFilter<"Process"> | $Enums.ProcessType
    createdAt?: DateTimeWithAggregatesFilter<"Process"> | Date | string
  }

  export type ProcessHstsMvsWhereInput = {
    AND?: ProcessHstsMvsWhereInput | ProcessHstsMvsWhereInput[]
    OR?: ProcessHstsMvsWhereInput[]
    NOT?: ProcessHstsMvsWhereInput | ProcessHstsMvsWhereInput[]
    processId?: StringFilter<"ProcessHstsMvs"> | string
    driverLicenseFileId?: StringFilter<"ProcessHstsMvs"> | string
    carInfoFileId?: StringFilter<"ProcessHstsMvs"> | string
    resultFileId?: StringNullableFilter<"ProcessHstsMvs"> | string | null
    stage?: EnumHstsMvsStageFilter<"ProcessHstsMvs"> | $Enums.HstsMvsStage
    errorMessage?: StringNullableFilter<"ProcessHstsMvs"> | string | null
    process?: XOR<ProcessScalarRelationFilter, ProcessWhereInput>
    driverLicenseFile?: XOR<StorageFileScalarRelationFilter, StorageFileWhereInput>
    carInfoFile?: XOR<StorageFileScalarRelationFilter, StorageFileWhereInput>
    resultFile?: XOR<StorageFileNullableScalarRelationFilter, StorageFileWhereInput> | null
  }

  export type ProcessHstsMvsOrderByWithRelationInput = {
    processId?: SortOrder
    driverLicenseFileId?: SortOrder
    carInfoFileId?: SortOrder
    resultFileId?: SortOrderInput | SortOrder
    stage?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    process?: ProcessOrderByWithRelationInput
    driverLicenseFile?: StorageFileOrderByWithRelationInput
    carInfoFile?: StorageFileOrderByWithRelationInput
    resultFile?: StorageFileOrderByWithRelationInput
  }

  export type ProcessHstsMvsWhereUniqueInput = Prisma.AtLeast<{
    processId?: string
    AND?: ProcessHstsMvsWhereInput | ProcessHstsMvsWhereInput[]
    OR?: ProcessHstsMvsWhereInput[]
    NOT?: ProcessHstsMvsWhereInput | ProcessHstsMvsWhereInput[]
    driverLicenseFileId?: StringFilter<"ProcessHstsMvs"> | string
    carInfoFileId?: StringFilter<"ProcessHstsMvs"> | string
    resultFileId?: StringNullableFilter<"ProcessHstsMvs"> | string | null
    stage?: EnumHstsMvsStageFilter<"ProcessHstsMvs"> | $Enums.HstsMvsStage
    errorMessage?: StringNullableFilter<"ProcessHstsMvs"> | string | null
    process?: XOR<ProcessScalarRelationFilter, ProcessWhereInput>
    driverLicenseFile?: XOR<StorageFileScalarRelationFilter, StorageFileWhereInput>
    carInfoFile?: XOR<StorageFileScalarRelationFilter, StorageFileWhereInput>
    resultFile?: XOR<StorageFileNullableScalarRelationFilter, StorageFileWhereInput> | null
  }, "processId">

  export type ProcessHstsMvsOrderByWithAggregationInput = {
    processId?: SortOrder
    driverLicenseFileId?: SortOrder
    carInfoFileId?: SortOrder
    resultFileId?: SortOrderInput | SortOrder
    stage?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    _count?: ProcessHstsMvsCountOrderByAggregateInput
    _max?: ProcessHstsMvsMaxOrderByAggregateInput
    _min?: ProcessHstsMvsMinOrderByAggregateInput
  }

  export type ProcessHstsMvsScalarWhereWithAggregatesInput = {
    AND?: ProcessHstsMvsScalarWhereWithAggregatesInput | ProcessHstsMvsScalarWhereWithAggregatesInput[]
    OR?: ProcessHstsMvsScalarWhereWithAggregatesInput[]
    NOT?: ProcessHstsMvsScalarWhereWithAggregatesInput | ProcessHstsMvsScalarWhereWithAggregatesInput[]
    processId?: StringWithAggregatesFilter<"ProcessHstsMvs"> | string
    driverLicenseFileId?: StringWithAggregatesFilter<"ProcessHstsMvs"> | string
    carInfoFileId?: StringWithAggregatesFilter<"ProcessHstsMvs"> | string
    resultFileId?: StringNullableWithAggregatesFilter<"ProcessHstsMvs"> | string | null
    stage?: EnumHstsMvsStageWithAggregatesFilter<"ProcessHstsMvs"> | $Enums.HstsMvsStage
    errorMessage?: StringNullableWithAggregatesFilter<"ProcessHstsMvs"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    displayName: string
    isSuperUser?: boolean
    isBlocked?: boolean
    isTotpEnabled?: boolean
    totpSecret?: string | null
    permissions?: UserCreatepermissionsInput | $Enums.Permission[]
    createdAt?: Date | string
    updatedAt?: Date | string
    processes?: ProcessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    displayName: string
    isSuperUser?: boolean
    isBlocked?: boolean
    isTotpEnabled?: boolean
    totpSecret?: string | null
    permissions?: UserCreatepermissionsInput | $Enums.Permission[]
    createdAt?: Date | string
    updatedAt?: Date | string
    processes?: ProcessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isSuperUser?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isTotpEnabled?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: UserUpdatepermissionsInput | $Enums.Permission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processes?: ProcessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isSuperUser?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isTotpEnabled?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: UserUpdatepermissionsInput | $Enums.Permission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processes?: ProcessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    displayName: string
    isSuperUser?: boolean
    isBlocked?: boolean
    isTotpEnabled?: boolean
    totpSecret?: string | null
    permissions?: UserCreatepermissionsInput | $Enums.Permission[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isSuperUser?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isTotpEnabled?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: UserUpdatepermissionsInput | $Enums.Permission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isSuperUser?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isTotpEnabled?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: UserUpdatepermissionsInput | $Enums.Permission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorageFileCreateInput = {
    id?: string
    inputFilename: string
    outputFilename?: string | null
    extension: string
    size: number
    bucket: string
    path: string
    driverLicenseProcesses?: ProcessHstsMvsCreateNestedManyWithoutDriverLicenseFileInput
    carInfoProcesses?: ProcessHstsMvsCreateNestedManyWithoutCarInfoFileInput
    resultProcesses?: ProcessHstsMvsCreateNestedManyWithoutResultFileInput
  }

  export type StorageFileUncheckedCreateInput = {
    id?: string
    inputFilename: string
    outputFilename?: string | null
    extension: string
    size: number
    bucket: string
    path: string
    driverLicenseProcesses?: ProcessHstsMvsUncheckedCreateNestedManyWithoutDriverLicenseFileInput
    carInfoProcesses?: ProcessHstsMvsUncheckedCreateNestedManyWithoutCarInfoFileInput
    resultProcesses?: ProcessHstsMvsUncheckedCreateNestedManyWithoutResultFileInput
  }

  export type StorageFileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    driverLicenseProcesses?: ProcessHstsMvsUpdateManyWithoutDriverLicenseFileNestedInput
    carInfoProcesses?: ProcessHstsMvsUpdateManyWithoutCarInfoFileNestedInput
    resultProcesses?: ProcessHstsMvsUpdateManyWithoutResultFileNestedInput
  }

  export type StorageFileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    driverLicenseProcesses?: ProcessHstsMvsUncheckedUpdateManyWithoutDriverLicenseFileNestedInput
    carInfoProcesses?: ProcessHstsMvsUncheckedUpdateManyWithoutCarInfoFileNestedInput
    resultProcesses?: ProcessHstsMvsUncheckedUpdateManyWithoutResultFileNestedInput
  }

  export type StorageFileCreateManyInput = {
    id?: string
    inputFilename: string
    outputFilename?: string | null
    extension: string
    size: number
    bucket: string
    path: string
  }

  export type StorageFileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
  }

  export type StorageFileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
  }

  export type ProcessCreateInput = {
    id?: string
    status?: $Enums.Status
    owner?: string | null
    type: $Enums.ProcessType
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProcessesInput
    hstsMvs?: ProcessHstsMvsCreateNestedOneWithoutProcessInput
  }

  export type ProcessUncheckedCreateInput = {
    id?: string
    status?: $Enums.Status
    userId: string
    owner?: string | null
    type: $Enums.ProcessType
    createdAt?: Date | string
    hstsMvs?: ProcessHstsMvsUncheckedCreateNestedOneWithoutProcessInput
  }

  export type ProcessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProcessesNestedInput
    hstsMvs?: ProcessHstsMvsUpdateOneWithoutProcessNestedInput
  }

  export type ProcessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hstsMvs?: ProcessHstsMvsUncheckedUpdateOneWithoutProcessNestedInput
  }

  export type ProcessCreateManyInput = {
    id?: string
    status?: $Enums.Status
    userId: string
    owner?: string | null
    type: $Enums.ProcessType
    createdAt?: Date | string
  }

  export type ProcessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessHstsMvsCreateInput = {
    stage?: $Enums.HstsMvsStage
    errorMessage?: string | null
    process: ProcessCreateNestedOneWithoutHstsMvsInput
    driverLicenseFile: StorageFileCreateNestedOneWithoutDriverLicenseProcessesInput
    carInfoFile: StorageFileCreateNestedOneWithoutCarInfoProcessesInput
    resultFile?: StorageFileCreateNestedOneWithoutResultProcessesInput
  }

  export type ProcessHstsMvsUncheckedCreateInput = {
    processId: string
    driverLicenseFileId: string
    carInfoFileId: string
    resultFileId?: string | null
    stage?: $Enums.HstsMvsStage
    errorMessage?: string | null
  }

  export type ProcessHstsMvsUpdateInput = {
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    process?: ProcessUpdateOneRequiredWithoutHstsMvsNestedInput
    driverLicenseFile?: StorageFileUpdateOneRequiredWithoutDriverLicenseProcessesNestedInput
    carInfoFile?: StorageFileUpdateOneRequiredWithoutCarInfoProcessesNestedInput
    resultFile?: StorageFileUpdateOneWithoutResultProcessesNestedInput
  }

  export type ProcessHstsMvsUncheckedUpdateInput = {
    processId?: StringFieldUpdateOperationsInput | string
    driverLicenseFileId?: StringFieldUpdateOperationsInput | string
    carInfoFileId?: StringFieldUpdateOperationsInput | string
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessHstsMvsCreateManyInput = {
    processId: string
    driverLicenseFileId: string
    carInfoFileId: string
    resultFileId?: string | null
    stage?: $Enums.HstsMvsStage
    errorMessage?: string | null
  }

  export type ProcessHstsMvsUpdateManyMutationInput = {
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessHstsMvsUncheckedUpdateManyInput = {
    processId?: StringFieldUpdateOperationsInput | string
    driverLicenseFileId?: StringFieldUpdateOperationsInput | string
    carInfoFileId?: StringFieldUpdateOperationsInput | string
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumPermissionNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel> | null
    has?: $Enums.Permission | EnumPermissionFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProcessListRelationFilter = {
    every?: ProcessWhereInput
    some?: ProcessWhereInput
    none?: ProcessWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProcessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    isSuperUser?: SortOrder
    isBlocked?: SortOrder
    isTotpEnabled?: SortOrder
    totpSecret?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    isSuperUser?: SortOrder
    isBlocked?: SortOrder
    isTotpEnabled?: SortOrder
    totpSecret?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    isSuperUser?: SortOrder
    isBlocked?: SortOrder
    isTotpEnabled?: SortOrder
    totpSecret?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProcessHstsMvsListRelationFilter = {
    every?: ProcessHstsMvsWhereInput
    some?: ProcessHstsMvsWhereInput
    none?: ProcessHstsMvsWhereInput
  }

  export type ProcessHstsMvsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StorageFileCountOrderByAggregateInput = {
    id?: SortOrder
    inputFilename?: SortOrder
    outputFilename?: SortOrder
    extension?: SortOrder
    size?: SortOrder
    bucket?: SortOrder
    path?: SortOrder
  }

  export type StorageFileAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type StorageFileMaxOrderByAggregateInput = {
    id?: SortOrder
    inputFilename?: SortOrder
    outputFilename?: SortOrder
    extension?: SortOrder
    size?: SortOrder
    bucket?: SortOrder
    path?: SortOrder
  }

  export type StorageFileMinOrderByAggregateInput = {
    id?: SortOrder
    inputFilename?: SortOrder
    outputFilename?: SortOrder
    extension?: SortOrder
    size?: SortOrder
    bucket?: SortOrder
    path?: SortOrder
  }

  export type StorageFileSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type EnumProcessTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessType | EnumProcessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessType[] | ListEnumProcessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessType[] | ListEnumProcessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessTypeFilter<$PrismaModel> | $Enums.ProcessType
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProcessHstsMvsNullableScalarRelationFilter = {
    is?: ProcessHstsMvsWhereInput | null
    isNot?: ProcessHstsMvsWhereInput | null
  }

  export type ProcessCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    owner?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type ProcessMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    owner?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type ProcessMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    owner?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type EnumProcessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessType | EnumProcessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessType[] | ListEnumProcessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessType[] | ListEnumProcessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProcessType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProcessTypeFilter<$PrismaModel>
    _max?: NestedEnumProcessTypeFilter<$PrismaModel>
  }

  export type EnumHstsMvsStageFilter<$PrismaModel = never> = {
    equals?: $Enums.HstsMvsStage | EnumHstsMvsStageFieldRefInput<$PrismaModel>
    in?: $Enums.HstsMvsStage[] | ListEnumHstsMvsStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.HstsMvsStage[] | ListEnumHstsMvsStageFieldRefInput<$PrismaModel>
    not?: NestedEnumHstsMvsStageFilter<$PrismaModel> | $Enums.HstsMvsStage
  }

  export type ProcessScalarRelationFilter = {
    is?: ProcessWhereInput
    isNot?: ProcessWhereInput
  }

  export type StorageFileScalarRelationFilter = {
    is?: StorageFileWhereInput
    isNot?: StorageFileWhereInput
  }

  export type StorageFileNullableScalarRelationFilter = {
    is?: StorageFileWhereInput | null
    isNot?: StorageFileWhereInput | null
  }

  export type ProcessHstsMvsCountOrderByAggregateInput = {
    processId?: SortOrder
    driverLicenseFileId?: SortOrder
    carInfoFileId?: SortOrder
    resultFileId?: SortOrder
    stage?: SortOrder
    errorMessage?: SortOrder
  }

  export type ProcessHstsMvsMaxOrderByAggregateInput = {
    processId?: SortOrder
    driverLicenseFileId?: SortOrder
    carInfoFileId?: SortOrder
    resultFileId?: SortOrder
    stage?: SortOrder
    errorMessage?: SortOrder
  }

  export type ProcessHstsMvsMinOrderByAggregateInput = {
    processId?: SortOrder
    driverLicenseFileId?: SortOrder
    carInfoFileId?: SortOrder
    resultFileId?: SortOrder
    stage?: SortOrder
    errorMessage?: SortOrder
  }

  export type EnumHstsMvsStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HstsMvsStage | EnumHstsMvsStageFieldRefInput<$PrismaModel>
    in?: $Enums.HstsMvsStage[] | ListEnumHstsMvsStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.HstsMvsStage[] | ListEnumHstsMvsStageFieldRefInput<$PrismaModel>
    not?: NestedEnumHstsMvsStageWithAggregatesFilter<$PrismaModel> | $Enums.HstsMvsStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHstsMvsStageFilter<$PrismaModel>
    _max?: NestedEnumHstsMvsStageFilter<$PrismaModel>
  }

  export type UserCreatepermissionsInput = {
    set: $Enums.Permission[]
  }

  export type ProcessCreateNestedManyWithoutUserInput = {
    create?: XOR<ProcessCreateWithoutUserInput, ProcessUncheckedCreateWithoutUserInput> | ProcessCreateWithoutUserInput[] | ProcessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProcessCreateOrConnectWithoutUserInput | ProcessCreateOrConnectWithoutUserInput[]
    createMany?: ProcessCreateManyUserInputEnvelope
    connect?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
  }

  export type ProcessUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProcessCreateWithoutUserInput, ProcessUncheckedCreateWithoutUserInput> | ProcessCreateWithoutUserInput[] | ProcessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProcessCreateOrConnectWithoutUserInput | ProcessCreateOrConnectWithoutUserInput[]
    createMany?: ProcessCreateManyUserInputEnvelope
    connect?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdatepermissionsInput = {
    set?: $Enums.Permission[]
    push?: $Enums.Permission | $Enums.Permission[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProcessUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProcessCreateWithoutUserInput, ProcessUncheckedCreateWithoutUserInput> | ProcessCreateWithoutUserInput[] | ProcessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProcessCreateOrConnectWithoutUserInput | ProcessCreateOrConnectWithoutUserInput[]
    upsert?: ProcessUpsertWithWhereUniqueWithoutUserInput | ProcessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProcessCreateManyUserInputEnvelope
    set?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    disconnect?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    delete?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    connect?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    update?: ProcessUpdateWithWhereUniqueWithoutUserInput | ProcessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProcessUpdateManyWithWhereWithoutUserInput | ProcessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProcessScalarWhereInput | ProcessScalarWhereInput[]
  }

  export type ProcessUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProcessCreateWithoutUserInput, ProcessUncheckedCreateWithoutUserInput> | ProcessCreateWithoutUserInput[] | ProcessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProcessCreateOrConnectWithoutUserInput | ProcessCreateOrConnectWithoutUserInput[]
    upsert?: ProcessUpsertWithWhereUniqueWithoutUserInput | ProcessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProcessCreateManyUserInputEnvelope
    set?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    disconnect?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    delete?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    connect?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    update?: ProcessUpdateWithWhereUniqueWithoutUserInput | ProcessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProcessUpdateManyWithWhereWithoutUserInput | ProcessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProcessScalarWhereInput | ProcessScalarWhereInput[]
  }

  export type ProcessHstsMvsCreateNestedManyWithoutDriverLicenseFileInput = {
    create?: XOR<ProcessHstsMvsCreateWithoutDriverLicenseFileInput, ProcessHstsMvsUncheckedCreateWithoutDriverLicenseFileInput> | ProcessHstsMvsCreateWithoutDriverLicenseFileInput[] | ProcessHstsMvsUncheckedCreateWithoutDriverLicenseFileInput[]
    connectOrCreate?: ProcessHstsMvsCreateOrConnectWithoutDriverLicenseFileInput | ProcessHstsMvsCreateOrConnectWithoutDriverLicenseFileInput[]
    createMany?: ProcessHstsMvsCreateManyDriverLicenseFileInputEnvelope
    connect?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
  }

  export type ProcessHstsMvsCreateNestedManyWithoutCarInfoFileInput = {
    create?: XOR<ProcessHstsMvsCreateWithoutCarInfoFileInput, ProcessHstsMvsUncheckedCreateWithoutCarInfoFileInput> | ProcessHstsMvsCreateWithoutCarInfoFileInput[] | ProcessHstsMvsUncheckedCreateWithoutCarInfoFileInput[]
    connectOrCreate?: ProcessHstsMvsCreateOrConnectWithoutCarInfoFileInput | ProcessHstsMvsCreateOrConnectWithoutCarInfoFileInput[]
    createMany?: ProcessHstsMvsCreateManyCarInfoFileInputEnvelope
    connect?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
  }

  export type ProcessHstsMvsCreateNestedManyWithoutResultFileInput = {
    create?: XOR<ProcessHstsMvsCreateWithoutResultFileInput, ProcessHstsMvsUncheckedCreateWithoutResultFileInput> | ProcessHstsMvsCreateWithoutResultFileInput[] | ProcessHstsMvsUncheckedCreateWithoutResultFileInput[]
    connectOrCreate?: ProcessHstsMvsCreateOrConnectWithoutResultFileInput | ProcessHstsMvsCreateOrConnectWithoutResultFileInput[]
    createMany?: ProcessHstsMvsCreateManyResultFileInputEnvelope
    connect?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
  }

  export type ProcessHstsMvsUncheckedCreateNestedManyWithoutDriverLicenseFileInput = {
    create?: XOR<ProcessHstsMvsCreateWithoutDriverLicenseFileInput, ProcessHstsMvsUncheckedCreateWithoutDriverLicenseFileInput> | ProcessHstsMvsCreateWithoutDriverLicenseFileInput[] | ProcessHstsMvsUncheckedCreateWithoutDriverLicenseFileInput[]
    connectOrCreate?: ProcessHstsMvsCreateOrConnectWithoutDriverLicenseFileInput | ProcessHstsMvsCreateOrConnectWithoutDriverLicenseFileInput[]
    createMany?: ProcessHstsMvsCreateManyDriverLicenseFileInputEnvelope
    connect?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
  }

  export type ProcessHstsMvsUncheckedCreateNestedManyWithoutCarInfoFileInput = {
    create?: XOR<ProcessHstsMvsCreateWithoutCarInfoFileInput, ProcessHstsMvsUncheckedCreateWithoutCarInfoFileInput> | ProcessHstsMvsCreateWithoutCarInfoFileInput[] | ProcessHstsMvsUncheckedCreateWithoutCarInfoFileInput[]
    connectOrCreate?: ProcessHstsMvsCreateOrConnectWithoutCarInfoFileInput | ProcessHstsMvsCreateOrConnectWithoutCarInfoFileInput[]
    createMany?: ProcessHstsMvsCreateManyCarInfoFileInputEnvelope
    connect?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
  }

  export type ProcessHstsMvsUncheckedCreateNestedManyWithoutResultFileInput = {
    create?: XOR<ProcessHstsMvsCreateWithoutResultFileInput, ProcessHstsMvsUncheckedCreateWithoutResultFileInput> | ProcessHstsMvsCreateWithoutResultFileInput[] | ProcessHstsMvsUncheckedCreateWithoutResultFileInput[]
    connectOrCreate?: ProcessHstsMvsCreateOrConnectWithoutResultFileInput | ProcessHstsMvsCreateOrConnectWithoutResultFileInput[]
    createMany?: ProcessHstsMvsCreateManyResultFileInputEnvelope
    connect?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProcessHstsMvsUpdateManyWithoutDriverLicenseFileNestedInput = {
    create?: XOR<ProcessHstsMvsCreateWithoutDriverLicenseFileInput, ProcessHstsMvsUncheckedCreateWithoutDriverLicenseFileInput> | ProcessHstsMvsCreateWithoutDriverLicenseFileInput[] | ProcessHstsMvsUncheckedCreateWithoutDriverLicenseFileInput[]
    connectOrCreate?: ProcessHstsMvsCreateOrConnectWithoutDriverLicenseFileInput | ProcessHstsMvsCreateOrConnectWithoutDriverLicenseFileInput[]
    upsert?: ProcessHstsMvsUpsertWithWhereUniqueWithoutDriverLicenseFileInput | ProcessHstsMvsUpsertWithWhereUniqueWithoutDriverLicenseFileInput[]
    createMany?: ProcessHstsMvsCreateManyDriverLicenseFileInputEnvelope
    set?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
    disconnect?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
    delete?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
    connect?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
    update?: ProcessHstsMvsUpdateWithWhereUniqueWithoutDriverLicenseFileInput | ProcessHstsMvsUpdateWithWhereUniqueWithoutDriverLicenseFileInput[]
    updateMany?: ProcessHstsMvsUpdateManyWithWhereWithoutDriverLicenseFileInput | ProcessHstsMvsUpdateManyWithWhereWithoutDriverLicenseFileInput[]
    deleteMany?: ProcessHstsMvsScalarWhereInput | ProcessHstsMvsScalarWhereInput[]
  }

  export type ProcessHstsMvsUpdateManyWithoutCarInfoFileNestedInput = {
    create?: XOR<ProcessHstsMvsCreateWithoutCarInfoFileInput, ProcessHstsMvsUncheckedCreateWithoutCarInfoFileInput> | ProcessHstsMvsCreateWithoutCarInfoFileInput[] | ProcessHstsMvsUncheckedCreateWithoutCarInfoFileInput[]
    connectOrCreate?: ProcessHstsMvsCreateOrConnectWithoutCarInfoFileInput | ProcessHstsMvsCreateOrConnectWithoutCarInfoFileInput[]
    upsert?: ProcessHstsMvsUpsertWithWhereUniqueWithoutCarInfoFileInput | ProcessHstsMvsUpsertWithWhereUniqueWithoutCarInfoFileInput[]
    createMany?: ProcessHstsMvsCreateManyCarInfoFileInputEnvelope
    set?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
    disconnect?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
    delete?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
    connect?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
    update?: ProcessHstsMvsUpdateWithWhereUniqueWithoutCarInfoFileInput | ProcessHstsMvsUpdateWithWhereUniqueWithoutCarInfoFileInput[]
    updateMany?: ProcessHstsMvsUpdateManyWithWhereWithoutCarInfoFileInput | ProcessHstsMvsUpdateManyWithWhereWithoutCarInfoFileInput[]
    deleteMany?: ProcessHstsMvsScalarWhereInput | ProcessHstsMvsScalarWhereInput[]
  }

  export type ProcessHstsMvsUpdateManyWithoutResultFileNestedInput = {
    create?: XOR<ProcessHstsMvsCreateWithoutResultFileInput, ProcessHstsMvsUncheckedCreateWithoutResultFileInput> | ProcessHstsMvsCreateWithoutResultFileInput[] | ProcessHstsMvsUncheckedCreateWithoutResultFileInput[]
    connectOrCreate?: ProcessHstsMvsCreateOrConnectWithoutResultFileInput | ProcessHstsMvsCreateOrConnectWithoutResultFileInput[]
    upsert?: ProcessHstsMvsUpsertWithWhereUniqueWithoutResultFileInput | ProcessHstsMvsUpsertWithWhereUniqueWithoutResultFileInput[]
    createMany?: ProcessHstsMvsCreateManyResultFileInputEnvelope
    set?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
    disconnect?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
    delete?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
    connect?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
    update?: ProcessHstsMvsUpdateWithWhereUniqueWithoutResultFileInput | ProcessHstsMvsUpdateWithWhereUniqueWithoutResultFileInput[]
    updateMany?: ProcessHstsMvsUpdateManyWithWhereWithoutResultFileInput | ProcessHstsMvsUpdateManyWithWhereWithoutResultFileInput[]
    deleteMany?: ProcessHstsMvsScalarWhereInput | ProcessHstsMvsScalarWhereInput[]
  }

  export type ProcessHstsMvsUncheckedUpdateManyWithoutDriverLicenseFileNestedInput = {
    create?: XOR<ProcessHstsMvsCreateWithoutDriverLicenseFileInput, ProcessHstsMvsUncheckedCreateWithoutDriverLicenseFileInput> | ProcessHstsMvsCreateWithoutDriverLicenseFileInput[] | ProcessHstsMvsUncheckedCreateWithoutDriverLicenseFileInput[]
    connectOrCreate?: ProcessHstsMvsCreateOrConnectWithoutDriverLicenseFileInput | ProcessHstsMvsCreateOrConnectWithoutDriverLicenseFileInput[]
    upsert?: ProcessHstsMvsUpsertWithWhereUniqueWithoutDriverLicenseFileInput | ProcessHstsMvsUpsertWithWhereUniqueWithoutDriverLicenseFileInput[]
    createMany?: ProcessHstsMvsCreateManyDriverLicenseFileInputEnvelope
    set?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
    disconnect?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
    delete?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
    connect?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
    update?: ProcessHstsMvsUpdateWithWhereUniqueWithoutDriverLicenseFileInput | ProcessHstsMvsUpdateWithWhereUniqueWithoutDriverLicenseFileInput[]
    updateMany?: ProcessHstsMvsUpdateManyWithWhereWithoutDriverLicenseFileInput | ProcessHstsMvsUpdateManyWithWhereWithoutDriverLicenseFileInput[]
    deleteMany?: ProcessHstsMvsScalarWhereInput | ProcessHstsMvsScalarWhereInput[]
  }

  export type ProcessHstsMvsUncheckedUpdateManyWithoutCarInfoFileNestedInput = {
    create?: XOR<ProcessHstsMvsCreateWithoutCarInfoFileInput, ProcessHstsMvsUncheckedCreateWithoutCarInfoFileInput> | ProcessHstsMvsCreateWithoutCarInfoFileInput[] | ProcessHstsMvsUncheckedCreateWithoutCarInfoFileInput[]
    connectOrCreate?: ProcessHstsMvsCreateOrConnectWithoutCarInfoFileInput | ProcessHstsMvsCreateOrConnectWithoutCarInfoFileInput[]
    upsert?: ProcessHstsMvsUpsertWithWhereUniqueWithoutCarInfoFileInput | ProcessHstsMvsUpsertWithWhereUniqueWithoutCarInfoFileInput[]
    createMany?: ProcessHstsMvsCreateManyCarInfoFileInputEnvelope
    set?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
    disconnect?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
    delete?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
    connect?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
    update?: ProcessHstsMvsUpdateWithWhereUniqueWithoutCarInfoFileInput | ProcessHstsMvsUpdateWithWhereUniqueWithoutCarInfoFileInput[]
    updateMany?: ProcessHstsMvsUpdateManyWithWhereWithoutCarInfoFileInput | ProcessHstsMvsUpdateManyWithWhereWithoutCarInfoFileInput[]
    deleteMany?: ProcessHstsMvsScalarWhereInput | ProcessHstsMvsScalarWhereInput[]
  }

  export type ProcessHstsMvsUncheckedUpdateManyWithoutResultFileNestedInput = {
    create?: XOR<ProcessHstsMvsCreateWithoutResultFileInput, ProcessHstsMvsUncheckedCreateWithoutResultFileInput> | ProcessHstsMvsCreateWithoutResultFileInput[] | ProcessHstsMvsUncheckedCreateWithoutResultFileInput[]
    connectOrCreate?: ProcessHstsMvsCreateOrConnectWithoutResultFileInput | ProcessHstsMvsCreateOrConnectWithoutResultFileInput[]
    upsert?: ProcessHstsMvsUpsertWithWhereUniqueWithoutResultFileInput | ProcessHstsMvsUpsertWithWhereUniqueWithoutResultFileInput[]
    createMany?: ProcessHstsMvsCreateManyResultFileInputEnvelope
    set?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
    disconnect?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
    delete?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
    connect?: ProcessHstsMvsWhereUniqueInput | ProcessHstsMvsWhereUniqueInput[]
    update?: ProcessHstsMvsUpdateWithWhereUniqueWithoutResultFileInput | ProcessHstsMvsUpdateWithWhereUniqueWithoutResultFileInput[]
    updateMany?: ProcessHstsMvsUpdateManyWithWhereWithoutResultFileInput | ProcessHstsMvsUpdateManyWithWhereWithoutResultFileInput[]
    deleteMany?: ProcessHstsMvsScalarWhereInput | ProcessHstsMvsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProcessesInput = {
    create?: XOR<UserCreateWithoutProcessesInput, UserUncheckedCreateWithoutProcessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProcessesInput
    connect?: UserWhereUniqueInput
  }

  export type ProcessHstsMvsCreateNestedOneWithoutProcessInput = {
    create?: XOR<ProcessHstsMvsCreateWithoutProcessInput, ProcessHstsMvsUncheckedCreateWithoutProcessInput>
    connectOrCreate?: ProcessHstsMvsCreateOrConnectWithoutProcessInput
    connect?: ProcessHstsMvsWhereUniqueInput
  }

  export type ProcessHstsMvsUncheckedCreateNestedOneWithoutProcessInput = {
    create?: XOR<ProcessHstsMvsCreateWithoutProcessInput, ProcessHstsMvsUncheckedCreateWithoutProcessInput>
    connectOrCreate?: ProcessHstsMvsCreateOrConnectWithoutProcessInput
    connect?: ProcessHstsMvsWhereUniqueInput
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type EnumProcessTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProcessType
  }

  export type UserUpdateOneRequiredWithoutProcessesNestedInput = {
    create?: XOR<UserCreateWithoutProcessesInput, UserUncheckedCreateWithoutProcessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProcessesInput
    upsert?: UserUpsertWithoutProcessesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProcessesInput, UserUpdateWithoutProcessesInput>, UserUncheckedUpdateWithoutProcessesInput>
  }

  export type ProcessHstsMvsUpdateOneWithoutProcessNestedInput = {
    create?: XOR<ProcessHstsMvsCreateWithoutProcessInput, ProcessHstsMvsUncheckedCreateWithoutProcessInput>
    connectOrCreate?: ProcessHstsMvsCreateOrConnectWithoutProcessInput
    upsert?: ProcessHstsMvsUpsertWithoutProcessInput
    disconnect?: ProcessHstsMvsWhereInput | boolean
    delete?: ProcessHstsMvsWhereInput | boolean
    connect?: ProcessHstsMvsWhereUniqueInput
    update?: XOR<XOR<ProcessHstsMvsUpdateToOneWithWhereWithoutProcessInput, ProcessHstsMvsUpdateWithoutProcessInput>, ProcessHstsMvsUncheckedUpdateWithoutProcessInput>
  }

  export type ProcessHstsMvsUncheckedUpdateOneWithoutProcessNestedInput = {
    create?: XOR<ProcessHstsMvsCreateWithoutProcessInput, ProcessHstsMvsUncheckedCreateWithoutProcessInput>
    connectOrCreate?: ProcessHstsMvsCreateOrConnectWithoutProcessInput
    upsert?: ProcessHstsMvsUpsertWithoutProcessInput
    disconnect?: ProcessHstsMvsWhereInput | boolean
    delete?: ProcessHstsMvsWhereInput | boolean
    connect?: ProcessHstsMvsWhereUniqueInput
    update?: XOR<XOR<ProcessHstsMvsUpdateToOneWithWhereWithoutProcessInput, ProcessHstsMvsUpdateWithoutProcessInput>, ProcessHstsMvsUncheckedUpdateWithoutProcessInput>
  }

  export type ProcessCreateNestedOneWithoutHstsMvsInput = {
    create?: XOR<ProcessCreateWithoutHstsMvsInput, ProcessUncheckedCreateWithoutHstsMvsInput>
    connectOrCreate?: ProcessCreateOrConnectWithoutHstsMvsInput
    connect?: ProcessWhereUniqueInput
  }

  export type StorageFileCreateNestedOneWithoutDriverLicenseProcessesInput = {
    create?: XOR<StorageFileCreateWithoutDriverLicenseProcessesInput, StorageFileUncheckedCreateWithoutDriverLicenseProcessesInput>
    connectOrCreate?: StorageFileCreateOrConnectWithoutDriverLicenseProcessesInput
    connect?: StorageFileWhereUniqueInput
  }

  export type StorageFileCreateNestedOneWithoutCarInfoProcessesInput = {
    create?: XOR<StorageFileCreateWithoutCarInfoProcessesInput, StorageFileUncheckedCreateWithoutCarInfoProcessesInput>
    connectOrCreate?: StorageFileCreateOrConnectWithoutCarInfoProcessesInput
    connect?: StorageFileWhereUniqueInput
  }

  export type StorageFileCreateNestedOneWithoutResultProcessesInput = {
    create?: XOR<StorageFileCreateWithoutResultProcessesInput, StorageFileUncheckedCreateWithoutResultProcessesInput>
    connectOrCreate?: StorageFileCreateOrConnectWithoutResultProcessesInput
    connect?: StorageFileWhereUniqueInput
  }

  export type EnumHstsMvsStageFieldUpdateOperationsInput = {
    set?: $Enums.HstsMvsStage
  }

  export type ProcessUpdateOneRequiredWithoutHstsMvsNestedInput = {
    create?: XOR<ProcessCreateWithoutHstsMvsInput, ProcessUncheckedCreateWithoutHstsMvsInput>
    connectOrCreate?: ProcessCreateOrConnectWithoutHstsMvsInput
    upsert?: ProcessUpsertWithoutHstsMvsInput
    connect?: ProcessWhereUniqueInput
    update?: XOR<XOR<ProcessUpdateToOneWithWhereWithoutHstsMvsInput, ProcessUpdateWithoutHstsMvsInput>, ProcessUncheckedUpdateWithoutHstsMvsInput>
  }

  export type StorageFileUpdateOneRequiredWithoutDriverLicenseProcessesNestedInput = {
    create?: XOR<StorageFileCreateWithoutDriverLicenseProcessesInput, StorageFileUncheckedCreateWithoutDriverLicenseProcessesInput>
    connectOrCreate?: StorageFileCreateOrConnectWithoutDriverLicenseProcessesInput
    upsert?: StorageFileUpsertWithoutDriverLicenseProcessesInput
    connect?: StorageFileWhereUniqueInput
    update?: XOR<XOR<StorageFileUpdateToOneWithWhereWithoutDriverLicenseProcessesInput, StorageFileUpdateWithoutDriverLicenseProcessesInput>, StorageFileUncheckedUpdateWithoutDriverLicenseProcessesInput>
  }

  export type StorageFileUpdateOneRequiredWithoutCarInfoProcessesNestedInput = {
    create?: XOR<StorageFileCreateWithoutCarInfoProcessesInput, StorageFileUncheckedCreateWithoutCarInfoProcessesInput>
    connectOrCreate?: StorageFileCreateOrConnectWithoutCarInfoProcessesInput
    upsert?: StorageFileUpsertWithoutCarInfoProcessesInput
    connect?: StorageFileWhereUniqueInput
    update?: XOR<XOR<StorageFileUpdateToOneWithWhereWithoutCarInfoProcessesInput, StorageFileUpdateWithoutCarInfoProcessesInput>, StorageFileUncheckedUpdateWithoutCarInfoProcessesInput>
  }

  export type StorageFileUpdateOneWithoutResultProcessesNestedInput = {
    create?: XOR<StorageFileCreateWithoutResultProcessesInput, StorageFileUncheckedCreateWithoutResultProcessesInput>
    connectOrCreate?: StorageFileCreateOrConnectWithoutResultProcessesInput
    upsert?: StorageFileUpsertWithoutResultProcessesInput
    disconnect?: StorageFileWhereInput | boolean
    delete?: StorageFileWhereInput | boolean
    connect?: StorageFileWhereUniqueInput
    update?: XOR<XOR<StorageFileUpdateToOneWithWhereWithoutResultProcessesInput, StorageFileUpdateWithoutResultProcessesInput>, StorageFileUncheckedUpdateWithoutResultProcessesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumProcessTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessType | EnumProcessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessType[] | ListEnumProcessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessType[] | ListEnumProcessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessTypeFilter<$PrismaModel> | $Enums.ProcessType
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumProcessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessType | EnumProcessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessType[] | ListEnumProcessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessType[] | ListEnumProcessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProcessType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProcessTypeFilter<$PrismaModel>
    _max?: NestedEnumProcessTypeFilter<$PrismaModel>
  }

  export type NestedEnumHstsMvsStageFilter<$PrismaModel = never> = {
    equals?: $Enums.HstsMvsStage | EnumHstsMvsStageFieldRefInput<$PrismaModel>
    in?: $Enums.HstsMvsStage[] | ListEnumHstsMvsStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.HstsMvsStage[] | ListEnumHstsMvsStageFieldRefInput<$PrismaModel>
    not?: NestedEnumHstsMvsStageFilter<$PrismaModel> | $Enums.HstsMvsStage
  }

  export type NestedEnumHstsMvsStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HstsMvsStage | EnumHstsMvsStageFieldRefInput<$PrismaModel>
    in?: $Enums.HstsMvsStage[] | ListEnumHstsMvsStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.HstsMvsStage[] | ListEnumHstsMvsStageFieldRefInput<$PrismaModel>
    not?: NestedEnumHstsMvsStageWithAggregatesFilter<$PrismaModel> | $Enums.HstsMvsStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHstsMvsStageFilter<$PrismaModel>
    _max?: NestedEnumHstsMvsStageFilter<$PrismaModel>
  }

  export type ProcessCreateWithoutUserInput = {
    id?: string
    status?: $Enums.Status
    owner?: string | null
    type: $Enums.ProcessType
    createdAt?: Date | string
    hstsMvs?: ProcessHstsMvsCreateNestedOneWithoutProcessInput
  }

  export type ProcessUncheckedCreateWithoutUserInput = {
    id?: string
    status?: $Enums.Status
    owner?: string | null
    type: $Enums.ProcessType
    createdAt?: Date | string
    hstsMvs?: ProcessHstsMvsUncheckedCreateNestedOneWithoutProcessInput
  }

  export type ProcessCreateOrConnectWithoutUserInput = {
    where: ProcessWhereUniqueInput
    create: XOR<ProcessCreateWithoutUserInput, ProcessUncheckedCreateWithoutUserInput>
  }

  export type ProcessCreateManyUserInputEnvelope = {
    data: ProcessCreateManyUserInput | ProcessCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProcessUpsertWithWhereUniqueWithoutUserInput = {
    where: ProcessWhereUniqueInput
    update: XOR<ProcessUpdateWithoutUserInput, ProcessUncheckedUpdateWithoutUserInput>
    create: XOR<ProcessCreateWithoutUserInput, ProcessUncheckedCreateWithoutUserInput>
  }

  export type ProcessUpdateWithWhereUniqueWithoutUserInput = {
    where: ProcessWhereUniqueInput
    data: XOR<ProcessUpdateWithoutUserInput, ProcessUncheckedUpdateWithoutUserInput>
  }

  export type ProcessUpdateManyWithWhereWithoutUserInput = {
    where: ProcessScalarWhereInput
    data: XOR<ProcessUpdateManyMutationInput, ProcessUncheckedUpdateManyWithoutUserInput>
  }

  export type ProcessScalarWhereInput = {
    AND?: ProcessScalarWhereInput | ProcessScalarWhereInput[]
    OR?: ProcessScalarWhereInput[]
    NOT?: ProcessScalarWhereInput | ProcessScalarWhereInput[]
    id?: StringFilter<"Process"> | string
    status?: EnumStatusFilter<"Process"> | $Enums.Status
    userId?: StringFilter<"Process"> | string
    owner?: StringNullableFilter<"Process"> | string | null
    type?: EnumProcessTypeFilter<"Process"> | $Enums.ProcessType
    createdAt?: DateTimeFilter<"Process"> | Date | string
  }

  export type ProcessHstsMvsCreateWithoutDriverLicenseFileInput = {
    stage?: $Enums.HstsMvsStage
    errorMessage?: string | null
    process: ProcessCreateNestedOneWithoutHstsMvsInput
    carInfoFile: StorageFileCreateNestedOneWithoutCarInfoProcessesInput
    resultFile?: StorageFileCreateNestedOneWithoutResultProcessesInput
  }

  export type ProcessHstsMvsUncheckedCreateWithoutDriverLicenseFileInput = {
    processId: string
    carInfoFileId: string
    resultFileId?: string | null
    stage?: $Enums.HstsMvsStage
    errorMessage?: string | null
  }

  export type ProcessHstsMvsCreateOrConnectWithoutDriverLicenseFileInput = {
    where: ProcessHstsMvsWhereUniqueInput
    create: XOR<ProcessHstsMvsCreateWithoutDriverLicenseFileInput, ProcessHstsMvsUncheckedCreateWithoutDriverLicenseFileInput>
  }

  export type ProcessHstsMvsCreateManyDriverLicenseFileInputEnvelope = {
    data: ProcessHstsMvsCreateManyDriverLicenseFileInput | ProcessHstsMvsCreateManyDriverLicenseFileInput[]
    skipDuplicates?: boolean
  }

  export type ProcessHstsMvsCreateWithoutCarInfoFileInput = {
    stage?: $Enums.HstsMvsStage
    errorMessage?: string | null
    process: ProcessCreateNestedOneWithoutHstsMvsInput
    driverLicenseFile: StorageFileCreateNestedOneWithoutDriverLicenseProcessesInput
    resultFile?: StorageFileCreateNestedOneWithoutResultProcessesInput
  }

  export type ProcessHstsMvsUncheckedCreateWithoutCarInfoFileInput = {
    processId: string
    driverLicenseFileId: string
    resultFileId?: string | null
    stage?: $Enums.HstsMvsStage
    errorMessage?: string | null
  }

  export type ProcessHstsMvsCreateOrConnectWithoutCarInfoFileInput = {
    where: ProcessHstsMvsWhereUniqueInput
    create: XOR<ProcessHstsMvsCreateWithoutCarInfoFileInput, ProcessHstsMvsUncheckedCreateWithoutCarInfoFileInput>
  }

  export type ProcessHstsMvsCreateManyCarInfoFileInputEnvelope = {
    data: ProcessHstsMvsCreateManyCarInfoFileInput | ProcessHstsMvsCreateManyCarInfoFileInput[]
    skipDuplicates?: boolean
  }

  export type ProcessHstsMvsCreateWithoutResultFileInput = {
    stage?: $Enums.HstsMvsStage
    errorMessage?: string | null
    process: ProcessCreateNestedOneWithoutHstsMvsInput
    driverLicenseFile: StorageFileCreateNestedOneWithoutDriverLicenseProcessesInput
    carInfoFile: StorageFileCreateNestedOneWithoutCarInfoProcessesInput
  }

  export type ProcessHstsMvsUncheckedCreateWithoutResultFileInput = {
    processId: string
    driverLicenseFileId: string
    carInfoFileId: string
    stage?: $Enums.HstsMvsStage
    errorMessage?: string | null
  }

  export type ProcessHstsMvsCreateOrConnectWithoutResultFileInput = {
    where: ProcessHstsMvsWhereUniqueInput
    create: XOR<ProcessHstsMvsCreateWithoutResultFileInput, ProcessHstsMvsUncheckedCreateWithoutResultFileInput>
  }

  export type ProcessHstsMvsCreateManyResultFileInputEnvelope = {
    data: ProcessHstsMvsCreateManyResultFileInput | ProcessHstsMvsCreateManyResultFileInput[]
    skipDuplicates?: boolean
  }

  export type ProcessHstsMvsUpsertWithWhereUniqueWithoutDriverLicenseFileInput = {
    where: ProcessHstsMvsWhereUniqueInput
    update: XOR<ProcessHstsMvsUpdateWithoutDriverLicenseFileInput, ProcessHstsMvsUncheckedUpdateWithoutDriverLicenseFileInput>
    create: XOR<ProcessHstsMvsCreateWithoutDriverLicenseFileInput, ProcessHstsMvsUncheckedCreateWithoutDriverLicenseFileInput>
  }

  export type ProcessHstsMvsUpdateWithWhereUniqueWithoutDriverLicenseFileInput = {
    where: ProcessHstsMvsWhereUniqueInput
    data: XOR<ProcessHstsMvsUpdateWithoutDriverLicenseFileInput, ProcessHstsMvsUncheckedUpdateWithoutDriverLicenseFileInput>
  }

  export type ProcessHstsMvsUpdateManyWithWhereWithoutDriverLicenseFileInput = {
    where: ProcessHstsMvsScalarWhereInput
    data: XOR<ProcessHstsMvsUpdateManyMutationInput, ProcessHstsMvsUncheckedUpdateManyWithoutDriverLicenseFileInput>
  }

  export type ProcessHstsMvsScalarWhereInput = {
    AND?: ProcessHstsMvsScalarWhereInput | ProcessHstsMvsScalarWhereInput[]
    OR?: ProcessHstsMvsScalarWhereInput[]
    NOT?: ProcessHstsMvsScalarWhereInput | ProcessHstsMvsScalarWhereInput[]
    processId?: StringFilter<"ProcessHstsMvs"> | string
    driverLicenseFileId?: StringFilter<"ProcessHstsMvs"> | string
    carInfoFileId?: StringFilter<"ProcessHstsMvs"> | string
    resultFileId?: StringNullableFilter<"ProcessHstsMvs"> | string | null
    stage?: EnumHstsMvsStageFilter<"ProcessHstsMvs"> | $Enums.HstsMvsStage
    errorMessage?: StringNullableFilter<"ProcessHstsMvs"> | string | null
  }

  export type ProcessHstsMvsUpsertWithWhereUniqueWithoutCarInfoFileInput = {
    where: ProcessHstsMvsWhereUniqueInput
    update: XOR<ProcessHstsMvsUpdateWithoutCarInfoFileInput, ProcessHstsMvsUncheckedUpdateWithoutCarInfoFileInput>
    create: XOR<ProcessHstsMvsCreateWithoutCarInfoFileInput, ProcessHstsMvsUncheckedCreateWithoutCarInfoFileInput>
  }

  export type ProcessHstsMvsUpdateWithWhereUniqueWithoutCarInfoFileInput = {
    where: ProcessHstsMvsWhereUniqueInput
    data: XOR<ProcessHstsMvsUpdateWithoutCarInfoFileInput, ProcessHstsMvsUncheckedUpdateWithoutCarInfoFileInput>
  }

  export type ProcessHstsMvsUpdateManyWithWhereWithoutCarInfoFileInput = {
    where: ProcessHstsMvsScalarWhereInput
    data: XOR<ProcessHstsMvsUpdateManyMutationInput, ProcessHstsMvsUncheckedUpdateManyWithoutCarInfoFileInput>
  }

  export type ProcessHstsMvsUpsertWithWhereUniqueWithoutResultFileInput = {
    where: ProcessHstsMvsWhereUniqueInput
    update: XOR<ProcessHstsMvsUpdateWithoutResultFileInput, ProcessHstsMvsUncheckedUpdateWithoutResultFileInput>
    create: XOR<ProcessHstsMvsCreateWithoutResultFileInput, ProcessHstsMvsUncheckedCreateWithoutResultFileInput>
  }

  export type ProcessHstsMvsUpdateWithWhereUniqueWithoutResultFileInput = {
    where: ProcessHstsMvsWhereUniqueInput
    data: XOR<ProcessHstsMvsUpdateWithoutResultFileInput, ProcessHstsMvsUncheckedUpdateWithoutResultFileInput>
  }

  export type ProcessHstsMvsUpdateManyWithWhereWithoutResultFileInput = {
    where: ProcessHstsMvsScalarWhereInput
    data: XOR<ProcessHstsMvsUpdateManyMutationInput, ProcessHstsMvsUncheckedUpdateManyWithoutResultFileInput>
  }

  export type UserCreateWithoutProcessesInput = {
    id?: string
    username: string
    password: string
    displayName: string
    isSuperUser?: boolean
    isBlocked?: boolean
    isTotpEnabled?: boolean
    totpSecret?: string | null
    permissions?: UserCreatepermissionsInput | $Enums.Permission[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutProcessesInput = {
    id?: string
    username: string
    password: string
    displayName: string
    isSuperUser?: boolean
    isBlocked?: boolean
    isTotpEnabled?: boolean
    totpSecret?: string | null
    permissions?: UserCreatepermissionsInput | $Enums.Permission[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutProcessesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProcessesInput, UserUncheckedCreateWithoutProcessesInput>
  }

  export type ProcessHstsMvsCreateWithoutProcessInput = {
    stage?: $Enums.HstsMvsStage
    errorMessage?: string | null
    driverLicenseFile: StorageFileCreateNestedOneWithoutDriverLicenseProcessesInput
    carInfoFile: StorageFileCreateNestedOneWithoutCarInfoProcessesInput
    resultFile?: StorageFileCreateNestedOneWithoutResultProcessesInput
  }

  export type ProcessHstsMvsUncheckedCreateWithoutProcessInput = {
    driverLicenseFileId: string
    carInfoFileId: string
    resultFileId?: string | null
    stage?: $Enums.HstsMvsStage
    errorMessage?: string | null
  }

  export type ProcessHstsMvsCreateOrConnectWithoutProcessInput = {
    where: ProcessHstsMvsWhereUniqueInput
    create: XOR<ProcessHstsMvsCreateWithoutProcessInput, ProcessHstsMvsUncheckedCreateWithoutProcessInput>
  }

  export type UserUpsertWithoutProcessesInput = {
    update: XOR<UserUpdateWithoutProcessesInput, UserUncheckedUpdateWithoutProcessesInput>
    create: XOR<UserCreateWithoutProcessesInput, UserUncheckedCreateWithoutProcessesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProcessesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProcessesInput, UserUncheckedUpdateWithoutProcessesInput>
  }

  export type UserUpdateWithoutProcessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isSuperUser?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isTotpEnabled?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: UserUpdatepermissionsInput | $Enums.Permission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutProcessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isSuperUser?: BoolFieldUpdateOperationsInput | boolean
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    isTotpEnabled?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: UserUpdatepermissionsInput | $Enums.Permission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessHstsMvsUpsertWithoutProcessInput = {
    update: XOR<ProcessHstsMvsUpdateWithoutProcessInput, ProcessHstsMvsUncheckedUpdateWithoutProcessInput>
    create: XOR<ProcessHstsMvsCreateWithoutProcessInput, ProcessHstsMvsUncheckedCreateWithoutProcessInput>
    where?: ProcessHstsMvsWhereInput
  }

  export type ProcessHstsMvsUpdateToOneWithWhereWithoutProcessInput = {
    where?: ProcessHstsMvsWhereInput
    data: XOR<ProcessHstsMvsUpdateWithoutProcessInput, ProcessHstsMvsUncheckedUpdateWithoutProcessInput>
  }

  export type ProcessHstsMvsUpdateWithoutProcessInput = {
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    driverLicenseFile?: StorageFileUpdateOneRequiredWithoutDriverLicenseProcessesNestedInput
    carInfoFile?: StorageFileUpdateOneRequiredWithoutCarInfoProcessesNestedInput
    resultFile?: StorageFileUpdateOneWithoutResultProcessesNestedInput
  }

  export type ProcessHstsMvsUncheckedUpdateWithoutProcessInput = {
    driverLicenseFileId?: StringFieldUpdateOperationsInput | string
    carInfoFileId?: StringFieldUpdateOperationsInput | string
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessCreateWithoutHstsMvsInput = {
    id?: string
    status?: $Enums.Status
    owner?: string | null
    type: $Enums.ProcessType
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProcessesInput
  }

  export type ProcessUncheckedCreateWithoutHstsMvsInput = {
    id?: string
    status?: $Enums.Status
    userId: string
    owner?: string | null
    type: $Enums.ProcessType
    createdAt?: Date | string
  }

  export type ProcessCreateOrConnectWithoutHstsMvsInput = {
    where: ProcessWhereUniqueInput
    create: XOR<ProcessCreateWithoutHstsMvsInput, ProcessUncheckedCreateWithoutHstsMvsInput>
  }

  export type StorageFileCreateWithoutDriverLicenseProcessesInput = {
    id?: string
    inputFilename: string
    outputFilename?: string | null
    extension: string
    size: number
    bucket: string
    path: string
    carInfoProcesses?: ProcessHstsMvsCreateNestedManyWithoutCarInfoFileInput
    resultProcesses?: ProcessHstsMvsCreateNestedManyWithoutResultFileInput
  }

  export type StorageFileUncheckedCreateWithoutDriverLicenseProcessesInput = {
    id?: string
    inputFilename: string
    outputFilename?: string | null
    extension: string
    size: number
    bucket: string
    path: string
    carInfoProcesses?: ProcessHstsMvsUncheckedCreateNestedManyWithoutCarInfoFileInput
    resultProcesses?: ProcessHstsMvsUncheckedCreateNestedManyWithoutResultFileInput
  }

  export type StorageFileCreateOrConnectWithoutDriverLicenseProcessesInput = {
    where: StorageFileWhereUniqueInput
    create: XOR<StorageFileCreateWithoutDriverLicenseProcessesInput, StorageFileUncheckedCreateWithoutDriverLicenseProcessesInput>
  }

  export type StorageFileCreateWithoutCarInfoProcessesInput = {
    id?: string
    inputFilename: string
    outputFilename?: string | null
    extension: string
    size: number
    bucket: string
    path: string
    driverLicenseProcesses?: ProcessHstsMvsCreateNestedManyWithoutDriverLicenseFileInput
    resultProcesses?: ProcessHstsMvsCreateNestedManyWithoutResultFileInput
  }

  export type StorageFileUncheckedCreateWithoutCarInfoProcessesInput = {
    id?: string
    inputFilename: string
    outputFilename?: string | null
    extension: string
    size: number
    bucket: string
    path: string
    driverLicenseProcesses?: ProcessHstsMvsUncheckedCreateNestedManyWithoutDriverLicenseFileInput
    resultProcesses?: ProcessHstsMvsUncheckedCreateNestedManyWithoutResultFileInput
  }

  export type StorageFileCreateOrConnectWithoutCarInfoProcessesInput = {
    where: StorageFileWhereUniqueInput
    create: XOR<StorageFileCreateWithoutCarInfoProcessesInput, StorageFileUncheckedCreateWithoutCarInfoProcessesInput>
  }

  export type StorageFileCreateWithoutResultProcessesInput = {
    id?: string
    inputFilename: string
    outputFilename?: string | null
    extension: string
    size: number
    bucket: string
    path: string
    driverLicenseProcesses?: ProcessHstsMvsCreateNestedManyWithoutDriverLicenseFileInput
    carInfoProcesses?: ProcessHstsMvsCreateNestedManyWithoutCarInfoFileInput
  }

  export type StorageFileUncheckedCreateWithoutResultProcessesInput = {
    id?: string
    inputFilename: string
    outputFilename?: string | null
    extension: string
    size: number
    bucket: string
    path: string
    driverLicenseProcesses?: ProcessHstsMvsUncheckedCreateNestedManyWithoutDriverLicenseFileInput
    carInfoProcesses?: ProcessHstsMvsUncheckedCreateNestedManyWithoutCarInfoFileInput
  }

  export type StorageFileCreateOrConnectWithoutResultProcessesInput = {
    where: StorageFileWhereUniqueInput
    create: XOR<StorageFileCreateWithoutResultProcessesInput, StorageFileUncheckedCreateWithoutResultProcessesInput>
  }

  export type ProcessUpsertWithoutHstsMvsInput = {
    update: XOR<ProcessUpdateWithoutHstsMvsInput, ProcessUncheckedUpdateWithoutHstsMvsInput>
    create: XOR<ProcessCreateWithoutHstsMvsInput, ProcessUncheckedCreateWithoutHstsMvsInput>
    where?: ProcessWhereInput
  }

  export type ProcessUpdateToOneWithWhereWithoutHstsMvsInput = {
    where?: ProcessWhereInput
    data: XOR<ProcessUpdateWithoutHstsMvsInput, ProcessUncheckedUpdateWithoutHstsMvsInput>
  }

  export type ProcessUpdateWithoutHstsMvsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProcessesNestedInput
  }

  export type ProcessUncheckedUpdateWithoutHstsMvsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorageFileUpsertWithoutDriverLicenseProcessesInput = {
    update: XOR<StorageFileUpdateWithoutDriverLicenseProcessesInput, StorageFileUncheckedUpdateWithoutDriverLicenseProcessesInput>
    create: XOR<StorageFileCreateWithoutDriverLicenseProcessesInput, StorageFileUncheckedCreateWithoutDriverLicenseProcessesInput>
    where?: StorageFileWhereInput
  }

  export type StorageFileUpdateToOneWithWhereWithoutDriverLicenseProcessesInput = {
    where?: StorageFileWhereInput
    data: XOR<StorageFileUpdateWithoutDriverLicenseProcessesInput, StorageFileUncheckedUpdateWithoutDriverLicenseProcessesInput>
  }

  export type StorageFileUpdateWithoutDriverLicenseProcessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    carInfoProcesses?: ProcessHstsMvsUpdateManyWithoutCarInfoFileNestedInput
    resultProcesses?: ProcessHstsMvsUpdateManyWithoutResultFileNestedInput
  }

  export type StorageFileUncheckedUpdateWithoutDriverLicenseProcessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    carInfoProcesses?: ProcessHstsMvsUncheckedUpdateManyWithoutCarInfoFileNestedInput
    resultProcesses?: ProcessHstsMvsUncheckedUpdateManyWithoutResultFileNestedInput
  }

  export type StorageFileUpsertWithoutCarInfoProcessesInput = {
    update: XOR<StorageFileUpdateWithoutCarInfoProcessesInput, StorageFileUncheckedUpdateWithoutCarInfoProcessesInput>
    create: XOR<StorageFileCreateWithoutCarInfoProcessesInput, StorageFileUncheckedCreateWithoutCarInfoProcessesInput>
    where?: StorageFileWhereInput
  }

  export type StorageFileUpdateToOneWithWhereWithoutCarInfoProcessesInput = {
    where?: StorageFileWhereInput
    data: XOR<StorageFileUpdateWithoutCarInfoProcessesInput, StorageFileUncheckedUpdateWithoutCarInfoProcessesInput>
  }

  export type StorageFileUpdateWithoutCarInfoProcessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    driverLicenseProcesses?: ProcessHstsMvsUpdateManyWithoutDriverLicenseFileNestedInput
    resultProcesses?: ProcessHstsMvsUpdateManyWithoutResultFileNestedInput
  }

  export type StorageFileUncheckedUpdateWithoutCarInfoProcessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    driverLicenseProcesses?: ProcessHstsMvsUncheckedUpdateManyWithoutDriverLicenseFileNestedInput
    resultProcesses?: ProcessHstsMvsUncheckedUpdateManyWithoutResultFileNestedInput
  }

  export type StorageFileUpsertWithoutResultProcessesInput = {
    update: XOR<StorageFileUpdateWithoutResultProcessesInput, StorageFileUncheckedUpdateWithoutResultProcessesInput>
    create: XOR<StorageFileCreateWithoutResultProcessesInput, StorageFileUncheckedCreateWithoutResultProcessesInput>
    where?: StorageFileWhereInput
  }

  export type StorageFileUpdateToOneWithWhereWithoutResultProcessesInput = {
    where?: StorageFileWhereInput
    data: XOR<StorageFileUpdateWithoutResultProcessesInput, StorageFileUncheckedUpdateWithoutResultProcessesInput>
  }

  export type StorageFileUpdateWithoutResultProcessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    driverLicenseProcesses?: ProcessHstsMvsUpdateManyWithoutDriverLicenseFileNestedInput
    carInfoProcesses?: ProcessHstsMvsUpdateManyWithoutCarInfoFileNestedInput
  }

  export type StorageFileUncheckedUpdateWithoutResultProcessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    driverLicenseProcesses?: ProcessHstsMvsUncheckedUpdateManyWithoutDriverLicenseFileNestedInput
    carInfoProcesses?: ProcessHstsMvsUncheckedUpdateManyWithoutCarInfoFileNestedInput
  }

  export type ProcessCreateManyUserInput = {
    id?: string
    status?: $Enums.Status
    owner?: string | null
    type: $Enums.ProcessType
    createdAt?: Date | string
  }

  export type ProcessUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hstsMvs?: ProcessHstsMvsUpdateOneWithoutProcessNestedInput
  }

  export type ProcessUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hstsMvs?: ProcessHstsMvsUncheckedUpdateOneWithoutProcessNestedInput
  }

  export type ProcessUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessHstsMvsCreateManyDriverLicenseFileInput = {
    processId: string
    carInfoFileId: string
    resultFileId?: string | null
    stage?: $Enums.HstsMvsStage
    errorMessage?: string | null
  }

  export type ProcessHstsMvsCreateManyCarInfoFileInput = {
    processId: string
    driverLicenseFileId: string
    resultFileId?: string | null
    stage?: $Enums.HstsMvsStage
    errorMessage?: string | null
  }

  export type ProcessHstsMvsCreateManyResultFileInput = {
    processId: string
    driverLicenseFileId: string
    carInfoFileId: string
    stage?: $Enums.HstsMvsStage
    errorMessage?: string | null
  }

  export type ProcessHstsMvsUpdateWithoutDriverLicenseFileInput = {
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    process?: ProcessUpdateOneRequiredWithoutHstsMvsNestedInput
    carInfoFile?: StorageFileUpdateOneRequiredWithoutCarInfoProcessesNestedInput
    resultFile?: StorageFileUpdateOneWithoutResultProcessesNestedInput
  }

  export type ProcessHstsMvsUncheckedUpdateWithoutDriverLicenseFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    carInfoFileId?: StringFieldUpdateOperationsInput | string
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessHstsMvsUncheckedUpdateManyWithoutDriverLicenseFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    carInfoFileId?: StringFieldUpdateOperationsInput | string
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessHstsMvsUpdateWithoutCarInfoFileInput = {
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    process?: ProcessUpdateOneRequiredWithoutHstsMvsNestedInput
    driverLicenseFile?: StorageFileUpdateOneRequiredWithoutDriverLicenseProcessesNestedInput
    resultFile?: StorageFileUpdateOneWithoutResultProcessesNestedInput
  }

  export type ProcessHstsMvsUncheckedUpdateWithoutCarInfoFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    driverLicenseFileId?: StringFieldUpdateOperationsInput | string
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessHstsMvsUncheckedUpdateManyWithoutCarInfoFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    driverLicenseFileId?: StringFieldUpdateOperationsInput | string
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessHstsMvsUpdateWithoutResultFileInput = {
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    process?: ProcessUpdateOneRequiredWithoutHstsMvsNestedInput
    driverLicenseFile?: StorageFileUpdateOneRequiredWithoutDriverLicenseProcessesNestedInput
    carInfoFile?: StorageFileUpdateOneRequiredWithoutCarInfoProcessesNestedInput
  }

  export type ProcessHstsMvsUncheckedUpdateWithoutResultFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    driverLicenseFileId?: StringFieldUpdateOperationsInput | string
    carInfoFileId?: StringFieldUpdateOperationsInput | string
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessHstsMvsUncheckedUpdateManyWithoutResultFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    driverLicenseFileId?: StringFieldUpdateOperationsInput | string
    carInfoFileId?: StringFieldUpdateOperationsInput | string
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}