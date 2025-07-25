
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
 * Model ProcessDmsu
 * 
 */
export type ProcessDmsu = $Result.DefaultSelection<Prisma.$ProcessDmsuPayload>
/**
 * Model ProcessPfu
 * 
 */
export type ProcessPfu = $Result.DefaultSelection<Prisma.$ProcessPfuPayload>
/**
 * Model ProcessErd
 * 
 */
export type ProcessErd = $Result.DefaultSelection<Prisma.$ProcessErdPayload>

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
  HSTS_MVS_CREATE: 'HSTS_MVS_CREATE',
  DMSU_CREATE: 'DMSU_CREATE',
  PFU_CREATE: 'PFU_CREATE',
  ERD_CREATE: 'ERD_CREATE'
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
  HSTS_MVS: 'HSTS_MVS',
  DMSU: 'DMSU',
  PFU: 'PFU',
  ERD: 'ERD'
};

export type ProcessType = (typeof ProcessType)[keyof typeof ProcessType]


export const HstsMvsStage: {
  NOT_STARTED: 'NOT_STARTED',
  PARSE_DRIVER_LICENCE: 'PARSE_DRIVER_LICENCE',
  VALIDATE_DRIVER_LICENCE: 'VALIDATE_DRIVER_LICENCE',
  PARSE_CAR_INFO: 'PARSE_CAR_INFO',
  VALIDATE_CAR_INFO: 'VALIDATE_CAR_INFO',
  MODIFY_DATA: 'MODIFY_DATA',
  NORMALIZE_DRIVER_LICENCE_ISSUED_BY: 'NORMALIZE_DRIVER_LICENCE_ISSUED_BY',
  NORMALIZE_REGISTRATION_PLACE: 'NORMALIZE_REGISTRATION_PLACE',
  GENERATE_RESULT_DATA: 'GENERATE_RESULT_DATA',
  FINISHED: 'FINISHED'
};

export type HstsMvsStage = (typeof HstsMvsStage)[keyof typeof HstsMvsStage]


export const DmsuStage: {
  NOT_STARTED: 'NOT_STARTED',
  EXTRACT_IMAGE_AND_REMOVE_WATER_MARK: 'EXTRACT_IMAGE_AND_REMOVE_WATER_MARK',
  PARSE_PERSON_INFO: 'PARSE_PERSON_INFO',
  VALIDATE_PERSON_INFO: 'VALIDATE_PERSON_INFO',
  MODIFY_DATA: 'MODIFY_DATA',
  NORMALIZE_GENITIVE_FULLNAME: 'NORMALIZE_GENITIVE_FULLNAME',
  NORMALIZE_BIRTH_PLACE: 'NORMALIZE_BIRTH_PLACE',
  NORMALIZE_REGISTARION_ADDRESS: 'NORMALIZE_REGISTARION_ADDRESS',
  NORMALIZE_PASSPORTS_ISSUER: 'NORMALIZE_PASSPORTS_ISSUER',
  NORMALIZE_FOREIGN_PASSPORTS_ISSUER: 'NORMALIZE_FOREIGN_PASSPORTS_ISSUER',
  GENERATE_RESULT_DATA: 'GENERATE_RESULT_DATA',
  FINISHED: 'FINISHED'
};

export type DmsuStage = (typeof DmsuStage)[keyof typeof DmsuStage]


export const PfuStage: {
  NOT_STARTED: 'NOT_STARTED',
  PARSE_INPUT_FILE: 'PARSE_INPUT_FILE',
  VALIDATE_INPUT_FILE: 'VALIDATE_INPUT_FILE',
  TRANSFORM_INPUT_FILE: 'TRANSFORM_INPUT_FILE',
  MODIFY_DATA: 'MODIFY_DATA',
  NORMALIZE_INSURE_NAME: 'NORMALIZE_INSURE_NAME',
  GENERATE_RESULT_DATA: 'GENERATE_RESULT_DATA',
  FINISHED: 'FINISHED'
};

export type PfuStage = (typeof PfuStage)[keyof typeof PfuStage]


export const ErdStage: {
  NOT_STARTED: 'NOT_STARTED',
  FINISHED: 'FINISHED'
};

export type ErdStage = (typeof ErdStage)[keyof typeof ErdStage]

}

export type Permission = $Enums.Permission

export const Permission: typeof $Enums.Permission

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type ProcessType = $Enums.ProcessType

export const ProcessType: typeof $Enums.ProcessType

export type HstsMvsStage = $Enums.HstsMvsStage

export const HstsMvsStage: typeof $Enums.HstsMvsStage

export type DmsuStage = $Enums.DmsuStage

export const DmsuStage: typeof $Enums.DmsuStage

export type PfuStage = $Enums.PfuStage

export const PfuStage: typeof $Enums.PfuStage

export type ErdStage = $Enums.ErdStage

export const ErdStage: typeof $Enums.ErdStage

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

  /**
   * `prisma.processDmsu`: Exposes CRUD operations for the **ProcessDmsu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProcessDmsus
    * const processDmsus = await prisma.processDmsu.findMany()
    * ```
    */
  get processDmsu(): Prisma.ProcessDmsuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.processPfu`: Exposes CRUD operations for the **ProcessPfu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProcessPfus
    * const processPfus = await prisma.processPfu.findMany()
    * ```
    */
  get processPfu(): Prisma.ProcessPfuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.processErd`: Exposes CRUD operations for the **ProcessErd** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProcessErds
    * const processErds = await prisma.processErd.findMany()
    * ```
    */
  get processErd(): Prisma.ProcessErdDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.0
   * Query Engine version: 9c30299f5a0ea26a96790e13f796dc6094db3173
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
    ProcessHstsMvs: 'ProcessHstsMvs',
    ProcessDmsu: 'ProcessDmsu',
    ProcessPfu: 'ProcessPfu',
    ProcessErd: 'ProcessErd'
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
      modelProps: "user" | "storageFile" | "process" | "processHstsMvs" | "processDmsu" | "processPfu" | "processErd"
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
      ProcessDmsu: {
        payload: Prisma.$ProcessDmsuPayload<ExtArgs>
        fields: Prisma.ProcessDmsuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcessDmsuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessDmsuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcessDmsuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessDmsuPayload>
          }
          findFirst: {
            args: Prisma.ProcessDmsuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessDmsuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcessDmsuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessDmsuPayload>
          }
          findMany: {
            args: Prisma.ProcessDmsuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessDmsuPayload>[]
          }
          create: {
            args: Prisma.ProcessDmsuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessDmsuPayload>
          }
          createMany: {
            args: Prisma.ProcessDmsuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProcessDmsuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessDmsuPayload>[]
          }
          delete: {
            args: Prisma.ProcessDmsuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessDmsuPayload>
          }
          update: {
            args: Prisma.ProcessDmsuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessDmsuPayload>
          }
          deleteMany: {
            args: Prisma.ProcessDmsuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcessDmsuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProcessDmsuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessDmsuPayload>[]
          }
          upsert: {
            args: Prisma.ProcessDmsuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessDmsuPayload>
          }
          aggregate: {
            args: Prisma.ProcessDmsuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcessDmsu>
          }
          groupBy: {
            args: Prisma.ProcessDmsuGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcessDmsuGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcessDmsuCountArgs<ExtArgs>
            result: $Utils.Optional<ProcessDmsuCountAggregateOutputType> | number
          }
        }
      }
      ProcessPfu: {
        payload: Prisma.$ProcessPfuPayload<ExtArgs>
        fields: Prisma.ProcessPfuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcessPfuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPfuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcessPfuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPfuPayload>
          }
          findFirst: {
            args: Prisma.ProcessPfuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPfuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcessPfuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPfuPayload>
          }
          findMany: {
            args: Prisma.ProcessPfuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPfuPayload>[]
          }
          create: {
            args: Prisma.ProcessPfuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPfuPayload>
          }
          createMany: {
            args: Prisma.ProcessPfuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProcessPfuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPfuPayload>[]
          }
          delete: {
            args: Prisma.ProcessPfuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPfuPayload>
          }
          update: {
            args: Prisma.ProcessPfuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPfuPayload>
          }
          deleteMany: {
            args: Prisma.ProcessPfuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcessPfuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProcessPfuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPfuPayload>[]
          }
          upsert: {
            args: Prisma.ProcessPfuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPfuPayload>
          }
          aggregate: {
            args: Prisma.ProcessPfuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcessPfu>
          }
          groupBy: {
            args: Prisma.ProcessPfuGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcessPfuGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcessPfuCountArgs<ExtArgs>
            result: $Utils.Optional<ProcessPfuCountAggregateOutputType> | number
          }
        }
      }
      ProcessErd: {
        payload: Prisma.$ProcessErdPayload<ExtArgs>
        fields: Prisma.ProcessErdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcessErdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessErdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcessErdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessErdPayload>
          }
          findFirst: {
            args: Prisma.ProcessErdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessErdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcessErdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessErdPayload>
          }
          findMany: {
            args: Prisma.ProcessErdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessErdPayload>[]
          }
          create: {
            args: Prisma.ProcessErdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessErdPayload>
          }
          createMany: {
            args: Prisma.ProcessErdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProcessErdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessErdPayload>[]
          }
          delete: {
            args: Prisma.ProcessErdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessErdPayload>
          }
          update: {
            args: Prisma.ProcessErdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessErdPayload>
          }
          deleteMany: {
            args: Prisma.ProcessErdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcessErdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProcessErdUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessErdPayload>[]
          }
          upsert: {
            args: Prisma.ProcessErdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessErdPayload>
          }
          aggregate: {
            args: Prisma.ProcessErdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcessErd>
          }
          groupBy: {
            args: Prisma.ProcessErdGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcessErdGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcessErdCountArgs<ExtArgs>
            result: $Utils.Optional<ProcessErdCountAggregateOutputType> | number
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
    processDmsu?: ProcessDmsuOmit
    processPfu?: ProcessPfuOmit
    processErd?: ProcessErdOmit
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
    resultProcessesHstsMvs: number
    personInfoProcesses: number
    resultProcessesDmsu: number
    withoutWMProcesses: number
    inputFilePfu: number
    resultFilePfu: number
    grantedІnputFileErd: number
    acceptedІnputFileErd: number
    resultFileErd: number
  }

  export type StorageFileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driverLicenseProcesses?: boolean | StorageFileCountOutputTypeCountDriverLicenseProcessesArgs
    carInfoProcesses?: boolean | StorageFileCountOutputTypeCountCarInfoProcessesArgs
    resultProcessesHstsMvs?: boolean | StorageFileCountOutputTypeCountResultProcessesHstsMvsArgs
    personInfoProcesses?: boolean | StorageFileCountOutputTypeCountPersonInfoProcessesArgs
    resultProcessesDmsu?: boolean | StorageFileCountOutputTypeCountResultProcessesDmsuArgs
    withoutWMProcesses?: boolean | StorageFileCountOutputTypeCountWithoutWMProcessesArgs
    inputFilePfu?: boolean | StorageFileCountOutputTypeCountInputFilePfuArgs
    resultFilePfu?: boolean | StorageFileCountOutputTypeCountResultFilePfuArgs
    grantedІnputFileErd?: boolean | StorageFileCountOutputTypeCountGrantedІnputFileErdArgs
    acceptedІnputFileErd?: boolean | StorageFileCountOutputTypeCountAcceptedІnputFileErdArgs
    resultFileErd?: boolean | StorageFileCountOutputTypeCountResultFileErdArgs
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
  export type StorageFileCountOutputTypeCountResultProcessesHstsMvsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessHstsMvsWhereInput
  }

  /**
   * StorageFileCountOutputType without action
   */
  export type StorageFileCountOutputTypeCountPersonInfoProcessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessDmsuWhereInput
  }

  /**
   * StorageFileCountOutputType without action
   */
  export type StorageFileCountOutputTypeCountResultProcessesDmsuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessDmsuWhereInput
  }

  /**
   * StorageFileCountOutputType without action
   */
  export type StorageFileCountOutputTypeCountWithoutWMProcessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessDmsuWhereInput
  }

  /**
   * StorageFileCountOutputType without action
   */
  export type StorageFileCountOutputTypeCountInputFilePfuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessPfuWhereInput
  }

  /**
   * StorageFileCountOutputType without action
   */
  export type StorageFileCountOutputTypeCountResultFilePfuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessPfuWhereInput
  }

  /**
   * StorageFileCountOutputType without action
   */
  export type StorageFileCountOutputTypeCountGrantedІnputFileErdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessErdWhereInput
  }

  /**
   * StorageFileCountOutputType without action
   */
  export type StorageFileCountOutputTypeCountAcceptedІnputFileErdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessErdWhereInput
  }

  /**
   * StorageFileCountOutputType without action
   */
  export type StorageFileCountOutputTypeCountResultFileErdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessErdWhereInput
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
    resultProcessesHstsMvs?: boolean | StorageFile$resultProcessesHstsMvsArgs<ExtArgs>
    personInfoProcesses?: boolean | StorageFile$personInfoProcessesArgs<ExtArgs>
    resultProcessesDmsu?: boolean | StorageFile$resultProcessesDmsuArgs<ExtArgs>
    withoutWMProcesses?: boolean | StorageFile$withoutWMProcessesArgs<ExtArgs>
    inputFilePfu?: boolean | StorageFile$inputFilePfuArgs<ExtArgs>
    resultFilePfu?: boolean | StorageFile$resultFilePfuArgs<ExtArgs>
    grantedІnputFileErd?: boolean | StorageFile$grantedІnputFileErdArgs<ExtArgs>
    acceptedІnputFileErd?: boolean | StorageFile$acceptedІnputFileErdArgs<ExtArgs>
    resultFileErd?: boolean | StorageFile$resultFileErdArgs<ExtArgs>
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
    resultProcessesHstsMvs?: boolean | StorageFile$resultProcessesHstsMvsArgs<ExtArgs>
    personInfoProcesses?: boolean | StorageFile$personInfoProcessesArgs<ExtArgs>
    resultProcessesDmsu?: boolean | StorageFile$resultProcessesDmsuArgs<ExtArgs>
    withoutWMProcesses?: boolean | StorageFile$withoutWMProcessesArgs<ExtArgs>
    inputFilePfu?: boolean | StorageFile$inputFilePfuArgs<ExtArgs>
    resultFilePfu?: boolean | StorageFile$resultFilePfuArgs<ExtArgs>
    grantedІnputFileErd?: boolean | StorageFile$grantedІnputFileErdArgs<ExtArgs>
    acceptedІnputFileErd?: boolean | StorageFile$acceptedІnputFileErdArgs<ExtArgs>
    resultFileErd?: boolean | StorageFile$resultFileErdArgs<ExtArgs>
    _count?: boolean | StorageFileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StorageFileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StorageFileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StorageFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StorageFile"
    objects: {
      driverLicenseProcesses: Prisma.$ProcessHstsMvsPayload<ExtArgs>[]
      carInfoProcesses: Prisma.$ProcessHstsMvsPayload<ExtArgs>[]
      resultProcessesHstsMvs: Prisma.$ProcessHstsMvsPayload<ExtArgs>[]
      personInfoProcesses: Prisma.$ProcessDmsuPayload<ExtArgs>[]
      resultProcessesDmsu: Prisma.$ProcessDmsuPayload<ExtArgs>[]
      withoutWMProcesses: Prisma.$ProcessDmsuPayload<ExtArgs>[]
      inputFilePfu: Prisma.$ProcessPfuPayload<ExtArgs>[]
      resultFilePfu: Prisma.$ProcessPfuPayload<ExtArgs>[]
      grantedІnputFileErd: Prisma.$ProcessErdPayload<ExtArgs>[]
      acceptedІnputFileErd: Prisma.$ProcessErdPayload<ExtArgs>[]
      resultFileErd: Prisma.$ProcessErdPayload<ExtArgs>[]
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
    resultProcessesHstsMvs<T extends StorageFile$resultProcessesHstsMvsArgs<ExtArgs> = {}>(args?: Subset<T, StorageFile$resultProcessesHstsMvsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessHstsMvsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    personInfoProcesses<T extends StorageFile$personInfoProcessesArgs<ExtArgs> = {}>(args?: Subset<T, StorageFile$personInfoProcessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessDmsuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resultProcessesDmsu<T extends StorageFile$resultProcessesDmsuArgs<ExtArgs> = {}>(args?: Subset<T, StorageFile$resultProcessesDmsuArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessDmsuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    withoutWMProcesses<T extends StorageFile$withoutWMProcessesArgs<ExtArgs> = {}>(args?: Subset<T, StorageFile$withoutWMProcessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessDmsuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inputFilePfu<T extends StorageFile$inputFilePfuArgs<ExtArgs> = {}>(args?: Subset<T, StorageFile$inputFilePfuArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessPfuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resultFilePfu<T extends StorageFile$resultFilePfuArgs<ExtArgs> = {}>(args?: Subset<T, StorageFile$resultFilePfuArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessPfuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    grantedІnputFileErd<T extends StorageFile$grantedІnputFileErdArgs<ExtArgs> = {}>(args?: Subset<T, StorageFile$grantedІnputFileErdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessErdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    acceptedІnputFileErd<T extends StorageFile$acceptedІnputFileErdArgs<ExtArgs> = {}>(args?: Subset<T, StorageFile$acceptedІnputFileErdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessErdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resultFileErd<T extends StorageFile$resultFileErdArgs<ExtArgs> = {}>(args?: Subset<T, StorageFile$resultFileErdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessErdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * StorageFile.resultProcessesHstsMvs
   */
  export type StorageFile$resultProcessesHstsMvsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * StorageFile.personInfoProcesses
   */
  export type StorageFile$personInfoProcessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessDmsu
     */
    select?: ProcessDmsuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessDmsu
     */
    omit?: ProcessDmsuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessDmsuInclude<ExtArgs> | null
    where?: ProcessDmsuWhereInput
    orderBy?: ProcessDmsuOrderByWithRelationInput | ProcessDmsuOrderByWithRelationInput[]
    cursor?: ProcessDmsuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcessDmsuScalarFieldEnum | ProcessDmsuScalarFieldEnum[]
  }

  /**
   * StorageFile.resultProcessesDmsu
   */
  export type StorageFile$resultProcessesDmsuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessDmsu
     */
    select?: ProcessDmsuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessDmsu
     */
    omit?: ProcessDmsuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessDmsuInclude<ExtArgs> | null
    where?: ProcessDmsuWhereInput
    orderBy?: ProcessDmsuOrderByWithRelationInput | ProcessDmsuOrderByWithRelationInput[]
    cursor?: ProcessDmsuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcessDmsuScalarFieldEnum | ProcessDmsuScalarFieldEnum[]
  }

  /**
   * StorageFile.withoutWMProcesses
   */
  export type StorageFile$withoutWMProcessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessDmsu
     */
    select?: ProcessDmsuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessDmsu
     */
    omit?: ProcessDmsuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessDmsuInclude<ExtArgs> | null
    where?: ProcessDmsuWhereInput
    orderBy?: ProcessDmsuOrderByWithRelationInput | ProcessDmsuOrderByWithRelationInput[]
    cursor?: ProcessDmsuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcessDmsuScalarFieldEnum | ProcessDmsuScalarFieldEnum[]
  }

  /**
   * StorageFile.inputFilePfu
   */
  export type StorageFile$inputFilePfuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessPfu
     */
    select?: ProcessPfuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessPfu
     */
    omit?: ProcessPfuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessPfuInclude<ExtArgs> | null
    where?: ProcessPfuWhereInput
    orderBy?: ProcessPfuOrderByWithRelationInput | ProcessPfuOrderByWithRelationInput[]
    cursor?: ProcessPfuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcessPfuScalarFieldEnum | ProcessPfuScalarFieldEnum[]
  }

  /**
   * StorageFile.resultFilePfu
   */
  export type StorageFile$resultFilePfuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessPfu
     */
    select?: ProcessPfuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessPfu
     */
    omit?: ProcessPfuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessPfuInclude<ExtArgs> | null
    where?: ProcessPfuWhereInput
    orderBy?: ProcessPfuOrderByWithRelationInput | ProcessPfuOrderByWithRelationInput[]
    cursor?: ProcessPfuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcessPfuScalarFieldEnum | ProcessPfuScalarFieldEnum[]
  }

  /**
   * StorageFile.grantedІnputFileErd
   */
  export type StorageFile$grantedІnputFileErdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessErd
     */
    select?: ProcessErdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessErd
     */
    omit?: ProcessErdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessErdInclude<ExtArgs> | null
    where?: ProcessErdWhereInput
    orderBy?: ProcessErdOrderByWithRelationInput | ProcessErdOrderByWithRelationInput[]
    cursor?: ProcessErdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcessErdScalarFieldEnum | ProcessErdScalarFieldEnum[]
  }

  /**
   * StorageFile.acceptedІnputFileErd
   */
  export type StorageFile$acceptedІnputFileErdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessErd
     */
    select?: ProcessErdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessErd
     */
    omit?: ProcessErdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessErdInclude<ExtArgs> | null
    where?: ProcessErdWhereInput
    orderBy?: ProcessErdOrderByWithRelationInput | ProcessErdOrderByWithRelationInput[]
    cursor?: ProcessErdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcessErdScalarFieldEnum | ProcessErdScalarFieldEnum[]
  }

  /**
   * StorageFile.resultFileErd
   */
  export type StorageFile$resultFileErdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessErd
     */
    select?: ProcessErdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessErd
     */
    omit?: ProcessErdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessErdInclude<ExtArgs> | null
    where?: ProcessErdWhereInput
    orderBy?: ProcessErdOrderByWithRelationInput | ProcessErdOrderByWithRelationInput[]
    cursor?: ProcessErdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcessErdScalarFieldEnum | ProcessErdScalarFieldEnum[]
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
    finishedAt: Date | null
  }

  export type ProcessMaxAggregateOutputType = {
    id: string | null
    status: $Enums.Status | null
    userId: string | null
    owner: string | null
    type: $Enums.ProcessType | null
    createdAt: Date | null
    finishedAt: Date | null
  }

  export type ProcessCountAggregateOutputType = {
    id: number
    status: number
    userId: number
    owner: number
    type: number
    createdAt: number
    finishedAt: number
    _all: number
  }


  export type ProcessMinAggregateInputType = {
    id?: true
    status?: true
    userId?: true
    owner?: true
    type?: true
    createdAt?: true
    finishedAt?: true
  }

  export type ProcessMaxAggregateInputType = {
    id?: true
    status?: true
    userId?: true
    owner?: true
    type?: true
    createdAt?: true
    finishedAt?: true
  }

  export type ProcessCountAggregateInputType = {
    id?: true
    status?: true
    userId?: true
    owner?: true
    type?: true
    createdAt?: true
    finishedAt?: true
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
    finishedAt: Date | null
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
    finishedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    hstsMvs?: boolean | Process$hstsMvsArgs<ExtArgs>
    dmsu?: boolean | Process$dmsuArgs<ExtArgs>
    pfu?: boolean | Process$pfuArgs<ExtArgs>
    erd?: boolean | Process$erdArgs<ExtArgs>
  }, ExtArgs["result"]["process"]>

  export type ProcessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    userId?: boolean
    owner?: boolean
    type?: boolean
    createdAt?: boolean
    finishedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["process"]>

  export type ProcessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    userId?: boolean
    owner?: boolean
    type?: boolean
    createdAt?: boolean
    finishedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["process"]>

  export type ProcessSelectScalar = {
    id?: boolean
    status?: boolean
    userId?: boolean
    owner?: boolean
    type?: boolean
    createdAt?: boolean
    finishedAt?: boolean
  }

  export type ProcessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "userId" | "owner" | "type" | "createdAt" | "finishedAt", ExtArgs["result"]["process"]>
  export type ProcessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    hstsMvs?: boolean | Process$hstsMvsArgs<ExtArgs>
    dmsu?: boolean | Process$dmsuArgs<ExtArgs>
    pfu?: boolean | Process$pfuArgs<ExtArgs>
    erd?: boolean | Process$erdArgs<ExtArgs>
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
      dmsu: Prisma.$ProcessDmsuPayload<ExtArgs> | null
      pfu: Prisma.$ProcessPfuPayload<ExtArgs> | null
      erd: Prisma.$ProcessErdPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.Status
      userId: string
      owner: string | null
      type: $Enums.ProcessType
      createdAt: Date
      finishedAt: Date | null
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
    dmsu<T extends Process$dmsuArgs<ExtArgs> = {}>(args?: Subset<T, Process$dmsuArgs<ExtArgs>>): Prisma__ProcessDmsuClient<$Result.GetResult<Prisma.$ProcessDmsuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pfu<T extends Process$pfuArgs<ExtArgs> = {}>(args?: Subset<T, Process$pfuArgs<ExtArgs>>): Prisma__ProcessPfuClient<$Result.GetResult<Prisma.$ProcessPfuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    erd<T extends Process$erdArgs<ExtArgs> = {}>(args?: Subset<T, Process$erdArgs<ExtArgs>>): Prisma__ProcessErdClient<$Result.GetResult<Prisma.$ProcessErdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly finishedAt: FieldRef<"Process", 'DateTime'>
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
   * Process.dmsu
   */
  export type Process$dmsuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessDmsu
     */
    select?: ProcessDmsuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessDmsu
     */
    omit?: ProcessDmsuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessDmsuInclude<ExtArgs> | null
    where?: ProcessDmsuWhereInput
  }

  /**
   * Process.pfu
   */
  export type Process$pfuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessPfu
     */
    select?: ProcessPfuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessPfu
     */
    omit?: ProcessPfuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessPfuInclude<ExtArgs> | null
    where?: ProcessPfuWhereInput
  }

  /**
   * Process.erd
   */
  export type Process$erdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessErd
     */
    select?: ProcessErdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessErd
     */
    omit?: ProcessErdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessErdInclude<ExtArgs> | null
    where?: ProcessErdWhereInput
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
    isAi: boolean | null
    stage: $Enums.HstsMvsStage | null
    errorMessage: string | null
  }

  export type ProcessHstsMvsMaxAggregateOutputType = {
    processId: string | null
    driverLicenseFileId: string | null
    carInfoFileId: string | null
    resultFileId: string | null
    isAi: boolean | null
    stage: $Enums.HstsMvsStage | null
    errorMessage: string | null
  }

  export type ProcessHstsMvsCountAggregateOutputType = {
    processId: number
    driverLicenseFileId: number
    carInfoFileId: number
    resultFileId: number
    isAi: number
    stage: number
    errorMessage: number
    _all: number
  }


  export type ProcessHstsMvsMinAggregateInputType = {
    processId?: true
    driverLicenseFileId?: true
    carInfoFileId?: true
    resultFileId?: true
    isAi?: true
    stage?: true
    errorMessage?: true
  }

  export type ProcessHstsMvsMaxAggregateInputType = {
    processId?: true
    driverLicenseFileId?: true
    carInfoFileId?: true
    resultFileId?: true
    isAi?: true
    stage?: true
    errorMessage?: true
  }

  export type ProcessHstsMvsCountAggregateInputType = {
    processId?: true
    driverLicenseFileId?: true
    carInfoFileId?: true
    resultFileId?: true
    isAi?: true
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
    driverLicenseFileId: string | null
    carInfoFileId: string
    resultFileId: string | null
    isAi: boolean
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
    isAi?: boolean
    stage?: boolean
    errorMessage?: boolean
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    driverLicenseFile?: boolean | ProcessHstsMvs$driverLicenseFileArgs<ExtArgs>
    carInfoFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    resultFile?: boolean | ProcessHstsMvs$resultFileArgs<ExtArgs>
  }, ExtArgs["result"]["processHstsMvs"]>

  export type ProcessHstsMvsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    processId?: boolean
    driverLicenseFileId?: boolean
    carInfoFileId?: boolean
    resultFileId?: boolean
    isAi?: boolean
    stage?: boolean
    errorMessage?: boolean
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    driverLicenseFile?: boolean | ProcessHstsMvs$driverLicenseFileArgs<ExtArgs>
    carInfoFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    resultFile?: boolean | ProcessHstsMvs$resultFileArgs<ExtArgs>
  }, ExtArgs["result"]["processHstsMvs"]>

  export type ProcessHstsMvsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    processId?: boolean
    driverLicenseFileId?: boolean
    carInfoFileId?: boolean
    resultFileId?: boolean
    isAi?: boolean
    stage?: boolean
    errorMessage?: boolean
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    driverLicenseFile?: boolean | ProcessHstsMvs$driverLicenseFileArgs<ExtArgs>
    carInfoFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    resultFile?: boolean | ProcessHstsMvs$resultFileArgs<ExtArgs>
  }, ExtArgs["result"]["processHstsMvs"]>

  export type ProcessHstsMvsSelectScalar = {
    processId?: boolean
    driverLicenseFileId?: boolean
    carInfoFileId?: boolean
    resultFileId?: boolean
    isAi?: boolean
    stage?: boolean
    errorMessage?: boolean
  }

  export type ProcessHstsMvsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"processId" | "driverLicenseFileId" | "carInfoFileId" | "resultFileId" | "isAi" | "stage" | "errorMessage", ExtArgs["result"]["processHstsMvs"]>
  export type ProcessHstsMvsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    driverLicenseFile?: boolean | ProcessHstsMvs$driverLicenseFileArgs<ExtArgs>
    carInfoFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    resultFile?: boolean | ProcessHstsMvs$resultFileArgs<ExtArgs>
  }
  export type ProcessHstsMvsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    driverLicenseFile?: boolean | ProcessHstsMvs$driverLicenseFileArgs<ExtArgs>
    carInfoFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    resultFile?: boolean | ProcessHstsMvs$resultFileArgs<ExtArgs>
  }
  export type ProcessHstsMvsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    driverLicenseFile?: boolean | ProcessHstsMvs$driverLicenseFileArgs<ExtArgs>
    carInfoFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    resultFile?: boolean | ProcessHstsMvs$resultFileArgs<ExtArgs>
  }

  export type $ProcessHstsMvsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProcessHstsMvs"
    objects: {
      process: Prisma.$ProcessPayload<ExtArgs>
      driverLicenseFile: Prisma.$StorageFilePayload<ExtArgs> | null
      carInfoFile: Prisma.$StorageFilePayload<ExtArgs>
      resultFile: Prisma.$StorageFilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      processId: string
      driverLicenseFileId: string | null
      carInfoFileId: string
      resultFileId: string | null
      isAi: boolean
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
    driverLicenseFile<T extends ProcessHstsMvs$driverLicenseFileArgs<ExtArgs> = {}>(args?: Subset<T, ProcessHstsMvs$driverLicenseFileArgs<ExtArgs>>): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly isAi: FieldRef<"ProcessHstsMvs", 'Boolean'>
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
   * ProcessHstsMvs.driverLicenseFile
   */
  export type ProcessHstsMvs$driverLicenseFileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model ProcessDmsu
   */

  export type AggregateProcessDmsu = {
    _count: ProcessDmsuCountAggregateOutputType | null
    _min: ProcessDmsuMinAggregateOutputType | null
    _max: ProcessDmsuMaxAggregateOutputType | null
  }

  export type ProcessDmsuMinAggregateOutputType = {
    processId: string | null
    personInfoFileId: string | null
    resultFileId: string | null
    withoutWMFileId: string | null
    isAi: boolean | null
    stage: $Enums.DmsuStage | null
    errorMessage: string | null
  }

  export type ProcessDmsuMaxAggregateOutputType = {
    processId: string | null
    personInfoFileId: string | null
    resultFileId: string | null
    withoutWMFileId: string | null
    isAi: boolean | null
    stage: $Enums.DmsuStage | null
    errorMessage: string | null
  }

  export type ProcessDmsuCountAggregateOutputType = {
    processId: number
    personInfoFileId: number
    resultFileId: number
    withoutWMFileId: number
    isAi: number
    stage: number
    errorMessage: number
    _all: number
  }


  export type ProcessDmsuMinAggregateInputType = {
    processId?: true
    personInfoFileId?: true
    resultFileId?: true
    withoutWMFileId?: true
    isAi?: true
    stage?: true
    errorMessage?: true
  }

  export type ProcessDmsuMaxAggregateInputType = {
    processId?: true
    personInfoFileId?: true
    resultFileId?: true
    withoutWMFileId?: true
    isAi?: true
    stage?: true
    errorMessage?: true
  }

  export type ProcessDmsuCountAggregateInputType = {
    processId?: true
    personInfoFileId?: true
    resultFileId?: true
    withoutWMFileId?: true
    isAi?: true
    stage?: true
    errorMessage?: true
    _all?: true
  }

  export type ProcessDmsuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessDmsu to aggregate.
     */
    where?: ProcessDmsuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessDmsus to fetch.
     */
    orderBy?: ProcessDmsuOrderByWithRelationInput | ProcessDmsuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcessDmsuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessDmsus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessDmsus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProcessDmsus
    **/
    _count?: true | ProcessDmsuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcessDmsuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcessDmsuMaxAggregateInputType
  }

  export type GetProcessDmsuAggregateType<T extends ProcessDmsuAggregateArgs> = {
        [P in keyof T & keyof AggregateProcessDmsu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcessDmsu[P]>
      : GetScalarType<T[P], AggregateProcessDmsu[P]>
  }




  export type ProcessDmsuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessDmsuWhereInput
    orderBy?: ProcessDmsuOrderByWithAggregationInput | ProcessDmsuOrderByWithAggregationInput[]
    by: ProcessDmsuScalarFieldEnum[] | ProcessDmsuScalarFieldEnum
    having?: ProcessDmsuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcessDmsuCountAggregateInputType | true
    _min?: ProcessDmsuMinAggregateInputType
    _max?: ProcessDmsuMaxAggregateInputType
  }

  export type ProcessDmsuGroupByOutputType = {
    processId: string
    personInfoFileId: string
    resultFileId: string | null
    withoutWMFileId: string | null
    isAi: boolean
    stage: $Enums.DmsuStage
    errorMessage: string | null
    _count: ProcessDmsuCountAggregateOutputType | null
    _min: ProcessDmsuMinAggregateOutputType | null
    _max: ProcessDmsuMaxAggregateOutputType | null
  }

  type GetProcessDmsuGroupByPayload<T extends ProcessDmsuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcessDmsuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcessDmsuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcessDmsuGroupByOutputType[P]>
            : GetScalarType<T[P], ProcessDmsuGroupByOutputType[P]>
        }
      >
    >


  export type ProcessDmsuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    processId?: boolean
    personInfoFileId?: boolean
    resultFileId?: boolean
    withoutWMFileId?: boolean
    isAi?: boolean
    stage?: boolean
    errorMessage?: boolean
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    personInfoFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    resultFile?: boolean | ProcessDmsu$resultFileArgs<ExtArgs>
    withoutWMFile?: boolean | ProcessDmsu$withoutWMFileArgs<ExtArgs>
  }, ExtArgs["result"]["processDmsu"]>

  export type ProcessDmsuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    processId?: boolean
    personInfoFileId?: boolean
    resultFileId?: boolean
    withoutWMFileId?: boolean
    isAi?: boolean
    stage?: boolean
    errorMessage?: boolean
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    personInfoFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    resultFile?: boolean | ProcessDmsu$resultFileArgs<ExtArgs>
    withoutWMFile?: boolean | ProcessDmsu$withoutWMFileArgs<ExtArgs>
  }, ExtArgs["result"]["processDmsu"]>

  export type ProcessDmsuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    processId?: boolean
    personInfoFileId?: boolean
    resultFileId?: boolean
    withoutWMFileId?: boolean
    isAi?: boolean
    stage?: boolean
    errorMessage?: boolean
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    personInfoFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    resultFile?: boolean | ProcessDmsu$resultFileArgs<ExtArgs>
    withoutWMFile?: boolean | ProcessDmsu$withoutWMFileArgs<ExtArgs>
  }, ExtArgs["result"]["processDmsu"]>

  export type ProcessDmsuSelectScalar = {
    processId?: boolean
    personInfoFileId?: boolean
    resultFileId?: boolean
    withoutWMFileId?: boolean
    isAi?: boolean
    stage?: boolean
    errorMessage?: boolean
  }

  export type ProcessDmsuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"processId" | "personInfoFileId" | "resultFileId" | "withoutWMFileId" | "isAi" | "stage" | "errorMessage", ExtArgs["result"]["processDmsu"]>
  export type ProcessDmsuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    personInfoFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    resultFile?: boolean | ProcessDmsu$resultFileArgs<ExtArgs>
    withoutWMFile?: boolean | ProcessDmsu$withoutWMFileArgs<ExtArgs>
  }
  export type ProcessDmsuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    personInfoFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    resultFile?: boolean | ProcessDmsu$resultFileArgs<ExtArgs>
    withoutWMFile?: boolean | ProcessDmsu$withoutWMFileArgs<ExtArgs>
  }
  export type ProcessDmsuIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    personInfoFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    resultFile?: boolean | ProcessDmsu$resultFileArgs<ExtArgs>
    withoutWMFile?: boolean | ProcessDmsu$withoutWMFileArgs<ExtArgs>
  }

  export type $ProcessDmsuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProcessDmsu"
    objects: {
      process: Prisma.$ProcessPayload<ExtArgs>
      personInfoFile: Prisma.$StorageFilePayload<ExtArgs>
      resultFile: Prisma.$StorageFilePayload<ExtArgs> | null
      withoutWMFile: Prisma.$StorageFilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      processId: string
      personInfoFileId: string
      resultFileId: string | null
      withoutWMFileId: string | null
      isAi: boolean
      stage: $Enums.DmsuStage
      errorMessage: string | null
    }, ExtArgs["result"]["processDmsu"]>
    composites: {}
  }

  type ProcessDmsuGetPayload<S extends boolean | null | undefined | ProcessDmsuDefaultArgs> = $Result.GetResult<Prisma.$ProcessDmsuPayload, S>

  type ProcessDmsuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProcessDmsuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcessDmsuCountAggregateInputType | true
    }

  export interface ProcessDmsuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProcessDmsu'], meta: { name: 'ProcessDmsu' } }
    /**
     * Find zero or one ProcessDmsu that matches the filter.
     * @param {ProcessDmsuFindUniqueArgs} args - Arguments to find a ProcessDmsu
     * @example
     * // Get one ProcessDmsu
     * const processDmsu = await prisma.processDmsu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcessDmsuFindUniqueArgs>(args: SelectSubset<T, ProcessDmsuFindUniqueArgs<ExtArgs>>): Prisma__ProcessDmsuClient<$Result.GetResult<Prisma.$ProcessDmsuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProcessDmsu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcessDmsuFindUniqueOrThrowArgs} args - Arguments to find a ProcessDmsu
     * @example
     * // Get one ProcessDmsu
     * const processDmsu = await prisma.processDmsu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcessDmsuFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcessDmsuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcessDmsuClient<$Result.GetResult<Prisma.$ProcessDmsuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcessDmsu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessDmsuFindFirstArgs} args - Arguments to find a ProcessDmsu
     * @example
     * // Get one ProcessDmsu
     * const processDmsu = await prisma.processDmsu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcessDmsuFindFirstArgs>(args?: SelectSubset<T, ProcessDmsuFindFirstArgs<ExtArgs>>): Prisma__ProcessDmsuClient<$Result.GetResult<Prisma.$ProcessDmsuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcessDmsu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessDmsuFindFirstOrThrowArgs} args - Arguments to find a ProcessDmsu
     * @example
     * // Get one ProcessDmsu
     * const processDmsu = await prisma.processDmsu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcessDmsuFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcessDmsuFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcessDmsuClient<$Result.GetResult<Prisma.$ProcessDmsuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProcessDmsus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessDmsuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProcessDmsus
     * const processDmsus = await prisma.processDmsu.findMany()
     * 
     * // Get first 10 ProcessDmsus
     * const processDmsus = await prisma.processDmsu.findMany({ take: 10 })
     * 
     * // Only select the `processId`
     * const processDmsuWithProcessIdOnly = await prisma.processDmsu.findMany({ select: { processId: true } })
     * 
     */
    findMany<T extends ProcessDmsuFindManyArgs>(args?: SelectSubset<T, ProcessDmsuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessDmsuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProcessDmsu.
     * @param {ProcessDmsuCreateArgs} args - Arguments to create a ProcessDmsu.
     * @example
     * // Create one ProcessDmsu
     * const ProcessDmsu = await prisma.processDmsu.create({
     *   data: {
     *     // ... data to create a ProcessDmsu
     *   }
     * })
     * 
     */
    create<T extends ProcessDmsuCreateArgs>(args: SelectSubset<T, ProcessDmsuCreateArgs<ExtArgs>>): Prisma__ProcessDmsuClient<$Result.GetResult<Prisma.$ProcessDmsuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProcessDmsus.
     * @param {ProcessDmsuCreateManyArgs} args - Arguments to create many ProcessDmsus.
     * @example
     * // Create many ProcessDmsus
     * const processDmsu = await prisma.processDmsu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcessDmsuCreateManyArgs>(args?: SelectSubset<T, ProcessDmsuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProcessDmsus and returns the data saved in the database.
     * @param {ProcessDmsuCreateManyAndReturnArgs} args - Arguments to create many ProcessDmsus.
     * @example
     * // Create many ProcessDmsus
     * const processDmsu = await prisma.processDmsu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProcessDmsus and only return the `processId`
     * const processDmsuWithProcessIdOnly = await prisma.processDmsu.createManyAndReturn({
     *   select: { processId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProcessDmsuCreateManyAndReturnArgs>(args?: SelectSubset<T, ProcessDmsuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessDmsuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProcessDmsu.
     * @param {ProcessDmsuDeleteArgs} args - Arguments to delete one ProcessDmsu.
     * @example
     * // Delete one ProcessDmsu
     * const ProcessDmsu = await prisma.processDmsu.delete({
     *   where: {
     *     // ... filter to delete one ProcessDmsu
     *   }
     * })
     * 
     */
    delete<T extends ProcessDmsuDeleteArgs>(args: SelectSubset<T, ProcessDmsuDeleteArgs<ExtArgs>>): Prisma__ProcessDmsuClient<$Result.GetResult<Prisma.$ProcessDmsuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProcessDmsu.
     * @param {ProcessDmsuUpdateArgs} args - Arguments to update one ProcessDmsu.
     * @example
     * // Update one ProcessDmsu
     * const processDmsu = await prisma.processDmsu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcessDmsuUpdateArgs>(args: SelectSubset<T, ProcessDmsuUpdateArgs<ExtArgs>>): Prisma__ProcessDmsuClient<$Result.GetResult<Prisma.$ProcessDmsuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProcessDmsus.
     * @param {ProcessDmsuDeleteManyArgs} args - Arguments to filter ProcessDmsus to delete.
     * @example
     * // Delete a few ProcessDmsus
     * const { count } = await prisma.processDmsu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcessDmsuDeleteManyArgs>(args?: SelectSubset<T, ProcessDmsuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcessDmsus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessDmsuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProcessDmsus
     * const processDmsu = await prisma.processDmsu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcessDmsuUpdateManyArgs>(args: SelectSubset<T, ProcessDmsuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcessDmsus and returns the data updated in the database.
     * @param {ProcessDmsuUpdateManyAndReturnArgs} args - Arguments to update many ProcessDmsus.
     * @example
     * // Update many ProcessDmsus
     * const processDmsu = await prisma.processDmsu.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProcessDmsus and only return the `processId`
     * const processDmsuWithProcessIdOnly = await prisma.processDmsu.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProcessDmsuUpdateManyAndReturnArgs>(args: SelectSubset<T, ProcessDmsuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessDmsuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProcessDmsu.
     * @param {ProcessDmsuUpsertArgs} args - Arguments to update or create a ProcessDmsu.
     * @example
     * // Update or create a ProcessDmsu
     * const processDmsu = await prisma.processDmsu.upsert({
     *   create: {
     *     // ... data to create a ProcessDmsu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProcessDmsu we want to update
     *   }
     * })
     */
    upsert<T extends ProcessDmsuUpsertArgs>(args: SelectSubset<T, ProcessDmsuUpsertArgs<ExtArgs>>): Prisma__ProcessDmsuClient<$Result.GetResult<Prisma.$ProcessDmsuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProcessDmsus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessDmsuCountArgs} args - Arguments to filter ProcessDmsus to count.
     * @example
     * // Count the number of ProcessDmsus
     * const count = await prisma.processDmsu.count({
     *   where: {
     *     // ... the filter for the ProcessDmsus we want to count
     *   }
     * })
    **/
    count<T extends ProcessDmsuCountArgs>(
      args?: Subset<T, ProcessDmsuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcessDmsuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProcessDmsu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessDmsuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProcessDmsuAggregateArgs>(args: Subset<T, ProcessDmsuAggregateArgs>): Prisma.PrismaPromise<GetProcessDmsuAggregateType<T>>

    /**
     * Group by ProcessDmsu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessDmsuGroupByArgs} args - Group by arguments.
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
      T extends ProcessDmsuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcessDmsuGroupByArgs['orderBy'] }
        : { orderBy?: ProcessDmsuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProcessDmsuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcessDmsuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProcessDmsu model
   */
  readonly fields: ProcessDmsuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProcessDmsu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcessDmsuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    process<T extends ProcessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProcessDefaultArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    personInfoFile<T extends StorageFileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StorageFileDefaultArgs<ExtArgs>>): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resultFile<T extends ProcessDmsu$resultFileArgs<ExtArgs> = {}>(args?: Subset<T, ProcessDmsu$resultFileArgs<ExtArgs>>): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    withoutWMFile<T extends ProcessDmsu$withoutWMFileArgs<ExtArgs> = {}>(args?: Subset<T, ProcessDmsu$withoutWMFileArgs<ExtArgs>>): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProcessDmsu model
   */
  interface ProcessDmsuFieldRefs {
    readonly processId: FieldRef<"ProcessDmsu", 'String'>
    readonly personInfoFileId: FieldRef<"ProcessDmsu", 'String'>
    readonly resultFileId: FieldRef<"ProcessDmsu", 'String'>
    readonly withoutWMFileId: FieldRef<"ProcessDmsu", 'String'>
    readonly isAi: FieldRef<"ProcessDmsu", 'Boolean'>
    readonly stage: FieldRef<"ProcessDmsu", 'DmsuStage'>
    readonly errorMessage: FieldRef<"ProcessDmsu", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProcessDmsu findUnique
   */
  export type ProcessDmsuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessDmsu
     */
    select?: ProcessDmsuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessDmsu
     */
    omit?: ProcessDmsuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessDmsuInclude<ExtArgs> | null
    /**
     * Filter, which ProcessDmsu to fetch.
     */
    where: ProcessDmsuWhereUniqueInput
  }

  /**
   * ProcessDmsu findUniqueOrThrow
   */
  export type ProcessDmsuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessDmsu
     */
    select?: ProcessDmsuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessDmsu
     */
    omit?: ProcessDmsuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessDmsuInclude<ExtArgs> | null
    /**
     * Filter, which ProcessDmsu to fetch.
     */
    where: ProcessDmsuWhereUniqueInput
  }

  /**
   * ProcessDmsu findFirst
   */
  export type ProcessDmsuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessDmsu
     */
    select?: ProcessDmsuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessDmsu
     */
    omit?: ProcessDmsuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessDmsuInclude<ExtArgs> | null
    /**
     * Filter, which ProcessDmsu to fetch.
     */
    where?: ProcessDmsuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessDmsus to fetch.
     */
    orderBy?: ProcessDmsuOrderByWithRelationInput | ProcessDmsuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessDmsus.
     */
    cursor?: ProcessDmsuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessDmsus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessDmsus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessDmsus.
     */
    distinct?: ProcessDmsuScalarFieldEnum | ProcessDmsuScalarFieldEnum[]
  }

  /**
   * ProcessDmsu findFirstOrThrow
   */
  export type ProcessDmsuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessDmsu
     */
    select?: ProcessDmsuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessDmsu
     */
    omit?: ProcessDmsuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessDmsuInclude<ExtArgs> | null
    /**
     * Filter, which ProcessDmsu to fetch.
     */
    where?: ProcessDmsuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessDmsus to fetch.
     */
    orderBy?: ProcessDmsuOrderByWithRelationInput | ProcessDmsuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessDmsus.
     */
    cursor?: ProcessDmsuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessDmsus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessDmsus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessDmsus.
     */
    distinct?: ProcessDmsuScalarFieldEnum | ProcessDmsuScalarFieldEnum[]
  }

  /**
   * ProcessDmsu findMany
   */
  export type ProcessDmsuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessDmsu
     */
    select?: ProcessDmsuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessDmsu
     */
    omit?: ProcessDmsuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessDmsuInclude<ExtArgs> | null
    /**
     * Filter, which ProcessDmsus to fetch.
     */
    where?: ProcessDmsuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessDmsus to fetch.
     */
    orderBy?: ProcessDmsuOrderByWithRelationInput | ProcessDmsuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProcessDmsus.
     */
    cursor?: ProcessDmsuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessDmsus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessDmsus.
     */
    skip?: number
    distinct?: ProcessDmsuScalarFieldEnum | ProcessDmsuScalarFieldEnum[]
  }

  /**
   * ProcessDmsu create
   */
  export type ProcessDmsuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessDmsu
     */
    select?: ProcessDmsuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessDmsu
     */
    omit?: ProcessDmsuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessDmsuInclude<ExtArgs> | null
    /**
     * The data needed to create a ProcessDmsu.
     */
    data: XOR<ProcessDmsuCreateInput, ProcessDmsuUncheckedCreateInput>
  }

  /**
   * ProcessDmsu createMany
   */
  export type ProcessDmsuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProcessDmsus.
     */
    data: ProcessDmsuCreateManyInput | ProcessDmsuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProcessDmsu createManyAndReturn
   */
  export type ProcessDmsuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessDmsu
     */
    select?: ProcessDmsuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessDmsu
     */
    omit?: ProcessDmsuOmit<ExtArgs> | null
    /**
     * The data used to create many ProcessDmsus.
     */
    data: ProcessDmsuCreateManyInput | ProcessDmsuCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessDmsuIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProcessDmsu update
   */
  export type ProcessDmsuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessDmsu
     */
    select?: ProcessDmsuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessDmsu
     */
    omit?: ProcessDmsuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessDmsuInclude<ExtArgs> | null
    /**
     * The data needed to update a ProcessDmsu.
     */
    data: XOR<ProcessDmsuUpdateInput, ProcessDmsuUncheckedUpdateInput>
    /**
     * Choose, which ProcessDmsu to update.
     */
    where: ProcessDmsuWhereUniqueInput
  }

  /**
   * ProcessDmsu updateMany
   */
  export type ProcessDmsuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProcessDmsus.
     */
    data: XOR<ProcessDmsuUpdateManyMutationInput, ProcessDmsuUncheckedUpdateManyInput>
    /**
     * Filter which ProcessDmsus to update
     */
    where?: ProcessDmsuWhereInput
    /**
     * Limit how many ProcessDmsus to update.
     */
    limit?: number
  }

  /**
   * ProcessDmsu updateManyAndReturn
   */
  export type ProcessDmsuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessDmsu
     */
    select?: ProcessDmsuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessDmsu
     */
    omit?: ProcessDmsuOmit<ExtArgs> | null
    /**
     * The data used to update ProcessDmsus.
     */
    data: XOR<ProcessDmsuUpdateManyMutationInput, ProcessDmsuUncheckedUpdateManyInput>
    /**
     * Filter which ProcessDmsus to update
     */
    where?: ProcessDmsuWhereInput
    /**
     * Limit how many ProcessDmsus to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessDmsuIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProcessDmsu upsert
   */
  export type ProcessDmsuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessDmsu
     */
    select?: ProcessDmsuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessDmsu
     */
    omit?: ProcessDmsuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessDmsuInclude<ExtArgs> | null
    /**
     * The filter to search for the ProcessDmsu to update in case it exists.
     */
    where: ProcessDmsuWhereUniqueInput
    /**
     * In case the ProcessDmsu found by the `where` argument doesn't exist, create a new ProcessDmsu with this data.
     */
    create: XOR<ProcessDmsuCreateInput, ProcessDmsuUncheckedCreateInput>
    /**
     * In case the ProcessDmsu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcessDmsuUpdateInput, ProcessDmsuUncheckedUpdateInput>
  }

  /**
   * ProcessDmsu delete
   */
  export type ProcessDmsuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessDmsu
     */
    select?: ProcessDmsuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessDmsu
     */
    omit?: ProcessDmsuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessDmsuInclude<ExtArgs> | null
    /**
     * Filter which ProcessDmsu to delete.
     */
    where: ProcessDmsuWhereUniqueInput
  }

  /**
   * ProcessDmsu deleteMany
   */
  export type ProcessDmsuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessDmsus to delete
     */
    where?: ProcessDmsuWhereInput
    /**
     * Limit how many ProcessDmsus to delete.
     */
    limit?: number
  }

  /**
   * ProcessDmsu.resultFile
   */
  export type ProcessDmsu$resultFileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ProcessDmsu.withoutWMFile
   */
  export type ProcessDmsu$withoutWMFileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ProcessDmsu without action
   */
  export type ProcessDmsuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessDmsu
     */
    select?: ProcessDmsuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessDmsu
     */
    omit?: ProcessDmsuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessDmsuInclude<ExtArgs> | null
  }


  /**
   * Model ProcessPfu
   */

  export type AggregateProcessPfu = {
    _count: ProcessPfuCountAggregateOutputType | null
    _min: ProcessPfuMinAggregateOutputType | null
    _max: ProcessPfuMaxAggregateOutputType | null
  }

  export type ProcessPfuMinAggregateOutputType = {
    processId: string | null
    inputFileId: string | null
    resultFileId: string | null
    isAi: boolean | null
    stage: $Enums.PfuStage | null
    errorMessage: string | null
  }

  export type ProcessPfuMaxAggregateOutputType = {
    processId: string | null
    inputFileId: string | null
    resultFileId: string | null
    isAi: boolean | null
    stage: $Enums.PfuStage | null
    errorMessage: string | null
  }

  export type ProcessPfuCountAggregateOutputType = {
    processId: number
    inputFileId: number
    resultFileId: number
    isAi: number
    stage: number
    errorMessage: number
    _all: number
  }


  export type ProcessPfuMinAggregateInputType = {
    processId?: true
    inputFileId?: true
    resultFileId?: true
    isAi?: true
    stage?: true
    errorMessage?: true
  }

  export type ProcessPfuMaxAggregateInputType = {
    processId?: true
    inputFileId?: true
    resultFileId?: true
    isAi?: true
    stage?: true
    errorMessage?: true
  }

  export type ProcessPfuCountAggregateInputType = {
    processId?: true
    inputFileId?: true
    resultFileId?: true
    isAi?: true
    stage?: true
    errorMessage?: true
    _all?: true
  }

  export type ProcessPfuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessPfu to aggregate.
     */
    where?: ProcessPfuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessPfus to fetch.
     */
    orderBy?: ProcessPfuOrderByWithRelationInput | ProcessPfuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcessPfuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessPfus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessPfus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProcessPfus
    **/
    _count?: true | ProcessPfuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcessPfuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcessPfuMaxAggregateInputType
  }

  export type GetProcessPfuAggregateType<T extends ProcessPfuAggregateArgs> = {
        [P in keyof T & keyof AggregateProcessPfu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcessPfu[P]>
      : GetScalarType<T[P], AggregateProcessPfu[P]>
  }




  export type ProcessPfuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessPfuWhereInput
    orderBy?: ProcessPfuOrderByWithAggregationInput | ProcessPfuOrderByWithAggregationInput[]
    by: ProcessPfuScalarFieldEnum[] | ProcessPfuScalarFieldEnum
    having?: ProcessPfuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcessPfuCountAggregateInputType | true
    _min?: ProcessPfuMinAggregateInputType
    _max?: ProcessPfuMaxAggregateInputType
  }

  export type ProcessPfuGroupByOutputType = {
    processId: string
    inputFileId: string
    resultFileId: string | null
    isAi: boolean
    stage: $Enums.PfuStage
    errorMessage: string | null
    _count: ProcessPfuCountAggregateOutputType | null
    _min: ProcessPfuMinAggregateOutputType | null
    _max: ProcessPfuMaxAggregateOutputType | null
  }

  type GetProcessPfuGroupByPayload<T extends ProcessPfuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcessPfuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcessPfuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcessPfuGroupByOutputType[P]>
            : GetScalarType<T[P], ProcessPfuGroupByOutputType[P]>
        }
      >
    >


  export type ProcessPfuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    processId?: boolean
    inputFileId?: boolean
    resultFileId?: boolean
    isAi?: boolean
    stage?: boolean
    errorMessage?: boolean
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    inputFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    resultFile?: boolean | ProcessPfu$resultFileArgs<ExtArgs>
  }, ExtArgs["result"]["processPfu"]>

  export type ProcessPfuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    processId?: boolean
    inputFileId?: boolean
    resultFileId?: boolean
    isAi?: boolean
    stage?: boolean
    errorMessage?: boolean
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    inputFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    resultFile?: boolean | ProcessPfu$resultFileArgs<ExtArgs>
  }, ExtArgs["result"]["processPfu"]>

  export type ProcessPfuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    processId?: boolean
    inputFileId?: boolean
    resultFileId?: boolean
    isAi?: boolean
    stage?: boolean
    errorMessage?: boolean
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    inputFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    resultFile?: boolean | ProcessPfu$resultFileArgs<ExtArgs>
  }, ExtArgs["result"]["processPfu"]>

  export type ProcessPfuSelectScalar = {
    processId?: boolean
    inputFileId?: boolean
    resultFileId?: boolean
    isAi?: boolean
    stage?: boolean
    errorMessage?: boolean
  }

  export type ProcessPfuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"processId" | "inputFileId" | "resultFileId" | "isAi" | "stage" | "errorMessage", ExtArgs["result"]["processPfu"]>
  export type ProcessPfuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    inputFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    resultFile?: boolean | ProcessPfu$resultFileArgs<ExtArgs>
  }
  export type ProcessPfuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    inputFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    resultFile?: boolean | ProcessPfu$resultFileArgs<ExtArgs>
  }
  export type ProcessPfuIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    inputFile?: boolean | StorageFileDefaultArgs<ExtArgs>
    resultFile?: boolean | ProcessPfu$resultFileArgs<ExtArgs>
  }

  export type $ProcessPfuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProcessPfu"
    objects: {
      process: Prisma.$ProcessPayload<ExtArgs>
      inputFile: Prisma.$StorageFilePayload<ExtArgs>
      resultFile: Prisma.$StorageFilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      processId: string
      inputFileId: string
      resultFileId: string | null
      isAi: boolean
      stage: $Enums.PfuStage
      errorMessage: string | null
    }, ExtArgs["result"]["processPfu"]>
    composites: {}
  }

  type ProcessPfuGetPayload<S extends boolean | null | undefined | ProcessPfuDefaultArgs> = $Result.GetResult<Prisma.$ProcessPfuPayload, S>

  type ProcessPfuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProcessPfuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcessPfuCountAggregateInputType | true
    }

  export interface ProcessPfuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProcessPfu'], meta: { name: 'ProcessPfu' } }
    /**
     * Find zero or one ProcessPfu that matches the filter.
     * @param {ProcessPfuFindUniqueArgs} args - Arguments to find a ProcessPfu
     * @example
     * // Get one ProcessPfu
     * const processPfu = await prisma.processPfu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcessPfuFindUniqueArgs>(args: SelectSubset<T, ProcessPfuFindUniqueArgs<ExtArgs>>): Prisma__ProcessPfuClient<$Result.GetResult<Prisma.$ProcessPfuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProcessPfu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcessPfuFindUniqueOrThrowArgs} args - Arguments to find a ProcessPfu
     * @example
     * // Get one ProcessPfu
     * const processPfu = await prisma.processPfu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcessPfuFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcessPfuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcessPfuClient<$Result.GetResult<Prisma.$ProcessPfuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcessPfu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessPfuFindFirstArgs} args - Arguments to find a ProcessPfu
     * @example
     * // Get one ProcessPfu
     * const processPfu = await prisma.processPfu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcessPfuFindFirstArgs>(args?: SelectSubset<T, ProcessPfuFindFirstArgs<ExtArgs>>): Prisma__ProcessPfuClient<$Result.GetResult<Prisma.$ProcessPfuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcessPfu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessPfuFindFirstOrThrowArgs} args - Arguments to find a ProcessPfu
     * @example
     * // Get one ProcessPfu
     * const processPfu = await prisma.processPfu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcessPfuFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcessPfuFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcessPfuClient<$Result.GetResult<Prisma.$ProcessPfuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProcessPfus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessPfuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProcessPfus
     * const processPfus = await prisma.processPfu.findMany()
     * 
     * // Get first 10 ProcessPfus
     * const processPfus = await prisma.processPfu.findMany({ take: 10 })
     * 
     * // Only select the `processId`
     * const processPfuWithProcessIdOnly = await prisma.processPfu.findMany({ select: { processId: true } })
     * 
     */
    findMany<T extends ProcessPfuFindManyArgs>(args?: SelectSubset<T, ProcessPfuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessPfuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProcessPfu.
     * @param {ProcessPfuCreateArgs} args - Arguments to create a ProcessPfu.
     * @example
     * // Create one ProcessPfu
     * const ProcessPfu = await prisma.processPfu.create({
     *   data: {
     *     // ... data to create a ProcessPfu
     *   }
     * })
     * 
     */
    create<T extends ProcessPfuCreateArgs>(args: SelectSubset<T, ProcessPfuCreateArgs<ExtArgs>>): Prisma__ProcessPfuClient<$Result.GetResult<Prisma.$ProcessPfuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProcessPfus.
     * @param {ProcessPfuCreateManyArgs} args - Arguments to create many ProcessPfus.
     * @example
     * // Create many ProcessPfus
     * const processPfu = await prisma.processPfu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcessPfuCreateManyArgs>(args?: SelectSubset<T, ProcessPfuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProcessPfus and returns the data saved in the database.
     * @param {ProcessPfuCreateManyAndReturnArgs} args - Arguments to create many ProcessPfus.
     * @example
     * // Create many ProcessPfus
     * const processPfu = await prisma.processPfu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProcessPfus and only return the `processId`
     * const processPfuWithProcessIdOnly = await prisma.processPfu.createManyAndReturn({
     *   select: { processId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProcessPfuCreateManyAndReturnArgs>(args?: SelectSubset<T, ProcessPfuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessPfuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProcessPfu.
     * @param {ProcessPfuDeleteArgs} args - Arguments to delete one ProcessPfu.
     * @example
     * // Delete one ProcessPfu
     * const ProcessPfu = await prisma.processPfu.delete({
     *   where: {
     *     // ... filter to delete one ProcessPfu
     *   }
     * })
     * 
     */
    delete<T extends ProcessPfuDeleteArgs>(args: SelectSubset<T, ProcessPfuDeleteArgs<ExtArgs>>): Prisma__ProcessPfuClient<$Result.GetResult<Prisma.$ProcessPfuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProcessPfu.
     * @param {ProcessPfuUpdateArgs} args - Arguments to update one ProcessPfu.
     * @example
     * // Update one ProcessPfu
     * const processPfu = await prisma.processPfu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcessPfuUpdateArgs>(args: SelectSubset<T, ProcessPfuUpdateArgs<ExtArgs>>): Prisma__ProcessPfuClient<$Result.GetResult<Prisma.$ProcessPfuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProcessPfus.
     * @param {ProcessPfuDeleteManyArgs} args - Arguments to filter ProcessPfus to delete.
     * @example
     * // Delete a few ProcessPfus
     * const { count } = await prisma.processPfu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcessPfuDeleteManyArgs>(args?: SelectSubset<T, ProcessPfuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcessPfus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessPfuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProcessPfus
     * const processPfu = await prisma.processPfu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcessPfuUpdateManyArgs>(args: SelectSubset<T, ProcessPfuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcessPfus and returns the data updated in the database.
     * @param {ProcessPfuUpdateManyAndReturnArgs} args - Arguments to update many ProcessPfus.
     * @example
     * // Update many ProcessPfus
     * const processPfu = await prisma.processPfu.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProcessPfus and only return the `processId`
     * const processPfuWithProcessIdOnly = await prisma.processPfu.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProcessPfuUpdateManyAndReturnArgs>(args: SelectSubset<T, ProcessPfuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessPfuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProcessPfu.
     * @param {ProcessPfuUpsertArgs} args - Arguments to update or create a ProcessPfu.
     * @example
     * // Update or create a ProcessPfu
     * const processPfu = await prisma.processPfu.upsert({
     *   create: {
     *     // ... data to create a ProcessPfu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProcessPfu we want to update
     *   }
     * })
     */
    upsert<T extends ProcessPfuUpsertArgs>(args: SelectSubset<T, ProcessPfuUpsertArgs<ExtArgs>>): Prisma__ProcessPfuClient<$Result.GetResult<Prisma.$ProcessPfuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProcessPfus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessPfuCountArgs} args - Arguments to filter ProcessPfus to count.
     * @example
     * // Count the number of ProcessPfus
     * const count = await prisma.processPfu.count({
     *   where: {
     *     // ... the filter for the ProcessPfus we want to count
     *   }
     * })
    **/
    count<T extends ProcessPfuCountArgs>(
      args?: Subset<T, ProcessPfuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcessPfuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProcessPfu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessPfuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProcessPfuAggregateArgs>(args: Subset<T, ProcessPfuAggregateArgs>): Prisma.PrismaPromise<GetProcessPfuAggregateType<T>>

    /**
     * Group by ProcessPfu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessPfuGroupByArgs} args - Group by arguments.
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
      T extends ProcessPfuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcessPfuGroupByArgs['orderBy'] }
        : { orderBy?: ProcessPfuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProcessPfuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcessPfuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProcessPfu model
   */
  readonly fields: ProcessPfuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProcessPfu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcessPfuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    process<T extends ProcessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProcessDefaultArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inputFile<T extends StorageFileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StorageFileDefaultArgs<ExtArgs>>): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resultFile<T extends ProcessPfu$resultFileArgs<ExtArgs> = {}>(args?: Subset<T, ProcessPfu$resultFileArgs<ExtArgs>>): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProcessPfu model
   */
  interface ProcessPfuFieldRefs {
    readonly processId: FieldRef<"ProcessPfu", 'String'>
    readonly inputFileId: FieldRef<"ProcessPfu", 'String'>
    readonly resultFileId: FieldRef<"ProcessPfu", 'String'>
    readonly isAi: FieldRef<"ProcessPfu", 'Boolean'>
    readonly stage: FieldRef<"ProcessPfu", 'PfuStage'>
    readonly errorMessage: FieldRef<"ProcessPfu", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProcessPfu findUnique
   */
  export type ProcessPfuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessPfu
     */
    select?: ProcessPfuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessPfu
     */
    omit?: ProcessPfuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessPfuInclude<ExtArgs> | null
    /**
     * Filter, which ProcessPfu to fetch.
     */
    where: ProcessPfuWhereUniqueInput
  }

  /**
   * ProcessPfu findUniqueOrThrow
   */
  export type ProcessPfuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessPfu
     */
    select?: ProcessPfuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessPfu
     */
    omit?: ProcessPfuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessPfuInclude<ExtArgs> | null
    /**
     * Filter, which ProcessPfu to fetch.
     */
    where: ProcessPfuWhereUniqueInput
  }

  /**
   * ProcessPfu findFirst
   */
  export type ProcessPfuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessPfu
     */
    select?: ProcessPfuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessPfu
     */
    omit?: ProcessPfuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessPfuInclude<ExtArgs> | null
    /**
     * Filter, which ProcessPfu to fetch.
     */
    where?: ProcessPfuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessPfus to fetch.
     */
    orderBy?: ProcessPfuOrderByWithRelationInput | ProcessPfuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessPfus.
     */
    cursor?: ProcessPfuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessPfus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessPfus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessPfus.
     */
    distinct?: ProcessPfuScalarFieldEnum | ProcessPfuScalarFieldEnum[]
  }

  /**
   * ProcessPfu findFirstOrThrow
   */
  export type ProcessPfuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessPfu
     */
    select?: ProcessPfuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessPfu
     */
    omit?: ProcessPfuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessPfuInclude<ExtArgs> | null
    /**
     * Filter, which ProcessPfu to fetch.
     */
    where?: ProcessPfuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessPfus to fetch.
     */
    orderBy?: ProcessPfuOrderByWithRelationInput | ProcessPfuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessPfus.
     */
    cursor?: ProcessPfuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessPfus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessPfus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessPfus.
     */
    distinct?: ProcessPfuScalarFieldEnum | ProcessPfuScalarFieldEnum[]
  }

  /**
   * ProcessPfu findMany
   */
  export type ProcessPfuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessPfu
     */
    select?: ProcessPfuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessPfu
     */
    omit?: ProcessPfuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessPfuInclude<ExtArgs> | null
    /**
     * Filter, which ProcessPfus to fetch.
     */
    where?: ProcessPfuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessPfus to fetch.
     */
    orderBy?: ProcessPfuOrderByWithRelationInput | ProcessPfuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProcessPfus.
     */
    cursor?: ProcessPfuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessPfus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessPfus.
     */
    skip?: number
    distinct?: ProcessPfuScalarFieldEnum | ProcessPfuScalarFieldEnum[]
  }

  /**
   * ProcessPfu create
   */
  export type ProcessPfuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessPfu
     */
    select?: ProcessPfuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessPfu
     */
    omit?: ProcessPfuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessPfuInclude<ExtArgs> | null
    /**
     * The data needed to create a ProcessPfu.
     */
    data: XOR<ProcessPfuCreateInput, ProcessPfuUncheckedCreateInput>
  }

  /**
   * ProcessPfu createMany
   */
  export type ProcessPfuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProcessPfus.
     */
    data: ProcessPfuCreateManyInput | ProcessPfuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProcessPfu createManyAndReturn
   */
  export type ProcessPfuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessPfu
     */
    select?: ProcessPfuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessPfu
     */
    omit?: ProcessPfuOmit<ExtArgs> | null
    /**
     * The data used to create many ProcessPfus.
     */
    data: ProcessPfuCreateManyInput | ProcessPfuCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessPfuIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProcessPfu update
   */
  export type ProcessPfuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessPfu
     */
    select?: ProcessPfuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessPfu
     */
    omit?: ProcessPfuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessPfuInclude<ExtArgs> | null
    /**
     * The data needed to update a ProcessPfu.
     */
    data: XOR<ProcessPfuUpdateInput, ProcessPfuUncheckedUpdateInput>
    /**
     * Choose, which ProcessPfu to update.
     */
    where: ProcessPfuWhereUniqueInput
  }

  /**
   * ProcessPfu updateMany
   */
  export type ProcessPfuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProcessPfus.
     */
    data: XOR<ProcessPfuUpdateManyMutationInput, ProcessPfuUncheckedUpdateManyInput>
    /**
     * Filter which ProcessPfus to update
     */
    where?: ProcessPfuWhereInput
    /**
     * Limit how many ProcessPfus to update.
     */
    limit?: number
  }

  /**
   * ProcessPfu updateManyAndReturn
   */
  export type ProcessPfuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessPfu
     */
    select?: ProcessPfuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessPfu
     */
    omit?: ProcessPfuOmit<ExtArgs> | null
    /**
     * The data used to update ProcessPfus.
     */
    data: XOR<ProcessPfuUpdateManyMutationInput, ProcessPfuUncheckedUpdateManyInput>
    /**
     * Filter which ProcessPfus to update
     */
    where?: ProcessPfuWhereInput
    /**
     * Limit how many ProcessPfus to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessPfuIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProcessPfu upsert
   */
  export type ProcessPfuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessPfu
     */
    select?: ProcessPfuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessPfu
     */
    omit?: ProcessPfuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessPfuInclude<ExtArgs> | null
    /**
     * The filter to search for the ProcessPfu to update in case it exists.
     */
    where: ProcessPfuWhereUniqueInput
    /**
     * In case the ProcessPfu found by the `where` argument doesn't exist, create a new ProcessPfu with this data.
     */
    create: XOR<ProcessPfuCreateInput, ProcessPfuUncheckedCreateInput>
    /**
     * In case the ProcessPfu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcessPfuUpdateInput, ProcessPfuUncheckedUpdateInput>
  }

  /**
   * ProcessPfu delete
   */
  export type ProcessPfuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessPfu
     */
    select?: ProcessPfuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessPfu
     */
    omit?: ProcessPfuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessPfuInclude<ExtArgs> | null
    /**
     * Filter which ProcessPfu to delete.
     */
    where: ProcessPfuWhereUniqueInput
  }

  /**
   * ProcessPfu deleteMany
   */
  export type ProcessPfuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessPfus to delete
     */
    where?: ProcessPfuWhereInput
    /**
     * Limit how many ProcessPfus to delete.
     */
    limit?: number
  }

  /**
   * ProcessPfu.resultFile
   */
  export type ProcessPfu$resultFileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ProcessPfu without action
   */
  export type ProcessPfuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessPfu
     */
    select?: ProcessPfuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessPfu
     */
    omit?: ProcessPfuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessPfuInclude<ExtArgs> | null
  }


  /**
   * Model ProcessErd
   */

  export type AggregateProcessErd = {
    _count: ProcessErdCountAggregateOutputType | null
    _min: ProcessErdMinAggregateOutputType | null
    _max: ProcessErdMaxAggregateOutputType | null
  }

  export type ProcessErdMinAggregateOutputType = {
    processId: string | null
    grantedІnputFileId: string | null
    acceptedІnputFileId: string | null
    resultFileId: string | null
    isAi: boolean | null
    stage: $Enums.ErdStage | null
    errorMessage: string | null
  }

  export type ProcessErdMaxAggregateOutputType = {
    processId: string | null
    grantedІnputFileId: string | null
    acceptedІnputFileId: string | null
    resultFileId: string | null
    isAi: boolean | null
    stage: $Enums.ErdStage | null
    errorMessage: string | null
  }

  export type ProcessErdCountAggregateOutputType = {
    processId: number
    grantedІnputFileId: number
    acceptedІnputFileId: number
    resultFileId: number
    isAi: number
    stage: number
    errorMessage: number
    _all: number
  }


  export type ProcessErdMinAggregateInputType = {
    processId?: true
    grantedІnputFileId?: true
    acceptedІnputFileId?: true
    resultFileId?: true
    isAi?: true
    stage?: true
    errorMessage?: true
  }

  export type ProcessErdMaxAggregateInputType = {
    processId?: true
    grantedІnputFileId?: true
    acceptedІnputFileId?: true
    resultFileId?: true
    isAi?: true
    stage?: true
    errorMessage?: true
  }

  export type ProcessErdCountAggregateInputType = {
    processId?: true
    grantedІnputFileId?: true
    acceptedІnputFileId?: true
    resultFileId?: true
    isAi?: true
    stage?: true
    errorMessage?: true
    _all?: true
  }

  export type ProcessErdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessErd to aggregate.
     */
    where?: ProcessErdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessErds to fetch.
     */
    orderBy?: ProcessErdOrderByWithRelationInput | ProcessErdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcessErdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessErds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessErds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProcessErds
    **/
    _count?: true | ProcessErdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcessErdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcessErdMaxAggregateInputType
  }

  export type GetProcessErdAggregateType<T extends ProcessErdAggregateArgs> = {
        [P in keyof T & keyof AggregateProcessErd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcessErd[P]>
      : GetScalarType<T[P], AggregateProcessErd[P]>
  }




  export type ProcessErdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessErdWhereInput
    orderBy?: ProcessErdOrderByWithAggregationInput | ProcessErdOrderByWithAggregationInput[]
    by: ProcessErdScalarFieldEnum[] | ProcessErdScalarFieldEnum
    having?: ProcessErdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcessErdCountAggregateInputType | true
    _min?: ProcessErdMinAggregateInputType
    _max?: ProcessErdMaxAggregateInputType
  }

  export type ProcessErdGroupByOutputType = {
    processId: string
    grantedІnputFileId: string | null
    acceptedІnputFileId: string | null
    resultFileId: string | null
    isAi: boolean
    stage: $Enums.ErdStage
    errorMessage: string | null
    _count: ProcessErdCountAggregateOutputType | null
    _min: ProcessErdMinAggregateOutputType | null
    _max: ProcessErdMaxAggregateOutputType | null
  }

  type GetProcessErdGroupByPayload<T extends ProcessErdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcessErdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcessErdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcessErdGroupByOutputType[P]>
            : GetScalarType<T[P], ProcessErdGroupByOutputType[P]>
        }
      >
    >


  export type ProcessErdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    processId?: boolean
    grantedІnputFileId?: boolean
    acceptedІnputFileId?: boolean
    resultFileId?: boolean
    isAi?: boolean
    stage?: boolean
    errorMessage?: boolean
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    grantedІnputFile?: boolean | ProcessErd$grantedІnputFileArgs<ExtArgs>
    acceptedІnputFile?: boolean | ProcessErd$acceptedІnputFileArgs<ExtArgs>
    resultFile?: boolean | ProcessErd$resultFileArgs<ExtArgs>
  }, ExtArgs["result"]["processErd"]>

  export type ProcessErdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    processId?: boolean
    grantedІnputFileId?: boolean
    acceptedІnputFileId?: boolean
    resultFileId?: boolean
    isAi?: boolean
    stage?: boolean
    errorMessage?: boolean
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    grantedІnputFile?: boolean | ProcessErd$grantedІnputFileArgs<ExtArgs>
    acceptedІnputFile?: boolean | ProcessErd$acceptedІnputFileArgs<ExtArgs>
    resultFile?: boolean | ProcessErd$resultFileArgs<ExtArgs>
  }, ExtArgs["result"]["processErd"]>

  export type ProcessErdSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    processId?: boolean
    grantedІnputFileId?: boolean
    acceptedІnputFileId?: boolean
    resultFileId?: boolean
    isAi?: boolean
    stage?: boolean
    errorMessage?: boolean
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    grantedІnputFile?: boolean | ProcessErd$grantedІnputFileArgs<ExtArgs>
    acceptedІnputFile?: boolean | ProcessErd$acceptedІnputFileArgs<ExtArgs>
    resultFile?: boolean | ProcessErd$resultFileArgs<ExtArgs>
  }, ExtArgs["result"]["processErd"]>

  export type ProcessErdSelectScalar = {
    processId?: boolean
    grantedІnputFileId?: boolean
    acceptedІnputFileId?: boolean
    resultFileId?: boolean
    isAi?: boolean
    stage?: boolean
    errorMessage?: boolean
  }

  export type ProcessErdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"processId" | "grantedІnputFileId" | "acceptedІnputFileId" | "resultFileId" | "isAi" | "stage" | "errorMessage", ExtArgs["result"]["processErd"]>
  export type ProcessErdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    grantedІnputFile?: boolean | ProcessErd$grantedІnputFileArgs<ExtArgs>
    acceptedІnputFile?: boolean | ProcessErd$acceptedІnputFileArgs<ExtArgs>
    resultFile?: boolean | ProcessErd$resultFileArgs<ExtArgs>
  }
  export type ProcessErdIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    grantedІnputFile?: boolean | ProcessErd$grantedІnputFileArgs<ExtArgs>
    acceptedІnputFile?: boolean | ProcessErd$acceptedІnputFileArgs<ExtArgs>
    resultFile?: boolean | ProcessErd$resultFileArgs<ExtArgs>
  }
  export type ProcessErdIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    process?: boolean | ProcessDefaultArgs<ExtArgs>
    grantedІnputFile?: boolean | ProcessErd$grantedІnputFileArgs<ExtArgs>
    acceptedІnputFile?: boolean | ProcessErd$acceptedІnputFileArgs<ExtArgs>
    resultFile?: boolean | ProcessErd$resultFileArgs<ExtArgs>
  }

  export type $ProcessErdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProcessErd"
    objects: {
      process: Prisma.$ProcessPayload<ExtArgs>
      grantedІnputFile: Prisma.$StorageFilePayload<ExtArgs> | null
      acceptedІnputFile: Prisma.$StorageFilePayload<ExtArgs> | null
      resultFile: Prisma.$StorageFilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      processId: string
      grantedІnputFileId: string | null
      acceptedІnputFileId: string | null
      resultFileId: string | null
      isAi: boolean
      stage: $Enums.ErdStage
      errorMessage: string | null
    }, ExtArgs["result"]["processErd"]>
    composites: {}
  }

  type ProcessErdGetPayload<S extends boolean | null | undefined | ProcessErdDefaultArgs> = $Result.GetResult<Prisma.$ProcessErdPayload, S>

  type ProcessErdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProcessErdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcessErdCountAggregateInputType | true
    }

  export interface ProcessErdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProcessErd'], meta: { name: 'ProcessErd' } }
    /**
     * Find zero or one ProcessErd that matches the filter.
     * @param {ProcessErdFindUniqueArgs} args - Arguments to find a ProcessErd
     * @example
     * // Get one ProcessErd
     * const processErd = await prisma.processErd.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcessErdFindUniqueArgs>(args: SelectSubset<T, ProcessErdFindUniqueArgs<ExtArgs>>): Prisma__ProcessErdClient<$Result.GetResult<Prisma.$ProcessErdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProcessErd that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcessErdFindUniqueOrThrowArgs} args - Arguments to find a ProcessErd
     * @example
     * // Get one ProcessErd
     * const processErd = await prisma.processErd.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcessErdFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcessErdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcessErdClient<$Result.GetResult<Prisma.$ProcessErdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcessErd that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessErdFindFirstArgs} args - Arguments to find a ProcessErd
     * @example
     * // Get one ProcessErd
     * const processErd = await prisma.processErd.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcessErdFindFirstArgs>(args?: SelectSubset<T, ProcessErdFindFirstArgs<ExtArgs>>): Prisma__ProcessErdClient<$Result.GetResult<Prisma.$ProcessErdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcessErd that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessErdFindFirstOrThrowArgs} args - Arguments to find a ProcessErd
     * @example
     * // Get one ProcessErd
     * const processErd = await prisma.processErd.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcessErdFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcessErdFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcessErdClient<$Result.GetResult<Prisma.$ProcessErdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProcessErds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessErdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProcessErds
     * const processErds = await prisma.processErd.findMany()
     * 
     * // Get first 10 ProcessErds
     * const processErds = await prisma.processErd.findMany({ take: 10 })
     * 
     * // Only select the `processId`
     * const processErdWithProcessIdOnly = await prisma.processErd.findMany({ select: { processId: true } })
     * 
     */
    findMany<T extends ProcessErdFindManyArgs>(args?: SelectSubset<T, ProcessErdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessErdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProcessErd.
     * @param {ProcessErdCreateArgs} args - Arguments to create a ProcessErd.
     * @example
     * // Create one ProcessErd
     * const ProcessErd = await prisma.processErd.create({
     *   data: {
     *     // ... data to create a ProcessErd
     *   }
     * })
     * 
     */
    create<T extends ProcessErdCreateArgs>(args: SelectSubset<T, ProcessErdCreateArgs<ExtArgs>>): Prisma__ProcessErdClient<$Result.GetResult<Prisma.$ProcessErdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProcessErds.
     * @param {ProcessErdCreateManyArgs} args - Arguments to create many ProcessErds.
     * @example
     * // Create many ProcessErds
     * const processErd = await prisma.processErd.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcessErdCreateManyArgs>(args?: SelectSubset<T, ProcessErdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProcessErds and returns the data saved in the database.
     * @param {ProcessErdCreateManyAndReturnArgs} args - Arguments to create many ProcessErds.
     * @example
     * // Create many ProcessErds
     * const processErd = await prisma.processErd.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProcessErds and only return the `processId`
     * const processErdWithProcessIdOnly = await prisma.processErd.createManyAndReturn({
     *   select: { processId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProcessErdCreateManyAndReturnArgs>(args?: SelectSubset<T, ProcessErdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessErdPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProcessErd.
     * @param {ProcessErdDeleteArgs} args - Arguments to delete one ProcessErd.
     * @example
     * // Delete one ProcessErd
     * const ProcessErd = await prisma.processErd.delete({
     *   where: {
     *     // ... filter to delete one ProcessErd
     *   }
     * })
     * 
     */
    delete<T extends ProcessErdDeleteArgs>(args: SelectSubset<T, ProcessErdDeleteArgs<ExtArgs>>): Prisma__ProcessErdClient<$Result.GetResult<Prisma.$ProcessErdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProcessErd.
     * @param {ProcessErdUpdateArgs} args - Arguments to update one ProcessErd.
     * @example
     * // Update one ProcessErd
     * const processErd = await prisma.processErd.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcessErdUpdateArgs>(args: SelectSubset<T, ProcessErdUpdateArgs<ExtArgs>>): Prisma__ProcessErdClient<$Result.GetResult<Prisma.$ProcessErdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProcessErds.
     * @param {ProcessErdDeleteManyArgs} args - Arguments to filter ProcessErds to delete.
     * @example
     * // Delete a few ProcessErds
     * const { count } = await prisma.processErd.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcessErdDeleteManyArgs>(args?: SelectSubset<T, ProcessErdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcessErds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessErdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProcessErds
     * const processErd = await prisma.processErd.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcessErdUpdateManyArgs>(args: SelectSubset<T, ProcessErdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcessErds and returns the data updated in the database.
     * @param {ProcessErdUpdateManyAndReturnArgs} args - Arguments to update many ProcessErds.
     * @example
     * // Update many ProcessErds
     * const processErd = await prisma.processErd.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProcessErds and only return the `processId`
     * const processErdWithProcessIdOnly = await prisma.processErd.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProcessErdUpdateManyAndReturnArgs>(args: SelectSubset<T, ProcessErdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessErdPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProcessErd.
     * @param {ProcessErdUpsertArgs} args - Arguments to update or create a ProcessErd.
     * @example
     * // Update or create a ProcessErd
     * const processErd = await prisma.processErd.upsert({
     *   create: {
     *     // ... data to create a ProcessErd
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProcessErd we want to update
     *   }
     * })
     */
    upsert<T extends ProcessErdUpsertArgs>(args: SelectSubset<T, ProcessErdUpsertArgs<ExtArgs>>): Prisma__ProcessErdClient<$Result.GetResult<Prisma.$ProcessErdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProcessErds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessErdCountArgs} args - Arguments to filter ProcessErds to count.
     * @example
     * // Count the number of ProcessErds
     * const count = await prisma.processErd.count({
     *   where: {
     *     // ... the filter for the ProcessErds we want to count
     *   }
     * })
    **/
    count<T extends ProcessErdCountArgs>(
      args?: Subset<T, ProcessErdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcessErdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProcessErd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessErdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProcessErdAggregateArgs>(args: Subset<T, ProcessErdAggregateArgs>): Prisma.PrismaPromise<GetProcessErdAggregateType<T>>

    /**
     * Group by ProcessErd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessErdGroupByArgs} args - Group by arguments.
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
      T extends ProcessErdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcessErdGroupByArgs['orderBy'] }
        : { orderBy?: ProcessErdGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProcessErdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcessErdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProcessErd model
   */
  readonly fields: ProcessErdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProcessErd.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcessErdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    process<T extends ProcessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProcessDefaultArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    grantedІnputFile<T extends ProcessErd$grantedІnputFileArgs<ExtArgs> = {}>(args?: Subset<T, ProcessErd$grantedІnputFileArgs<ExtArgs>>): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    acceptedІnputFile<T extends ProcessErd$acceptedІnputFileArgs<ExtArgs> = {}>(args?: Subset<T, ProcessErd$acceptedІnputFileArgs<ExtArgs>>): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    resultFile<T extends ProcessErd$resultFileArgs<ExtArgs> = {}>(args?: Subset<T, ProcessErd$resultFileArgs<ExtArgs>>): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProcessErd model
   */
  interface ProcessErdFieldRefs {
    readonly processId: FieldRef<"ProcessErd", 'String'>
    readonly grantedІnputFileId: FieldRef<"ProcessErd", 'String'>
    readonly acceptedІnputFileId: FieldRef<"ProcessErd", 'String'>
    readonly resultFileId: FieldRef<"ProcessErd", 'String'>
    readonly isAi: FieldRef<"ProcessErd", 'Boolean'>
    readonly stage: FieldRef<"ProcessErd", 'ErdStage'>
    readonly errorMessage: FieldRef<"ProcessErd", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProcessErd findUnique
   */
  export type ProcessErdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessErd
     */
    select?: ProcessErdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessErd
     */
    omit?: ProcessErdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessErdInclude<ExtArgs> | null
    /**
     * Filter, which ProcessErd to fetch.
     */
    where: ProcessErdWhereUniqueInput
  }

  /**
   * ProcessErd findUniqueOrThrow
   */
  export type ProcessErdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessErd
     */
    select?: ProcessErdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessErd
     */
    omit?: ProcessErdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessErdInclude<ExtArgs> | null
    /**
     * Filter, which ProcessErd to fetch.
     */
    where: ProcessErdWhereUniqueInput
  }

  /**
   * ProcessErd findFirst
   */
  export type ProcessErdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessErd
     */
    select?: ProcessErdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessErd
     */
    omit?: ProcessErdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessErdInclude<ExtArgs> | null
    /**
     * Filter, which ProcessErd to fetch.
     */
    where?: ProcessErdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessErds to fetch.
     */
    orderBy?: ProcessErdOrderByWithRelationInput | ProcessErdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessErds.
     */
    cursor?: ProcessErdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessErds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessErds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessErds.
     */
    distinct?: ProcessErdScalarFieldEnum | ProcessErdScalarFieldEnum[]
  }

  /**
   * ProcessErd findFirstOrThrow
   */
  export type ProcessErdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessErd
     */
    select?: ProcessErdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessErd
     */
    omit?: ProcessErdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessErdInclude<ExtArgs> | null
    /**
     * Filter, which ProcessErd to fetch.
     */
    where?: ProcessErdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessErds to fetch.
     */
    orderBy?: ProcessErdOrderByWithRelationInput | ProcessErdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessErds.
     */
    cursor?: ProcessErdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessErds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessErds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessErds.
     */
    distinct?: ProcessErdScalarFieldEnum | ProcessErdScalarFieldEnum[]
  }

  /**
   * ProcessErd findMany
   */
  export type ProcessErdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessErd
     */
    select?: ProcessErdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessErd
     */
    omit?: ProcessErdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessErdInclude<ExtArgs> | null
    /**
     * Filter, which ProcessErds to fetch.
     */
    where?: ProcessErdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessErds to fetch.
     */
    orderBy?: ProcessErdOrderByWithRelationInput | ProcessErdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProcessErds.
     */
    cursor?: ProcessErdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessErds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessErds.
     */
    skip?: number
    distinct?: ProcessErdScalarFieldEnum | ProcessErdScalarFieldEnum[]
  }

  /**
   * ProcessErd create
   */
  export type ProcessErdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessErd
     */
    select?: ProcessErdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessErd
     */
    omit?: ProcessErdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessErdInclude<ExtArgs> | null
    /**
     * The data needed to create a ProcessErd.
     */
    data: XOR<ProcessErdCreateInput, ProcessErdUncheckedCreateInput>
  }

  /**
   * ProcessErd createMany
   */
  export type ProcessErdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProcessErds.
     */
    data: ProcessErdCreateManyInput | ProcessErdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProcessErd createManyAndReturn
   */
  export type ProcessErdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessErd
     */
    select?: ProcessErdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessErd
     */
    omit?: ProcessErdOmit<ExtArgs> | null
    /**
     * The data used to create many ProcessErds.
     */
    data: ProcessErdCreateManyInput | ProcessErdCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessErdIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProcessErd update
   */
  export type ProcessErdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessErd
     */
    select?: ProcessErdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessErd
     */
    omit?: ProcessErdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessErdInclude<ExtArgs> | null
    /**
     * The data needed to update a ProcessErd.
     */
    data: XOR<ProcessErdUpdateInput, ProcessErdUncheckedUpdateInput>
    /**
     * Choose, which ProcessErd to update.
     */
    where: ProcessErdWhereUniqueInput
  }

  /**
   * ProcessErd updateMany
   */
  export type ProcessErdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProcessErds.
     */
    data: XOR<ProcessErdUpdateManyMutationInput, ProcessErdUncheckedUpdateManyInput>
    /**
     * Filter which ProcessErds to update
     */
    where?: ProcessErdWhereInput
    /**
     * Limit how many ProcessErds to update.
     */
    limit?: number
  }

  /**
   * ProcessErd updateManyAndReturn
   */
  export type ProcessErdUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessErd
     */
    select?: ProcessErdSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessErd
     */
    omit?: ProcessErdOmit<ExtArgs> | null
    /**
     * The data used to update ProcessErds.
     */
    data: XOR<ProcessErdUpdateManyMutationInput, ProcessErdUncheckedUpdateManyInput>
    /**
     * Filter which ProcessErds to update
     */
    where?: ProcessErdWhereInput
    /**
     * Limit how many ProcessErds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessErdIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProcessErd upsert
   */
  export type ProcessErdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessErd
     */
    select?: ProcessErdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessErd
     */
    omit?: ProcessErdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessErdInclude<ExtArgs> | null
    /**
     * The filter to search for the ProcessErd to update in case it exists.
     */
    where: ProcessErdWhereUniqueInput
    /**
     * In case the ProcessErd found by the `where` argument doesn't exist, create a new ProcessErd with this data.
     */
    create: XOR<ProcessErdCreateInput, ProcessErdUncheckedCreateInput>
    /**
     * In case the ProcessErd was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcessErdUpdateInput, ProcessErdUncheckedUpdateInput>
  }

  /**
   * ProcessErd delete
   */
  export type ProcessErdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessErd
     */
    select?: ProcessErdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessErd
     */
    omit?: ProcessErdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessErdInclude<ExtArgs> | null
    /**
     * Filter which ProcessErd to delete.
     */
    where: ProcessErdWhereUniqueInput
  }

  /**
   * ProcessErd deleteMany
   */
  export type ProcessErdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessErds to delete
     */
    where?: ProcessErdWhereInput
    /**
     * Limit how many ProcessErds to delete.
     */
    limit?: number
  }

  /**
   * ProcessErd.grantedІnputFile
   */
  export type ProcessErd$grantedІnputFileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ProcessErd.acceptedІnputFile
   */
  export type ProcessErd$acceptedІnputFileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ProcessErd.resultFile
   */
  export type ProcessErd$resultFileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ProcessErd without action
   */
  export type ProcessErdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessErd
     */
    select?: ProcessErdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessErd
     */
    omit?: ProcessErdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessErdInclude<ExtArgs> | null
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
    createdAt: 'createdAt',
    finishedAt: 'finishedAt'
  };

  export type ProcessScalarFieldEnum = (typeof ProcessScalarFieldEnum)[keyof typeof ProcessScalarFieldEnum]


  export const ProcessHstsMvsScalarFieldEnum: {
    processId: 'processId',
    driverLicenseFileId: 'driverLicenseFileId',
    carInfoFileId: 'carInfoFileId',
    resultFileId: 'resultFileId',
    isAi: 'isAi',
    stage: 'stage',
    errorMessage: 'errorMessage'
  };

  export type ProcessHstsMvsScalarFieldEnum = (typeof ProcessHstsMvsScalarFieldEnum)[keyof typeof ProcessHstsMvsScalarFieldEnum]


  export const ProcessDmsuScalarFieldEnum: {
    processId: 'processId',
    personInfoFileId: 'personInfoFileId',
    resultFileId: 'resultFileId',
    withoutWMFileId: 'withoutWMFileId',
    isAi: 'isAi',
    stage: 'stage',
    errorMessage: 'errorMessage'
  };

  export type ProcessDmsuScalarFieldEnum = (typeof ProcessDmsuScalarFieldEnum)[keyof typeof ProcessDmsuScalarFieldEnum]


  export const ProcessPfuScalarFieldEnum: {
    processId: 'processId',
    inputFileId: 'inputFileId',
    resultFileId: 'resultFileId',
    isAi: 'isAi',
    stage: 'stage',
    errorMessage: 'errorMessage'
  };

  export type ProcessPfuScalarFieldEnum = (typeof ProcessPfuScalarFieldEnum)[keyof typeof ProcessPfuScalarFieldEnum]


  export const ProcessErdScalarFieldEnum: {
    processId: 'processId',
    grantedІnputFileId: 'grantedІnputFileId',
    acceptedІnputFileId: 'acceptedІnputFileId',
    resultFileId: 'resultFileId',
    isAi: 'isAi',
    stage: 'stage',
    errorMessage: 'errorMessage'
  };

  export type ProcessErdScalarFieldEnum = (typeof ProcessErdScalarFieldEnum)[keyof typeof ProcessErdScalarFieldEnum]


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
   * Reference to a field of type 'DmsuStage'
   */
  export type EnumDmsuStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DmsuStage'>
    


  /**
   * Reference to a field of type 'DmsuStage[]'
   */
  export type ListEnumDmsuStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DmsuStage[]'>
    


  /**
   * Reference to a field of type 'PfuStage'
   */
  export type EnumPfuStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PfuStage'>
    


  /**
   * Reference to a field of type 'PfuStage[]'
   */
  export type ListEnumPfuStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PfuStage[]'>
    


  /**
   * Reference to a field of type 'ErdStage'
   */
  export type EnumErdStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ErdStage'>
    


  /**
   * Reference to a field of type 'ErdStage[]'
   */
  export type ListEnumErdStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ErdStage[]'>
    


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
    resultProcessesHstsMvs?: ProcessHstsMvsListRelationFilter
    personInfoProcesses?: ProcessDmsuListRelationFilter
    resultProcessesDmsu?: ProcessDmsuListRelationFilter
    withoutWMProcesses?: ProcessDmsuListRelationFilter
    inputFilePfu?: ProcessPfuListRelationFilter
    resultFilePfu?: ProcessPfuListRelationFilter
    grantedІnputFileErd?: ProcessErdListRelationFilter
    acceptedІnputFileErd?: ProcessErdListRelationFilter
    resultFileErd?: ProcessErdListRelationFilter
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
    resultProcessesHstsMvs?: ProcessHstsMvsOrderByRelationAggregateInput
    personInfoProcesses?: ProcessDmsuOrderByRelationAggregateInput
    resultProcessesDmsu?: ProcessDmsuOrderByRelationAggregateInput
    withoutWMProcesses?: ProcessDmsuOrderByRelationAggregateInput
    inputFilePfu?: ProcessPfuOrderByRelationAggregateInput
    resultFilePfu?: ProcessPfuOrderByRelationAggregateInput
    grantedІnputFileErd?: ProcessErdOrderByRelationAggregateInput
    acceptedІnputFileErd?: ProcessErdOrderByRelationAggregateInput
    resultFileErd?: ProcessErdOrderByRelationAggregateInput
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
    resultProcessesHstsMvs?: ProcessHstsMvsListRelationFilter
    personInfoProcesses?: ProcessDmsuListRelationFilter
    resultProcessesDmsu?: ProcessDmsuListRelationFilter
    withoutWMProcesses?: ProcessDmsuListRelationFilter
    inputFilePfu?: ProcessPfuListRelationFilter
    resultFilePfu?: ProcessPfuListRelationFilter
    grantedІnputFileErd?: ProcessErdListRelationFilter
    acceptedІnputFileErd?: ProcessErdListRelationFilter
    resultFileErd?: ProcessErdListRelationFilter
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
    finishedAt?: DateTimeNullableFilter<"Process"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    hstsMvs?: XOR<ProcessHstsMvsNullableScalarRelationFilter, ProcessHstsMvsWhereInput> | null
    dmsu?: XOR<ProcessDmsuNullableScalarRelationFilter, ProcessDmsuWhereInput> | null
    pfu?: XOR<ProcessPfuNullableScalarRelationFilter, ProcessPfuWhereInput> | null
    erd?: XOR<ProcessErdNullableScalarRelationFilter, ProcessErdWhereInput> | null
  }

  export type ProcessOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    owner?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    hstsMvs?: ProcessHstsMvsOrderByWithRelationInput
    dmsu?: ProcessDmsuOrderByWithRelationInput
    pfu?: ProcessPfuOrderByWithRelationInput
    erd?: ProcessErdOrderByWithRelationInput
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
    finishedAt?: DateTimeNullableFilter<"Process"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    hstsMvs?: XOR<ProcessHstsMvsNullableScalarRelationFilter, ProcessHstsMvsWhereInput> | null
    dmsu?: XOR<ProcessDmsuNullableScalarRelationFilter, ProcessDmsuWhereInput> | null
    pfu?: XOR<ProcessPfuNullableScalarRelationFilter, ProcessPfuWhereInput> | null
    erd?: XOR<ProcessErdNullableScalarRelationFilter, ProcessErdWhereInput> | null
  }, "id">

  export type ProcessOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    owner?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
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
    finishedAt?: DateTimeNullableWithAggregatesFilter<"Process"> | Date | string | null
  }

  export type ProcessHstsMvsWhereInput = {
    AND?: ProcessHstsMvsWhereInput | ProcessHstsMvsWhereInput[]
    OR?: ProcessHstsMvsWhereInput[]
    NOT?: ProcessHstsMvsWhereInput | ProcessHstsMvsWhereInput[]
    processId?: StringFilter<"ProcessHstsMvs"> | string
    driverLicenseFileId?: StringNullableFilter<"ProcessHstsMvs"> | string | null
    carInfoFileId?: StringFilter<"ProcessHstsMvs"> | string
    resultFileId?: StringNullableFilter<"ProcessHstsMvs"> | string | null
    isAi?: BoolFilter<"ProcessHstsMvs"> | boolean
    stage?: EnumHstsMvsStageFilter<"ProcessHstsMvs"> | $Enums.HstsMvsStage
    errorMessage?: StringNullableFilter<"ProcessHstsMvs"> | string | null
    process?: XOR<ProcessScalarRelationFilter, ProcessWhereInput>
    driverLicenseFile?: XOR<StorageFileNullableScalarRelationFilter, StorageFileWhereInput> | null
    carInfoFile?: XOR<StorageFileScalarRelationFilter, StorageFileWhereInput>
    resultFile?: XOR<StorageFileNullableScalarRelationFilter, StorageFileWhereInput> | null
  }

  export type ProcessHstsMvsOrderByWithRelationInput = {
    processId?: SortOrder
    driverLicenseFileId?: SortOrderInput | SortOrder
    carInfoFileId?: SortOrder
    resultFileId?: SortOrderInput | SortOrder
    isAi?: SortOrder
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
    driverLicenseFileId?: StringNullableFilter<"ProcessHstsMvs"> | string | null
    carInfoFileId?: StringFilter<"ProcessHstsMvs"> | string
    resultFileId?: StringNullableFilter<"ProcessHstsMvs"> | string | null
    isAi?: BoolFilter<"ProcessHstsMvs"> | boolean
    stage?: EnumHstsMvsStageFilter<"ProcessHstsMvs"> | $Enums.HstsMvsStage
    errorMessage?: StringNullableFilter<"ProcessHstsMvs"> | string | null
    process?: XOR<ProcessScalarRelationFilter, ProcessWhereInput>
    driverLicenseFile?: XOR<StorageFileNullableScalarRelationFilter, StorageFileWhereInput> | null
    carInfoFile?: XOR<StorageFileScalarRelationFilter, StorageFileWhereInput>
    resultFile?: XOR<StorageFileNullableScalarRelationFilter, StorageFileWhereInput> | null
  }, "processId">

  export type ProcessHstsMvsOrderByWithAggregationInput = {
    processId?: SortOrder
    driverLicenseFileId?: SortOrderInput | SortOrder
    carInfoFileId?: SortOrder
    resultFileId?: SortOrderInput | SortOrder
    isAi?: SortOrder
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
    driverLicenseFileId?: StringNullableWithAggregatesFilter<"ProcessHstsMvs"> | string | null
    carInfoFileId?: StringWithAggregatesFilter<"ProcessHstsMvs"> | string
    resultFileId?: StringNullableWithAggregatesFilter<"ProcessHstsMvs"> | string | null
    isAi?: BoolWithAggregatesFilter<"ProcessHstsMvs"> | boolean
    stage?: EnumHstsMvsStageWithAggregatesFilter<"ProcessHstsMvs"> | $Enums.HstsMvsStage
    errorMessage?: StringNullableWithAggregatesFilter<"ProcessHstsMvs"> | string | null
  }

  export type ProcessDmsuWhereInput = {
    AND?: ProcessDmsuWhereInput | ProcessDmsuWhereInput[]
    OR?: ProcessDmsuWhereInput[]
    NOT?: ProcessDmsuWhereInput | ProcessDmsuWhereInput[]
    processId?: StringFilter<"ProcessDmsu"> | string
    personInfoFileId?: StringFilter<"ProcessDmsu"> | string
    resultFileId?: StringNullableFilter<"ProcessDmsu"> | string | null
    withoutWMFileId?: StringNullableFilter<"ProcessDmsu"> | string | null
    isAi?: BoolFilter<"ProcessDmsu"> | boolean
    stage?: EnumDmsuStageFilter<"ProcessDmsu"> | $Enums.DmsuStage
    errorMessage?: StringNullableFilter<"ProcessDmsu"> | string | null
    process?: XOR<ProcessScalarRelationFilter, ProcessWhereInput>
    personInfoFile?: XOR<StorageFileScalarRelationFilter, StorageFileWhereInput>
    resultFile?: XOR<StorageFileNullableScalarRelationFilter, StorageFileWhereInput> | null
    withoutWMFile?: XOR<StorageFileNullableScalarRelationFilter, StorageFileWhereInput> | null
  }

  export type ProcessDmsuOrderByWithRelationInput = {
    processId?: SortOrder
    personInfoFileId?: SortOrder
    resultFileId?: SortOrderInput | SortOrder
    withoutWMFileId?: SortOrderInput | SortOrder
    isAi?: SortOrder
    stage?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    process?: ProcessOrderByWithRelationInput
    personInfoFile?: StorageFileOrderByWithRelationInput
    resultFile?: StorageFileOrderByWithRelationInput
    withoutWMFile?: StorageFileOrderByWithRelationInput
  }

  export type ProcessDmsuWhereUniqueInput = Prisma.AtLeast<{
    processId?: string
    AND?: ProcessDmsuWhereInput | ProcessDmsuWhereInput[]
    OR?: ProcessDmsuWhereInput[]
    NOT?: ProcessDmsuWhereInput | ProcessDmsuWhereInput[]
    personInfoFileId?: StringFilter<"ProcessDmsu"> | string
    resultFileId?: StringNullableFilter<"ProcessDmsu"> | string | null
    withoutWMFileId?: StringNullableFilter<"ProcessDmsu"> | string | null
    isAi?: BoolFilter<"ProcessDmsu"> | boolean
    stage?: EnumDmsuStageFilter<"ProcessDmsu"> | $Enums.DmsuStage
    errorMessage?: StringNullableFilter<"ProcessDmsu"> | string | null
    process?: XOR<ProcessScalarRelationFilter, ProcessWhereInput>
    personInfoFile?: XOR<StorageFileScalarRelationFilter, StorageFileWhereInput>
    resultFile?: XOR<StorageFileNullableScalarRelationFilter, StorageFileWhereInput> | null
    withoutWMFile?: XOR<StorageFileNullableScalarRelationFilter, StorageFileWhereInput> | null
  }, "processId">

  export type ProcessDmsuOrderByWithAggregationInput = {
    processId?: SortOrder
    personInfoFileId?: SortOrder
    resultFileId?: SortOrderInput | SortOrder
    withoutWMFileId?: SortOrderInput | SortOrder
    isAi?: SortOrder
    stage?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    _count?: ProcessDmsuCountOrderByAggregateInput
    _max?: ProcessDmsuMaxOrderByAggregateInput
    _min?: ProcessDmsuMinOrderByAggregateInput
  }

  export type ProcessDmsuScalarWhereWithAggregatesInput = {
    AND?: ProcessDmsuScalarWhereWithAggregatesInput | ProcessDmsuScalarWhereWithAggregatesInput[]
    OR?: ProcessDmsuScalarWhereWithAggregatesInput[]
    NOT?: ProcessDmsuScalarWhereWithAggregatesInput | ProcessDmsuScalarWhereWithAggregatesInput[]
    processId?: StringWithAggregatesFilter<"ProcessDmsu"> | string
    personInfoFileId?: StringWithAggregatesFilter<"ProcessDmsu"> | string
    resultFileId?: StringNullableWithAggregatesFilter<"ProcessDmsu"> | string | null
    withoutWMFileId?: StringNullableWithAggregatesFilter<"ProcessDmsu"> | string | null
    isAi?: BoolWithAggregatesFilter<"ProcessDmsu"> | boolean
    stage?: EnumDmsuStageWithAggregatesFilter<"ProcessDmsu"> | $Enums.DmsuStage
    errorMessage?: StringNullableWithAggregatesFilter<"ProcessDmsu"> | string | null
  }

  export type ProcessPfuWhereInput = {
    AND?: ProcessPfuWhereInput | ProcessPfuWhereInput[]
    OR?: ProcessPfuWhereInput[]
    NOT?: ProcessPfuWhereInput | ProcessPfuWhereInput[]
    processId?: StringFilter<"ProcessPfu"> | string
    inputFileId?: StringFilter<"ProcessPfu"> | string
    resultFileId?: StringNullableFilter<"ProcessPfu"> | string | null
    isAi?: BoolFilter<"ProcessPfu"> | boolean
    stage?: EnumPfuStageFilter<"ProcessPfu"> | $Enums.PfuStage
    errorMessage?: StringNullableFilter<"ProcessPfu"> | string | null
    process?: XOR<ProcessScalarRelationFilter, ProcessWhereInput>
    inputFile?: XOR<StorageFileScalarRelationFilter, StorageFileWhereInput>
    resultFile?: XOR<StorageFileNullableScalarRelationFilter, StorageFileWhereInput> | null
  }

  export type ProcessPfuOrderByWithRelationInput = {
    processId?: SortOrder
    inputFileId?: SortOrder
    resultFileId?: SortOrderInput | SortOrder
    isAi?: SortOrder
    stage?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    process?: ProcessOrderByWithRelationInput
    inputFile?: StorageFileOrderByWithRelationInput
    resultFile?: StorageFileOrderByWithRelationInput
  }

  export type ProcessPfuWhereUniqueInput = Prisma.AtLeast<{
    processId?: string
    AND?: ProcessPfuWhereInput | ProcessPfuWhereInput[]
    OR?: ProcessPfuWhereInput[]
    NOT?: ProcessPfuWhereInput | ProcessPfuWhereInput[]
    inputFileId?: StringFilter<"ProcessPfu"> | string
    resultFileId?: StringNullableFilter<"ProcessPfu"> | string | null
    isAi?: BoolFilter<"ProcessPfu"> | boolean
    stage?: EnumPfuStageFilter<"ProcessPfu"> | $Enums.PfuStage
    errorMessage?: StringNullableFilter<"ProcessPfu"> | string | null
    process?: XOR<ProcessScalarRelationFilter, ProcessWhereInput>
    inputFile?: XOR<StorageFileScalarRelationFilter, StorageFileWhereInput>
    resultFile?: XOR<StorageFileNullableScalarRelationFilter, StorageFileWhereInput> | null
  }, "processId">

  export type ProcessPfuOrderByWithAggregationInput = {
    processId?: SortOrder
    inputFileId?: SortOrder
    resultFileId?: SortOrderInput | SortOrder
    isAi?: SortOrder
    stage?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    _count?: ProcessPfuCountOrderByAggregateInput
    _max?: ProcessPfuMaxOrderByAggregateInput
    _min?: ProcessPfuMinOrderByAggregateInput
  }

  export type ProcessPfuScalarWhereWithAggregatesInput = {
    AND?: ProcessPfuScalarWhereWithAggregatesInput | ProcessPfuScalarWhereWithAggregatesInput[]
    OR?: ProcessPfuScalarWhereWithAggregatesInput[]
    NOT?: ProcessPfuScalarWhereWithAggregatesInput | ProcessPfuScalarWhereWithAggregatesInput[]
    processId?: StringWithAggregatesFilter<"ProcessPfu"> | string
    inputFileId?: StringWithAggregatesFilter<"ProcessPfu"> | string
    resultFileId?: StringNullableWithAggregatesFilter<"ProcessPfu"> | string | null
    isAi?: BoolWithAggregatesFilter<"ProcessPfu"> | boolean
    stage?: EnumPfuStageWithAggregatesFilter<"ProcessPfu"> | $Enums.PfuStage
    errorMessage?: StringNullableWithAggregatesFilter<"ProcessPfu"> | string | null
  }

  export type ProcessErdWhereInput = {
    AND?: ProcessErdWhereInput | ProcessErdWhereInput[]
    OR?: ProcessErdWhereInput[]
    NOT?: ProcessErdWhereInput | ProcessErdWhereInput[]
    processId?: StringFilter<"ProcessErd"> | string
    grantedІnputFileId?: StringNullableFilter<"ProcessErd"> | string | null
    acceptedІnputFileId?: StringNullableFilter<"ProcessErd"> | string | null
    resultFileId?: StringNullableFilter<"ProcessErd"> | string | null
    isAi?: BoolFilter<"ProcessErd"> | boolean
    stage?: EnumErdStageFilter<"ProcessErd"> | $Enums.ErdStage
    errorMessage?: StringNullableFilter<"ProcessErd"> | string | null
    process?: XOR<ProcessScalarRelationFilter, ProcessWhereInput>
    grantedІnputFile?: XOR<StorageFileNullableScalarRelationFilter, StorageFileWhereInput> | null
    acceptedІnputFile?: XOR<StorageFileNullableScalarRelationFilter, StorageFileWhereInput> | null
    resultFile?: XOR<StorageFileNullableScalarRelationFilter, StorageFileWhereInput> | null
  }

  export type ProcessErdOrderByWithRelationInput = {
    processId?: SortOrder
    grantedІnputFileId?: SortOrderInput | SortOrder
    acceptedІnputFileId?: SortOrderInput | SortOrder
    resultFileId?: SortOrderInput | SortOrder
    isAi?: SortOrder
    stage?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    process?: ProcessOrderByWithRelationInput
    grantedІnputFile?: StorageFileOrderByWithRelationInput
    acceptedІnputFile?: StorageFileOrderByWithRelationInput
    resultFile?: StorageFileOrderByWithRelationInput
  }

  export type ProcessErdWhereUniqueInput = Prisma.AtLeast<{
    processId?: string
    AND?: ProcessErdWhereInput | ProcessErdWhereInput[]
    OR?: ProcessErdWhereInput[]
    NOT?: ProcessErdWhereInput | ProcessErdWhereInput[]
    grantedІnputFileId?: StringNullableFilter<"ProcessErd"> | string | null
    acceptedІnputFileId?: StringNullableFilter<"ProcessErd"> | string | null
    resultFileId?: StringNullableFilter<"ProcessErd"> | string | null
    isAi?: BoolFilter<"ProcessErd"> | boolean
    stage?: EnumErdStageFilter<"ProcessErd"> | $Enums.ErdStage
    errorMessage?: StringNullableFilter<"ProcessErd"> | string | null
    process?: XOR<ProcessScalarRelationFilter, ProcessWhereInput>
    grantedІnputFile?: XOR<StorageFileNullableScalarRelationFilter, StorageFileWhereInput> | null
    acceptedІnputFile?: XOR<StorageFileNullableScalarRelationFilter, StorageFileWhereInput> | null
    resultFile?: XOR<StorageFileNullableScalarRelationFilter, StorageFileWhereInput> | null
  }, "processId">

  export type ProcessErdOrderByWithAggregationInput = {
    processId?: SortOrder
    grantedІnputFileId?: SortOrderInput | SortOrder
    acceptedІnputFileId?: SortOrderInput | SortOrder
    resultFileId?: SortOrderInput | SortOrder
    isAi?: SortOrder
    stage?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    _count?: ProcessErdCountOrderByAggregateInput
    _max?: ProcessErdMaxOrderByAggregateInput
    _min?: ProcessErdMinOrderByAggregateInput
  }

  export type ProcessErdScalarWhereWithAggregatesInput = {
    AND?: ProcessErdScalarWhereWithAggregatesInput | ProcessErdScalarWhereWithAggregatesInput[]
    OR?: ProcessErdScalarWhereWithAggregatesInput[]
    NOT?: ProcessErdScalarWhereWithAggregatesInput | ProcessErdScalarWhereWithAggregatesInput[]
    processId?: StringWithAggregatesFilter<"ProcessErd"> | string
    grantedІnputFileId?: StringNullableWithAggregatesFilter<"ProcessErd"> | string | null
    acceptedІnputFileId?: StringNullableWithAggregatesFilter<"ProcessErd"> | string | null
    resultFileId?: StringNullableWithAggregatesFilter<"ProcessErd"> | string | null
    isAi?: BoolWithAggregatesFilter<"ProcessErd"> | boolean
    stage?: EnumErdStageWithAggregatesFilter<"ProcessErd"> | $Enums.ErdStage
    errorMessage?: StringNullableWithAggregatesFilter<"ProcessErd"> | string | null
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
    resultProcessesHstsMvs?: ProcessHstsMvsCreateNestedManyWithoutResultFileInput
    personInfoProcesses?: ProcessDmsuCreateNestedManyWithoutPersonInfoFileInput
    resultProcessesDmsu?: ProcessDmsuCreateNestedManyWithoutResultFileInput
    withoutWMProcesses?: ProcessDmsuCreateNestedManyWithoutWithoutWMFileInput
    inputFilePfu?: ProcessPfuCreateNestedManyWithoutInputFileInput
    resultFilePfu?: ProcessPfuCreateNestedManyWithoutResultFileInput
    grantedІnputFileErd?: ProcessErdCreateNestedManyWithoutGrantedІnputFileInput
    acceptedІnputFileErd?: ProcessErdCreateNestedManyWithoutAcceptedІnputFileInput
    resultFileErd?: ProcessErdCreateNestedManyWithoutResultFileInput
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
    resultProcessesHstsMvs?: ProcessHstsMvsUncheckedCreateNestedManyWithoutResultFileInput
    personInfoProcesses?: ProcessDmsuUncheckedCreateNestedManyWithoutPersonInfoFileInput
    resultProcessesDmsu?: ProcessDmsuUncheckedCreateNestedManyWithoutResultFileInput
    withoutWMProcesses?: ProcessDmsuUncheckedCreateNestedManyWithoutWithoutWMFileInput
    inputFilePfu?: ProcessPfuUncheckedCreateNestedManyWithoutInputFileInput
    resultFilePfu?: ProcessPfuUncheckedCreateNestedManyWithoutResultFileInput
    grantedІnputFileErd?: ProcessErdUncheckedCreateNestedManyWithoutGrantedІnputFileInput
    acceptedІnputFileErd?: ProcessErdUncheckedCreateNestedManyWithoutAcceptedІnputFileInput
    resultFileErd?: ProcessErdUncheckedCreateNestedManyWithoutResultFileInput
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
    resultProcessesHstsMvs?: ProcessHstsMvsUpdateManyWithoutResultFileNestedInput
    personInfoProcesses?: ProcessDmsuUpdateManyWithoutPersonInfoFileNestedInput
    resultProcessesDmsu?: ProcessDmsuUpdateManyWithoutResultFileNestedInput
    withoutWMProcesses?: ProcessDmsuUpdateManyWithoutWithoutWMFileNestedInput
    inputFilePfu?: ProcessPfuUpdateManyWithoutInputFileNestedInput
    resultFilePfu?: ProcessPfuUpdateManyWithoutResultFileNestedInput
    grantedІnputFileErd?: ProcessErdUpdateManyWithoutGrantedІnputFileNestedInput
    acceptedІnputFileErd?: ProcessErdUpdateManyWithoutAcceptedІnputFileNestedInput
    resultFileErd?: ProcessErdUpdateManyWithoutResultFileNestedInput
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
    resultProcessesHstsMvs?: ProcessHstsMvsUncheckedUpdateManyWithoutResultFileNestedInput
    personInfoProcesses?: ProcessDmsuUncheckedUpdateManyWithoutPersonInfoFileNestedInput
    resultProcessesDmsu?: ProcessDmsuUncheckedUpdateManyWithoutResultFileNestedInput
    withoutWMProcesses?: ProcessDmsuUncheckedUpdateManyWithoutWithoutWMFileNestedInput
    inputFilePfu?: ProcessPfuUncheckedUpdateManyWithoutInputFileNestedInput
    resultFilePfu?: ProcessPfuUncheckedUpdateManyWithoutResultFileNestedInput
    grantedІnputFileErd?: ProcessErdUncheckedUpdateManyWithoutGrantedІnputFileNestedInput
    acceptedІnputFileErd?: ProcessErdUncheckedUpdateManyWithoutAcceptedІnputFileNestedInput
    resultFileErd?: ProcessErdUncheckedUpdateManyWithoutResultFileNestedInput
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
    finishedAt?: Date | string | null
    user: UserCreateNestedOneWithoutProcessesInput
    hstsMvs?: ProcessHstsMvsCreateNestedOneWithoutProcessInput
    dmsu?: ProcessDmsuCreateNestedOneWithoutProcessInput
    pfu?: ProcessPfuCreateNestedOneWithoutProcessInput
    erd?: ProcessErdCreateNestedOneWithoutProcessInput
  }

  export type ProcessUncheckedCreateInput = {
    id?: string
    status?: $Enums.Status
    userId: string
    owner?: string | null
    type: $Enums.ProcessType
    createdAt?: Date | string
    finishedAt?: Date | string | null
    hstsMvs?: ProcessHstsMvsUncheckedCreateNestedOneWithoutProcessInput
    dmsu?: ProcessDmsuUncheckedCreateNestedOneWithoutProcessInput
    pfu?: ProcessPfuUncheckedCreateNestedOneWithoutProcessInput
    erd?: ProcessErdUncheckedCreateNestedOneWithoutProcessInput
  }

  export type ProcessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutProcessesNestedInput
    hstsMvs?: ProcessHstsMvsUpdateOneWithoutProcessNestedInput
    dmsu?: ProcessDmsuUpdateOneWithoutProcessNestedInput
    pfu?: ProcessPfuUpdateOneWithoutProcessNestedInput
    erd?: ProcessErdUpdateOneWithoutProcessNestedInput
  }

  export type ProcessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hstsMvs?: ProcessHstsMvsUncheckedUpdateOneWithoutProcessNestedInput
    dmsu?: ProcessDmsuUncheckedUpdateOneWithoutProcessNestedInput
    pfu?: ProcessPfuUncheckedUpdateOneWithoutProcessNestedInput
    erd?: ProcessErdUncheckedUpdateOneWithoutProcessNestedInput
  }

  export type ProcessCreateManyInput = {
    id?: string
    status?: $Enums.Status
    userId: string
    owner?: string | null
    type: $Enums.ProcessType
    createdAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type ProcessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProcessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProcessHstsMvsCreateInput = {
    isAi?: boolean
    stage?: $Enums.HstsMvsStage
    errorMessage?: string | null
    process: ProcessCreateNestedOneWithoutHstsMvsInput
    driverLicenseFile?: StorageFileCreateNestedOneWithoutDriverLicenseProcessesInput
    carInfoFile: StorageFileCreateNestedOneWithoutCarInfoProcessesInput
    resultFile?: StorageFileCreateNestedOneWithoutResultProcessesHstsMvsInput
  }

  export type ProcessHstsMvsUncheckedCreateInput = {
    processId: string
    driverLicenseFileId?: string | null
    carInfoFileId: string
    resultFileId?: string | null
    isAi?: boolean
    stage?: $Enums.HstsMvsStage
    errorMessage?: string | null
  }

  export type ProcessHstsMvsUpdateInput = {
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    process?: ProcessUpdateOneRequiredWithoutHstsMvsNestedInput
    driverLicenseFile?: StorageFileUpdateOneWithoutDriverLicenseProcessesNestedInput
    carInfoFile?: StorageFileUpdateOneRequiredWithoutCarInfoProcessesNestedInput
    resultFile?: StorageFileUpdateOneWithoutResultProcessesHstsMvsNestedInput
  }

  export type ProcessHstsMvsUncheckedUpdateInput = {
    processId?: StringFieldUpdateOperationsInput | string
    driverLicenseFileId?: NullableStringFieldUpdateOperationsInput | string | null
    carInfoFileId?: StringFieldUpdateOperationsInput | string
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessHstsMvsCreateManyInput = {
    processId: string
    driverLicenseFileId?: string | null
    carInfoFileId: string
    resultFileId?: string | null
    isAi?: boolean
    stage?: $Enums.HstsMvsStage
    errorMessage?: string | null
  }

  export type ProcessHstsMvsUpdateManyMutationInput = {
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessHstsMvsUncheckedUpdateManyInput = {
    processId?: StringFieldUpdateOperationsInput | string
    driverLicenseFileId?: NullableStringFieldUpdateOperationsInput | string | null
    carInfoFileId?: StringFieldUpdateOperationsInput | string
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessDmsuCreateInput = {
    isAi?: boolean
    stage?: $Enums.DmsuStage
    errorMessage?: string | null
    process: ProcessCreateNestedOneWithoutDmsuInput
    personInfoFile: StorageFileCreateNestedOneWithoutPersonInfoProcessesInput
    resultFile?: StorageFileCreateNestedOneWithoutResultProcessesDmsuInput
    withoutWMFile?: StorageFileCreateNestedOneWithoutWithoutWMProcessesInput
  }

  export type ProcessDmsuUncheckedCreateInput = {
    processId: string
    personInfoFileId: string
    resultFileId?: string | null
    withoutWMFileId?: string | null
    isAi?: boolean
    stage?: $Enums.DmsuStage
    errorMessage?: string | null
  }

  export type ProcessDmsuUpdateInput = {
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumDmsuStageFieldUpdateOperationsInput | $Enums.DmsuStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    process?: ProcessUpdateOneRequiredWithoutDmsuNestedInput
    personInfoFile?: StorageFileUpdateOneRequiredWithoutPersonInfoProcessesNestedInput
    resultFile?: StorageFileUpdateOneWithoutResultProcessesDmsuNestedInput
    withoutWMFile?: StorageFileUpdateOneWithoutWithoutWMProcessesNestedInput
  }

  export type ProcessDmsuUncheckedUpdateInput = {
    processId?: StringFieldUpdateOperationsInput | string
    personInfoFileId?: StringFieldUpdateOperationsInput | string
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    withoutWMFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumDmsuStageFieldUpdateOperationsInput | $Enums.DmsuStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessDmsuCreateManyInput = {
    processId: string
    personInfoFileId: string
    resultFileId?: string | null
    withoutWMFileId?: string | null
    isAi?: boolean
    stage?: $Enums.DmsuStage
    errorMessage?: string | null
  }

  export type ProcessDmsuUpdateManyMutationInput = {
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumDmsuStageFieldUpdateOperationsInput | $Enums.DmsuStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessDmsuUncheckedUpdateManyInput = {
    processId?: StringFieldUpdateOperationsInput | string
    personInfoFileId?: StringFieldUpdateOperationsInput | string
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    withoutWMFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumDmsuStageFieldUpdateOperationsInput | $Enums.DmsuStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessPfuCreateInput = {
    isAi?: boolean
    stage?: $Enums.PfuStage
    errorMessage?: string | null
    process: ProcessCreateNestedOneWithoutPfuInput
    inputFile: StorageFileCreateNestedOneWithoutInputFilePfuInput
    resultFile?: StorageFileCreateNestedOneWithoutResultFilePfuInput
  }

  export type ProcessPfuUncheckedCreateInput = {
    processId: string
    inputFileId: string
    resultFileId?: string | null
    isAi?: boolean
    stage?: $Enums.PfuStage
    errorMessage?: string | null
  }

  export type ProcessPfuUpdateInput = {
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumPfuStageFieldUpdateOperationsInput | $Enums.PfuStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    process?: ProcessUpdateOneRequiredWithoutPfuNestedInput
    inputFile?: StorageFileUpdateOneRequiredWithoutInputFilePfuNestedInput
    resultFile?: StorageFileUpdateOneWithoutResultFilePfuNestedInput
  }

  export type ProcessPfuUncheckedUpdateInput = {
    processId?: StringFieldUpdateOperationsInput | string
    inputFileId?: StringFieldUpdateOperationsInput | string
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumPfuStageFieldUpdateOperationsInput | $Enums.PfuStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessPfuCreateManyInput = {
    processId: string
    inputFileId: string
    resultFileId?: string | null
    isAi?: boolean
    stage?: $Enums.PfuStage
    errorMessage?: string | null
  }

  export type ProcessPfuUpdateManyMutationInput = {
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumPfuStageFieldUpdateOperationsInput | $Enums.PfuStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessPfuUncheckedUpdateManyInput = {
    processId?: StringFieldUpdateOperationsInput | string
    inputFileId?: StringFieldUpdateOperationsInput | string
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumPfuStageFieldUpdateOperationsInput | $Enums.PfuStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessErdCreateInput = {
    isAi?: boolean
    stage?: $Enums.ErdStage
    errorMessage?: string | null
    process: ProcessCreateNestedOneWithoutErdInput
    grantedІnputFile?: StorageFileCreateNestedOneWithoutGrantedІnputFileErdInput
    acceptedІnputFile?: StorageFileCreateNestedOneWithoutAcceptedІnputFileErdInput
    resultFile?: StorageFileCreateNestedOneWithoutResultFileErdInput
  }

  export type ProcessErdUncheckedCreateInput = {
    processId: string
    grantedІnputFileId?: string | null
    acceptedІnputFileId?: string | null
    resultFileId?: string | null
    isAi?: boolean
    stage?: $Enums.ErdStage
    errorMessage?: string | null
  }

  export type ProcessErdUpdateInput = {
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumErdStageFieldUpdateOperationsInput | $Enums.ErdStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    process?: ProcessUpdateOneRequiredWithoutErdNestedInput
    grantedІnputFile?: StorageFileUpdateOneWithoutGrantedІnputFileErdNestedInput
    acceptedІnputFile?: StorageFileUpdateOneWithoutAcceptedІnputFileErdNestedInput
    resultFile?: StorageFileUpdateOneWithoutResultFileErdNestedInput
  }

  export type ProcessErdUncheckedUpdateInput = {
    processId?: StringFieldUpdateOperationsInput | string
    grantedІnputFileId?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedІnputFileId?: NullableStringFieldUpdateOperationsInput | string | null
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumErdStageFieldUpdateOperationsInput | $Enums.ErdStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessErdCreateManyInput = {
    processId: string
    grantedІnputFileId?: string | null
    acceptedІnputFileId?: string | null
    resultFileId?: string | null
    isAi?: boolean
    stage?: $Enums.ErdStage
    errorMessage?: string | null
  }

  export type ProcessErdUpdateManyMutationInput = {
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumErdStageFieldUpdateOperationsInput | $Enums.ErdStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessErdUncheckedUpdateManyInput = {
    processId?: StringFieldUpdateOperationsInput | string
    grantedІnputFileId?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedІnputFileId?: NullableStringFieldUpdateOperationsInput | string | null
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumErdStageFieldUpdateOperationsInput | $Enums.ErdStage
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

  export type ProcessDmsuListRelationFilter = {
    every?: ProcessDmsuWhereInput
    some?: ProcessDmsuWhereInput
    none?: ProcessDmsuWhereInput
  }

  export type ProcessPfuListRelationFilter = {
    every?: ProcessPfuWhereInput
    some?: ProcessPfuWhereInput
    none?: ProcessPfuWhereInput
  }

  export type ProcessErdListRelationFilter = {
    every?: ProcessErdWhereInput
    some?: ProcessErdWhereInput
    none?: ProcessErdWhereInput
  }

  export type ProcessHstsMvsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProcessDmsuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProcessPfuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProcessErdOrderByRelationAggregateInput = {
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProcessHstsMvsNullableScalarRelationFilter = {
    is?: ProcessHstsMvsWhereInput | null
    isNot?: ProcessHstsMvsWhereInput | null
  }

  export type ProcessDmsuNullableScalarRelationFilter = {
    is?: ProcessDmsuWhereInput | null
    isNot?: ProcessDmsuWhereInput | null
  }

  export type ProcessPfuNullableScalarRelationFilter = {
    is?: ProcessPfuWhereInput | null
    isNot?: ProcessPfuWhereInput | null
  }

  export type ProcessErdNullableScalarRelationFilter = {
    is?: ProcessErdWhereInput | null
    isNot?: ProcessErdWhereInput | null
  }

  export type ProcessCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    owner?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type ProcessMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    owner?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type ProcessMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    owner?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    finishedAt?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type StorageFileNullableScalarRelationFilter = {
    is?: StorageFileWhereInput | null
    isNot?: StorageFileWhereInput | null
  }

  export type StorageFileScalarRelationFilter = {
    is?: StorageFileWhereInput
    isNot?: StorageFileWhereInput
  }

  export type ProcessHstsMvsCountOrderByAggregateInput = {
    processId?: SortOrder
    driverLicenseFileId?: SortOrder
    carInfoFileId?: SortOrder
    resultFileId?: SortOrder
    isAi?: SortOrder
    stage?: SortOrder
    errorMessage?: SortOrder
  }

  export type ProcessHstsMvsMaxOrderByAggregateInput = {
    processId?: SortOrder
    driverLicenseFileId?: SortOrder
    carInfoFileId?: SortOrder
    resultFileId?: SortOrder
    isAi?: SortOrder
    stage?: SortOrder
    errorMessage?: SortOrder
  }

  export type ProcessHstsMvsMinOrderByAggregateInput = {
    processId?: SortOrder
    driverLicenseFileId?: SortOrder
    carInfoFileId?: SortOrder
    resultFileId?: SortOrder
    isAi?: SortOrder
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

  export type EnumDmsuStageFilter<$PrismaModel = never> = {
    equals?: $Enums.DmsuStage | EnumDmsuStageFieldRefInput<$PrismaModel>
    in?: $Enums.DmsuStage[] | ListEnumDmsuStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.DmsuStage[] | ListEnumDmsuStageFieldRefInput<$PrismaModel>
    not?: NestedEnumDmsuStageFilter<$PrismaModel> | $Enums.DmsuStage
  }

  export type ProcessDmsuCountOrderByAggregateInput = {
    processId?: SortOrder
    personInfoFileId?: SortOrder
    resultFileId?: SortOrder
    withoutWMFileId?: SortOrder
    isAi?: SortOrder
    stage?: SortOrder
    errorMessage?: SortOrder
  }

  export type ProcessDmsuMaxOrderByAggregateInput = {
    processId?: SortOrder
    personInfoFileId?: SortOrder
    resultFileId?: SortOrder
    withoutWMFileId?: SortOrder
    isAi?: SortOrder
    stage?: SortOrder
    errorMessage?: SortOrder
  }

  export type ProcessDmsuMinOrderByAggregateInput = {
    processId?: SortOrder
    personInfoFileId?: SortOrder
    resultFileId?: SortOrder
    withoutWMFileId?: SortOrder
    isAi?: SortOrder
    stage?: SortOrder
    errorMessage?: SortOrder
  }

  export type EnumDmsuStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DmsuStage | EnumDmsuStageFieldRefInput<$PrismaModel>
    in?: $Enums.DmsuStage[] | ListEnumDmsuStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.DmsuStage[] | ListEnumDmsuStageFieldRefInput<$PrismaModel>
    not?: NestedEnumDmsuStageWithAggregatesFilter<$PrismaModel> | $Enums.DmsuStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDmsuStageFilter<$PrismaModel>
    _max?: NestedEnumDmsuStageFilter<$PrismaModel>
  }

  export type EnumPfuStageFilter<$PrismaModel = never> = {
    equals?: $Enums.PfuStage | EnumPfuStageFieldRefInput<$PrismaModel>
    in?: $Enums.PfuStage[] | ListEnumPfuStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.PfuStage[] | ListEnumPfuStageFieldRefInput<$PrismaModel>
    not?: NestedEnumPfuStageFilter<$PrismaModel> | $Enums.PfuStage
  }

  export type ProcessPfuCountOrderByAggregateInput = {
    processId?: SortOrder
    inputFileId?: SortOrder
    resultFileId?: SortOrder
    isAi?: SortOrder
    stage?: SortOrder
    errorMessage?: SortOrder
  }

  export type ProcessPfuMaxOrderByAggregateInput = {
    processId?: SortOrder
    inputFileId?: SortOrder
    resultFileId?: SortOrder
    isAi?: SortOrder
    stage?: SortOrder
    errorMessage?: SortOrder
  }

  export type ProcessPfuMinOrderByAggregateInput = {
    processId?: SortOrder
    inputFileId?: SortOrder
    resultFileId?: SortOrder
    isAi?: SortOrder
    stage?: SortOrder
    errorMessage?: SortOrder
  }

  export type EnumPfuStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PfuStage | EnumPfuStageFieldRefInput<$PrismaModel>
    in?: $Enums.PfuStage[] | ListEnumPfuStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.PfuStage[] | ListEnumPfuStageFieldRefInput<$PrismaModel>
    not?: NestedEnumPfuStageWithAggregatesFilter<$PrismaModel> | $Enums.PfuStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPfuStageFilter<$PrismaModel>
    _max?: NestedEnumPfuStageFilter<$PrismaModel>
  }

  export type EnumErdStageFilter<$PrismaModel = never> = {
    equals?: $Enums.ErdStage | EnumErdStageFieldRefInput<$PrismaModel>
    in?: $Enums.ErdStage[] | ListEnumErdStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.ErdStage[] | ListEnumErdStageFieldRefInput<$PrismaModel>
    not?: NestedEnumErdStageFilter<$PrismaModel> | $Enums.ErdStage
  }

  export type ProcessErdCountOrderByAggregateInput = {
    processId?: SortOrder
    grantedІnputFileId?: SortOrder
    acceptedІnputFileId?: SortOrder
    resultFileId?: SortOrder
    isAi?: SortOrder
    stage?: SortOrder
    errorMessage?: SortOrder
  }

  export type ProcessErdMaxOrderByAggregateInput = {
    processId?: SortOrder
    grantedІnputFileId?: SortOrder
    acceptedІnputFileId?: SortOrder
    resultFileId?: SortOrder
    isAi?: SortOrder
    stage?: SortOrder
    errorMessage?: SortOrder
  }

  export type ProcessErdMinOrderByAggregateInput = {
    processId?: SortOrder
    grantedІnputFileId?: SortOrder
    acceptedІnputFileId?: SortOrder
    resultFileId?: SortOrder
    isAi?: SortOrder
    stage?: SortOrder
    errorMessage?: SortOrder
  }

  export type EnumErdStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ErdStage | EnumErdStageFieldRefInput<$PrismaModel>
    in?: $Enums.ErdStage[] | ListEnumErdStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.ErdStage[] | ListEnumErdStageFieldRefInput<$PrismaModel>
    not?: NestedEnumErdStageWithAggregatesFilter<$PrismaModel> | $Enums.ErdStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumErdStageFilter<$PrismaModel>
    _max?: NestedEnumErdStageFilter<$PrismaModel>
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

  export type ProcessDmsuCreateNestedManyWithoutPersonInfoFileInput = {
    create?: XOR<ProcessDmsuCreateWithoutPersonInfoFileInput, ProcessDmsuUncheckedCreateWithoutPersonInfoFileInput> | ProcessDmsuCreateWithoutPersonInfoFileInput[] | ProcessDmsuUncheckedCreateWithoutPersonInfoFileInput[]
    connectOrCreate?: ProcessDmsuCreateOrConnectWithoutPersonInfoFileInput | ProcessDmsuCreateOrConnectWithoutPersonInfoFileInput[]
    createMany?: ProcessDmsuCreateManyPersonInfoFileInputEnvelope
    connect?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
  }

  export type ProcessDmsuCreateNestedManyWithoutResultFileInput = {
    create?: XOR<ProcessDmsuCreateWithoutResultFileInput, ProcessDmsuUncheckedCreateWithoutResultFileInput> | ProcessDmsuCreateWithoutResultFileInput[] | ProcessDmsuUncheckedCreateWithoutResultFileInput[]
    connectOrCreate?: ProcessDmsuCreateOrConnectWithoutResultFileInput | ProcessDmsuCreateOrConnectWithoutResultFileInput[]
    createMany?: ProcessDmsuCreateManyResultFileInputEnvelope
    connect?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
  }

  export type ProcessDmsuCreateNestedManyWithoutWithoutWMFileInput = {
    create?: XOR<ProcessDmsuCreateWithoutWithoutWMFileInput, ProcessDmsuUncheckedCreateWithoutWithoutWMFileInput> | ProcessDmsuCreateWithoutWithoutWMFileInput[] | ProcessDmsuUncheckedCreateWithoutWithoutWMFileInput[]
    connectOrCreate?: ProcessDmsuCreateOrConnectWithoutWithoutWMFileInput | ProcessDmsuCreateOrConnectWithoutWithoutWMFileInput[]
    createMany?: ProcessDmsuCreateManyWithoutWMFileInputEnvelope
    connect?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
  }

  export type ProcessPfuCreateNestedManyWithoutInputFileInput = {
    create?: XOR<ProcessPfuCreateWithoutInputFileInput, ProcessPfuUncheckedCreateWithoutInputFileInput> | ProcessPfuCreateWithoutInputFileInput[] | ProcessPfuUncheckedCreateWithoutInputFileInput[]
    connectOrCreate?: ProcessPfuCreateOrConnectWithoutInputFileInput | ProcessPfuCreateOrConnectWithoutInputFileInput[]
    createMany?: ProcessPfuCreateManyInputFileInputEnvelope
    connect?: ProcessPfuWhereUniqueInput | ProcessPfuWhereUniqueInput[]
  }

  export type ProcessPfuCreateNestedManyWithoutResultFileInput = {
    create?: XOR<ProcessPfuCreateWithoutResultFileInput, ProcessPfuUncheckedCreateWithoutResultFileInput> | ProcessPfuCreateWithoutResultFileInput[] | ProcessPfuUncheckedCreateWithoutResultFileInput[]
    connectOrCreate?: ProcessPfuCreateOrConnectWithoutResultFileInput | ProcessPfuCreateOrConnectWithoutResultFileInput[]
    createMany?: ProcessPfuCreateManyResultFileInputEnvelope
    connect?: ProcessPfuWhereUniqueInput | ProcessPfuWhereUniqueInput[]
  }

  export type ProcessErdCreateNestedManyWithoutGrantedІnputFileInput = {
    create?: XOR<ProcessErdCreateWithoutGrantedІnputFileInput, ProcessErdUncheckedCreateWithoutGrantedІnputFileInput> | ProcessErdCreateWithoutGrantedІnputFileInput[] | ProcessErdUncheckedCreateWithoutGrantedІnputFileInput[]
    connectOrCreate?: ProcessErdCreateOrConnectWithoutGrantedІnputFileInput | ProcessErdCreateOrConnectWithoutGrantedІnputFileInput[]
    createMany?: ProcessErdCreateManyGrantedІnputFileInputEnvelope
    connect?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
  }

  export type ProcessErdCreateNestedManyWithoutAcceptedІnputFileInput = {
    create?: XOR<ProcessErdCreateWithoutAcceptedІnputFileInput, ProcessErdUncheckedCreateWithoutAcceptedІnputFileInput> | ProcessErdCreateWithoutAcceptedІnputFileInput[] | ProcessErdUncheckedCreateWithoutAcceptedІnputFileInput[]
    connectOrCreate?: ProcessErdCreateOrConnectWithoutAcceptedІnputFileInput | ProcessErdCreateOrConnectWithoutAcceptedІnputFileInput[]
    createMany?: ProcessErdCreateManyAcceptedІnputFileInputEnvelope
    connect?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
  }

  export type ProcessErdCreateNestedManyWithoutResultFileInput = {
    create?: XOR<ProcessErdCreateWithoutResultFileInput, ProcessErdUncheckedCreateWithoutResultFileInput> | ProcessErdCreateWithoutResultFileInput[] | ProcessErdUncheckedCreateWithoutResultFileInput[]
    connectOrCreate?: ProcessErdCreateOrConnectWithoutResultFileInput | ProcessErdCreateOrConnectWithoutResultFileInput[]
    createMany?: ProcessErdCreateManyResultFileInputEnvelope
    connect?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
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

  export type ProcessDmsuUncheckedCreateNestedManyWithoutPersonInfoFileInput = {
    create?: XOR<ProcessDmsuCreateWithoutPersonInfoFileInput, ProcessDmsuUncheckedCreateWithoutPersonInfoFileInput> | ProcessDmsuCreateWithoutPersonInfoFileInput[] | ProcessDmsuUncheckedCreateWithoutPersonInfoFileInput[]
    connectOrCreate?: ProcessDmsuCreateOrConnectWithoutPersonInfoFileInput | ProcessDmsuCreateOrConnectWithoutPersonInfoFileInput[]
    createMany?: ProcessDmsuCreateManyPersonInfoFileInputEnvelope
    connect?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
  }

  export type ProcessDmsuUncheckedCreateNestedManyWithoutResultFileInput = {
    create?: XOR<ProcessDmsuCreateWithoutResultFileInput, ProcessDmsuUncheckedCreateWithoutResultFileInput> | ProcessDmsuCreateWithoutResultFileInput[] | ProcessDmsuUncheckedCreateWithoutResultFileInput[]
    connectOrCreate?: ProcessDmsuCreateOrConnectWithoutResultFileInput | ProcessDmsuCreateOrConnectWithoutResultFileInput[]
    createMany?: ProcessDmsuCreateManyResultFileInputEnvelope
    connect?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
  }

  export type ProcessDmsuUncheckedCreateNestedManyWithoutWithoutWMFileInput = {
    create?: XOR<ProcessDmsuCreateWithoutWithoutWMFileInput, ProcessDmsuUncheckedCreateWithoutWithoutWMFileInput> | ProcessDmsuCreateWithoutWithoutWMFileInput[] | ProcessDmsuUncheckedCreateWithoutWithoutWMFileInput[]
    connectOrCreate?: ProcessDmsuCreateOrConnectWithoutWithoutWMFileInput | ProcessDmsuCreateOrConnectWithoutWithoutWMFileInput[]
    createMany?: ProcessDmsuCreateManyWithoutWMFileInputEnvelope
    connect?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
  }

  export type ProcessPfuUncheckedCreateNestedManyWithoutInputFileInput = {
    create?: XOR<ProcessPfuCreateWithoutInputFileInput, ProcessPfuUncheckedCreateWithoutInputFileInput> | ProcessPfuCreateWithoutInputFileInput[] | ProcessPfuUncheckedCreateWithoutInputFileInput[]
    connectOrCreate?: ProcessPfuCreateOrConnectWithoutInputFileInput | ProcessPfuCreateOrConnectWithoutInputFileInput[]
    createMany?: ProcessPfuCreateManyInputFileInputEnvelope
    connect?: ProcessPfuWhereUniqueInput | ProcessPfuWhereUniqueInput[]
  }

  export type ProcessPfuUncheckedCreateNestedManyWithoutResultFileInput = {
    create?: XOR<ProcessPfuCreateWithoutResultFileInput, ProcessPfuUncheckedCreateWithoutResultFileInput> | ProcessPfuCreateWithoutResultFileInput[] | ProcessPfuUncheckedCreateWithoutResultFileInput[]
    connectOrCreate?: ProcessPfuCreateOrConnectWithoutResultFileInput | ProcessPfuCreateOrConnectWithoutResultFileInput[]
    createMany?: ProcessPfuCreateManyResultFileInputEnvelope
    connect?: ProcessPfuWhereUniqueInput | ProcessPfuWhereUniqueInput[]
  }

  export type ProcessErdUncheckedCreateNestedManyWithoutGrantedІnputFileInput = {
    create?: XOR<ProcessErdCreateWithoutGrantedІnputFileInput, ProcessErdUncheckedCreateWithoutGrantedІnputFileInput> | ProcessErdCreateWithoutGrantedІnputFileInput[] | ProcessErdUncheckedCreateWithoutGrantedІnputFileInput[]
    connectOrCreate?: ProcessErdCreateOrConnectWithoutGrantedІnputFileInput | ProcessErdCreateOrConnectWithoutGrantedІnputFileInput[]
    createMany?: ProcessErdCreateManyGrantedІnputFileInputEnvelope
    connect?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
  }

  export type ProcessErdUncheckedCreateNestedManyWithoutAcceptedІnputFileInput = {
    create?: XOR<ProcessErdCreateWithoutAcceptedІnputFileInput, ProcessErdUncheckedCreateWithoutAcceptedІnputFileInput> | ProcessErdCreateWithoutAcceptedІnputFileInput[] | ProcessErdUncheckedCreateWithoutAcceptedІnputFileInput[]
    connectOrCreate?: ProcessErdCreateOrConnectWithoutAcceptedІnputFileInput | ProcessErdCreateOrConnectWithoutAcceptedІnputFileInput[]
    createMany?: ProcessErdCreateManyAcceptedІnputFileInputEnvelope
    connect?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
  }

  export type ProcessErdUncheckedCreateNestedManyWithoutResultFileInput = {
    create?: XOR<ProcessErdCreateWithoutResultFileInput, ProcessErdUncheckedCreateWithoutResultFileInput> | ProcessErdCreateWithoutResultFileInput[] | ProcessErdUncheckedCreateWithoutResultFileInput[]
    connectOrCreate?: ProcessErdCreateOrConnectWithoutResultFileInput | ProcessErdCreateOrConnectWithoutResultFileInput[]
    createMany?: ProcessErdCreateManyResultFileInputEnvelope
    connect?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
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

  export type ProcessDmsuUpdateManyWithoutPersonInfoFileNestedInput = {
    create?: XOR<ProcessDmsuCreateWithoutPersonInfoFileInput, ProcessDmsuUncheckedCreateWithoutPersonInfoFileInput> | ProcessDmsuCreateWithoutPersonInfoFileInput[] | ProcessDmsuUncheckedCreateWithoutPersonInfoFileInput[]
    connectOrCreate?: ProcessDmsuCreateOrConnectWithoutPersonInfoFileInput | ProcessDmsuCreateOrConnectWithoutPersonInfoFileInput[]
    upsert?: ProcessDmsuUpsertWithWhereUniqueWithoutPersonInfoFileInput | ProcessDmsuUpsertWithWhereUniqueWithoutPersonInfoFileInput[]
    createMany?: ProcessDmsuCreateManyPersonInfoFileInputEnvelope
    set?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
    disconnect?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
    delete?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
    connect?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
    update?: ProcessDmsuUpdateWithWhereUniqueWithoutPersonInfoFileInput | ProcessDmsuUpdateWithWhereUniqueWithoutPersonInfoFileInput[]
    updateMany?: ProcessDmsuUpdateManyWithWhereWithoutPersonInfoFileInput | ProcessDmsuUpdateManyWithWhereWithoutPersonInfoFileInput[]
    deleteMany?: ProcessDmsuScalarWhereInput | ProcessDmsuScalarWhereInput[]
  }

  export type ProcessDmsuUpdateManyWithoutResultFileNestedInput = {
    create?: XOR<ProcessDmsuCreateWithoutResultFileInput, ProcessDmsuUncheckedCreateWithoutResultFileInput> | ProcessDmsuCreateWithoutResultFileInput[] | ProcessDmsuUncheckedCreateWithoutResultFileInput[]
    connectOrCreate?: ProcessDmsuCreateOrConnectWithoutResultFileInput | ProcessDmsuCreateOrConnectWithoutResultFileInput[]
    upsert?: ProcessDmsuUpsertWithWhereUniqueWithoutResultFileInput | ProcessDmsuUpsertWithWhereUniqueWithoutResultFileInput[]
    createMany?: ProcessDmsuCreateManyResultFileInputEnvelope
    set?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
    disconnect?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
    delete?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
    connect?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
    update?: ProcessDmsuUpdateWithWhereUniqueWithoutResultFileInput | ProcessDmsuUpdateWithWhereUniqueWithoutResultFileInput[]
    updateMany?: ProcessDmsuUpdateManyWithWhereWithoutResultFileInput | ProcessDmsuUpdateManyWithWhereWithoutResultFileInput[]
    deleteMany?: ProcessDmsuScalarWhereInput | ProcessDmsuScalarWhereInput[]
  }

  export type ProcessDmsuUpdateManyWithoutWithoutWMFileNestedInput = {
    create?: XOR<ProcessDmsuCreateWithoutWithoutWMFileInput, ProcessDmsuUncheckedCreateWithoutWithoutWMFileInput> | ProcessDmsuCreateWithoutWithoutWMFileInput[] | ProcessDmsuUncheckedCreateWithoutWithoutWMFileInput[]
    connectOrCreate?: ProcessDmsuCreateOrConnectWithoutWithoutWMFileInput | ProcessDmsuCreateOrConnectWithoutWithoutWMFileInput[]
    upsert?: ProcessDmsuUpsertWithWhereUniqueWithoutWithoutWMFileInput | ProcessDmsuUpsertWithWhereUniqueWithoutWithoutWMFileInput[]
    createMany?: ProcessDmsuCreateManyWithoutWMFileInputEnvelope
    set?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
    disconnect?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
    delete?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
    connect?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
    update?: ProcessDmsuUpdateWithWhereUniqueWithoutWithoutWMFileInput | ProcessDmsuUpdateWithWhereUniqueWithoutWithoutWMFileInput[]
    updateMany?: ProcessDmsuUpdateManyWithWhereWithoutWithoutWMFileInput | ProcessDmsuUpdateManyWithWhereWithoutWithoutWMFileInput[]
    deleteMany?: ProcessDmsuScalarWhereInput | ProcessDmsuScalarWhereInput[]
  }

  export type ProcessPfuUpdateManyWithoutInputFileNestedInput = {
    create?: XOR<ProcessPfuCreateWithoutInputFileInput, ProcessPfuUncheckedCreateWithoutInputFileInput> | ProcessPfuCreateWithoutInputFileInput[] | ProcessPfuUncheckedCreateWithoutInputFileInput[]
    connectOrCreate?: ProcessPfuCreateOrConnectWithoutInputFileInput | ProcessPfuCreateOrConnectWithoutInputFileInput[]
    upsert?: ProcessPfuUpsertWithWhereUniqueWithoutInputFileInput | ProcessPfuUpsertWithWhereUniqueWithoutInputFileInput[]
    createMany?: ProcessPfuCreateManyInputFileInputEnvelope
    set?: ProcessPfuWhereUniqueInput | ProcessPfuWhereUniqueInput[]
    disconnect?: ProcessPfuWhereUniqueInput | ProcessPfuWhereUniqueInput[]
    delete?: ProcessPfuWhereUniqueInput | ProcessPfuWhereUniqueInput[]
    connect?: ProcessPfuWhereUniqueInput | ProcessPfuWhereUniqueInput[]
    update?: ProcessPfuUpdateWithWhereUniqueWithoutInputFileInput | ProcessPfuUpdateWithWhereUniqueWithoutInputFileInput[]
    updateMany?: ProcessPfuUpdateManyWithWhereWithoutInputFileInput | ProcessPfuUpdateManyWithWhereWithoutInputFileInput[]
    deleteMany?: ProcessPfuScalarWhereInput | ProcessPfuScalarWhereInput[]
  }

  export type ProcessPfuUpdateManyWithoutResultFileNestedInput = {
    create?: XOR<ProcessPfuCreateWithoutResultFileInput, ProcessPfuUncheckedCreateWithoutResultFileInput> | ProcessPfuCreateWithoutResultFileInput[] | ProcessPfuUncheckedCreateWithoutResultFileInput[]
    connectOrCreate?: ProcessPfuCreateOrConnectWithoutResultFileInput | ProcessPfuCreateOrConnectWithoutResultFileInput[]
    upsert?: ProcessPfuUpsertWithWhereUniqueWithoutResultFileInput | ProcessPfuUpsertWithWhereUniqueWithoutResultFileInput[]
    createMany?: ProcessPfuCreateManyResultFileInputEnvelope
    set?: ProcessPfuWhereUniqueInput | ProcessPfuWhereUniqueInput[]
    disconnect?: ProcessPfuWhereUniqueInput | ProcessPfuWhereUniqueInput[]
    delete?: ProcessPfuWhereUniqueInput | ProcessPfuWhereUniqueInput[]
    connect?: ProcessPfuWhereUniqueInput | ProcessPfuWhereUniqueInput[]
    update?: ProcessPfuUpdateWithWhereUniqueWithoutResultFileInput | ProcessPfuUpdateWithWhereUniqueWithoutResultFileInput[]
    updateMany?: ProcessPfuUpdateManyWithWhereWithoutResultFileInput | ProcessPfuUpdateManyWithWhereWithoutResultFileInput[]
    deleteMany?: ProcessPfuScalarWhereInput | ProcessPfuScalarWhereInput[]
  }

  export type ProcessErdUpdateManyWithoutGrantedІnputFileNestedInput = {
    create?: XOR<ProcessErdCreateWithoutGrantedІnputFileInput, ProcessErdUncheckedCreateWithoutGrantedІnputFileInput> | ProcessErdCreateWithoutGrantedІnputFileInput[] | ProcessErdUncheckedCreateWithoutGrantedІnputFileInput[]
    connectOrCreate?: ProcessErdCreateOrConnectWithoutGrantedІnputFileInput | ProcessErdCreateOrConnectWithoutGrantedІnputFileInput[]
    upsert?: ProcessErdUpsertWithWhereUniqueWithoutGrantedІnputFileInput | ProcessErdUpsertWithWhereUniqueWithoutGrantedІnputFileInput[]
    createMany?: ProcessErdCreateManyGrantedІnputFileInputEnvelope
    set?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
    disconnect?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
    delete?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
    connect?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
    update?: ProcessErdUpdateWithWhereUniqueWithoutGrantedІnputFileInput | ProcessErdUpdateWithWhereUniqueWithoutGrantedІnputFileInput[]
    updateMany?: ProcessErdUpdateManyWithWhereWithoutGrantedІnputFileInput | ProcessErdUpdateManyWithWhereWithoutGrantedІnputFileInput[]
    deleteMany?: ProcessErdScalarWhereInput | ProcessErdScalarWhereInput[]
  }

  export type ProcessErdUpdateManyWithoutAcceptedІnputFileNestedInput = {
    create?: XOR<ProcessErdCreateWithoutAcceptedІnputFileInput, ProcessErdUncheckedCreateWithoutAcceptedІnputFileInput> | ProcessErdCreateWithoutAcceptedІnputFileInput[] | ProcessErdUncheckedCreateWithoutAcceptedІnputFileInput[]
    connectOrCreate?: ProcessErdCreateOrConnectWithoutAcceptedІnputFileInput | ProcessErdCreateOrConnectWithoutAcceptedІnputFileInput[]
    upsert?: ProcessErdUpsertWithWhereUniqueWithoutAcceptedІnputFileInput | ProcessErdUpsertWithWhereUniqueWithoutAcceptedІnputFileInput[]
    createMany?: ProcessErdCreateManyAcceptedІnputFileInputEnvelope
    set?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
    disconnect?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
    delete?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
    connect?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
    update?: ProcessErdUpdateWithWhereUniqueWithoutAcceptedІnputFileInput | ProcessErdUpdateWithWhereUniqueWithoutAcceptedІnputFileInput[]
    updateMany?: ProcessErdUpdateManyWithWhereWithoutAcceptedІnputFileInput | ProcessErdUpdateManyWithWhereWithoutAcceptedІnputFileInput[]
    deleteMany?: ProcessErdScalarWhereInput | ProcessErdScalarWhereInput[]
  }

  export type ProcessErdUpdateManyWithoutResultFileNestedInput = {
    create?: XOR<ProcessErdCreateWithoutResultFileInput, ProcessErdUncheckedCreateWithoutResultFileInput> | ProcessErdCreateWithoutResultFileInput[] | ProcessErdUncheckedCreateWithoutResultFileInput[]
    connectOrCreate?: ProcessErdCreateOrConnectWithoutResultFileInput | ProcessErdCreateOrConnectWithoutResultFileInput[]
    upsert?: ProcessErdUpsertWithWhereUniqueWithoutResultFileInput | ProcessErdUpsertWithWhereUniqueWithoutResultFileInput[]
    createMany?: ProcessErdCreateManyResultFileInputEnvelope
    set?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
    disconnect?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
    delete?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
    connect?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
    update?: ProcessErdUpdateWithWhereUniqueWithoutResultFileInput | ProcessErdUpdateWithWhereUniqueWithoutResultFileInput[]
    updateMany?: ProcessErdUpdateManyWithWhereWithoutResultFileInput | ProcessErdUpdateManyWithWhereWithoutResultFileInput[]
    deleteMany?: ProcessErdScalarWhereInput | ProcessErdScalarWhereInput[]
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

  export type ProcessDmsuUncheckedUpdateManyWithoutPersonInfoFileNestedInput = {
    create?: XOR<ProcessDmsuCreateWithoutPersonInfoFileInput, ProcessDmsuUncheckedCreateWithoutPersonInfoFileInput> | ProcessDmsuCreateWithoutPersonInfoFileInput[] | ProcessDmsuUncheckedCreateWithoutPersonInfoFileInput[]
    connectOrCreate?: ProcessDmsuCreateOrConnectWithoutPersonInfoFileInput | ProcessDmsuCreateOrConnectWithoutPersonInfoFileInput[]
    upsert?: ProcessDmsuUpsertWithWhereUniqueWithoutPersonInfoFileInput | ProcessDmsuUpsertWithWhereUniqueWithoutPersonInfoFileInput[]
    createMany?: ProcessDmsuCreateManyPersonInfoFileInputEnvelope
    set?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
    disconnect?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
    delete?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
    connect?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
    update?: ProcessDmsuUpdateWithWhereUniqueWithoutPersonInfoFileInput | ProcessDmsuUpdateWithWhereUniqueWithoutPersonInfoFileInput[]
    updateMany?: ProcessDmsuUpdateManyWithWhereWithoutPersonInfoFileInput | ProcessDmsuUpdateManyWithWhereWithoutPersonInfoFileInput[]
    deleteMany?: ProcessDmsuScalarWhereInput | ProcessDmsuScalarWhereInput[]
  }

  export type ProcessDmsuUncheckedUpdateManyWithoutResultFileNestedInput = {
    create?: XOR<ProcessDmsuCreateWithoutResultFileInput, ProcessDmsuUncheckedCreateWithoutResultFileInput> | ProcessDmsuCreateWithoutResultFileInput[] | ProcessDmsuUncheckedCreateWithoutResultFileInput[]
    connectOrCreate?: ProcessDmsuCreateOrConnectWithoutResultFileInput | ProcessDmsuCreateOrConnectWithoutResultFileInput[]
    upsert?: ProcessDmsuUpsertWithWhereUniqueWithoutResultFileInput | ProcessDmsuUpsertWithWhereUniqueWithoutResultFileInput[]
    createMany?: ProcessDmsuCreateManyResultFileInputEnvelope
    set?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
    disconnect?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
    delete?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
    connect?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
    update?: ProcessDmsuUpdateWithWhereUniqueWithoutResultFileInput | ProcessDmsuUpdateWithWhereUniqueWithoutResultFileInput[]
    updateMany?: ProcessDmsuUpdateManyWithWhereWithoutResultFileInput | ProcessDmsuUpdateManyWithWhereWithoutResultFileInput[]
    deleteMany?: ProcessDmsuScalarWhereInput | ProcessDmsuScalarWhereInput[]
  }

  export type ProcessDmsuUncheckedUpdateManyWithoutWithoutWMFileNestedInput = {
    create?: XOR<ProcessDmsuCreateWithoutWithoutWMFileInput, ProcessDmsuUncheckedCreateWithoutWithoutWMFileInput> | ProcessDmsuCreateWithoutWithoutWMFileInput[] | ProcessDmsuUncheckedCreateWithoutWithoutWMFileInput[]
    connectOrCreate?: ProcessDmsuCreateOrConnectWithoutWithoutWMFileInput | ProcessDmsuCreateOrConnectWithoutWithoutWMFileInput[]
    upsert?: ProcessDmsuUpsertWithWhereUniqueWithoutWithoutWMFileInput | ProcessDmsuUpsertWithWhereUniqueWithoutWithoutWMFileInput[]
    createMany?: ProcessDmsuCreateManyWithoutWMFileInputEnvelope
    set?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
    disconnect?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
    delete?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
    connect?: ProcessDmsuWhereUniqueInput | ProcessDmsuWhereUniqueInput[]
    update?: ProcessDmsuUpdateWithWhereUniqueWithoutWithoutWMFileInput | ProcessDmsuUpdateWithWhereUniqueWithoutWithoutWMFileInput[]
    updateMany?: ProcessDmsuUpdateManyWithWhereWithoutWithoutWMFileInput | ProcessDmsuUpdateManyWithWhereWithoutWithoutWMFileInput[]
    deleteMany?: ProcessDmsuScalarWhereInput | ProcessDmsuScalarWhereInput[]
  }

  export type ProcessPfuUncheckedUpdateManyWithoutInputFileNestedInput = {
    create?: XOR<ProcessPfuCreateWithoutInputFileInput, ProcessPfuUncheckedCreateWithoutInputFileInput> | ProcessPfuCreateWithoutInputFileInput[] | ProcessPfuUncheckedCreateWithoutInputFileInput[]
    connectOrCreate?: ProcessPfuCreateOrConnectWithoutInputFileInput | ProcessPfuCreateOrConnectWithoutInputFileInput[]
    upsert?: ProcessPfuUpsertWithWhereUniqueWithoutInputFileInput | ProcessPfuUpsertWithWhereUniqueWithoutInputFileInput[]
    createMany?: ProcessPfuCreateManyInputFileInputEnvelope
    set?: ProcessPfuWhereUniqueInput | ProcessPfuWhereUniqueInput[]
    disconnect?: ProcessPfuWhereUniqueInput | ProcessPfuWhereUniqueInput[]
    delete?: ProcessPfuWhereUniqueInput | ProcessPfuWhereUniqueInput[]
    connect?: ProcessPfuWhereUniqueInput | ProcessPfuWhereUniqueInput[]
    update?: ProcessPfuUpdateWithWhereUniqueWithoutInputFileInput | ProcessPfuUpdateWithWhereUniqueWithoutInputFileInput[]
    updateMany?: ProcessPfuUpdateManyWithWhereWithoutInputFileInput | ProcessPfuUpdateManyWithWhereWithoutInputFileInput[]
    deleteMany?: ProcessPfuScalarWhereInput | ProcessPfuScalarWhereInput[]
  }

  export type ProcessPfuUncheckedUpdateManyWithoutResultFileNestedInput = {
    create?: XOR<ProcessPfuCreateWithoutResultFileInput, ProcessPfuUncheckedCreateWithoutResultFileInput> | ProcessPfuCreateWithoutResultFileInput[] | ProcessPfuUncheckedCreateWithoutResultFileInput[]
    connectOrCreate?: ProcessPfuCreateOrConnectWithoutResultFileInput | ProcessPfuCreateOrConnectWithoutResultFileInput[]
    upsert?: ProcessPfuUpsertWithWhereUniqueWithoutResultFileInput | ProcessPfuUpsertWithWhereUniqueWithoutResultFileInput[]
    createMany?: ProcessPfuCreateManyResultFileInputEnvelope
    set?: ProcessPfuWhereUniqueInput | ProcessPfuWhereUniqueInput[]
    disconnect?: ProcessPfuWhereUniqueInput | ProcessPfuWhereUniqueInput[]
    delete?: ProcessPfuWhereUniqueInput | ProcessPfuWhereUniqueInput[]
    connect?: ProcessPfuWhereUniqueInput | ProcessPfuWhereUniqueInput[]
    update?: ProcessPfuUpdateWithWhereUniqueWithoutResultFileInput | ProcessPfuUpdateWithWhereUniqueWithoutResultFileInput[]
    updateMany?: ProcessPfuUpdateManyWithWhereWithoutResultFileInput | ProcessPfuUpdateManyWithWhereWithoutResultFileInput[]
    deleteMany?: ProcessPfuScalarWhereInput | ProcessPfuScalarWhereInput[]
  }

  export type ProcessErdUncheckedUpdateManyWithoutGrantedІnputFileNestedInput = {
    create?: XOR<ProcessErdCreateWithoutGrantedІnputFileInput, ProcessErdUncheckedCreateWithoutGrantedІnputFileInput> | ProcessErdCreateWithoutGrantedІnputFileInput[] | ProcessErdUncheckedCreateWithoutGrantedІnputFileInput[]
    connectOrCreate?: ProcessErdCreateOrConnectWithoutGrantedІnputFileInput | ProcessErdCreateOrConnectWithoutGrantedІnputFileInput[]
    upsert?: ProcessErdUpsertWithWhereUniqueWithoutGrantedІnputFileInput | ProcessErdUpsertWithWhereUniqueWithoutGrantedІnputFileInput[]
    createMany?: ProcessErdCreateManyGrantedІnputFileInputEnvelope
    set?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
    disconnect?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
    delete?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
    connect?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
    update?: ProcessErdUpdateWithWhereUniqueWithoutGrantedІnputFileInput | ProcessErdUpdateWithWhereUniqueWithoutGrantedІnputFileInput[]
    updateMany?: ProcessErdUpdateManyWithWhereWithoutGrantedІnputFileInput | ProcessErdUpdateManyWithWhereWithoutGrantedІnputFileInput[]
    deleteMany?: ProcessErdScalarWhereInput | ProcessErdScalarWhereInput[]
  }

  export type ProcessErdUncheckedUpdateManyWithoutAcceptedІnputFileNestedInput = {
    create?: XOR<ProcessErdCreateWithoutAcceptedІnputFileInput, ProcessErdUncheckedCreateWithoutAcceptedІnputFileInput> | ProcessErdCreateWithoutAcceptedІnputFileInput[] | ProcessErdUncheckedCreateWithoutAcceptedІnputFileInput[]
    connectOrCreate?: ProcessErdCreateOrConnectWithoutAcceptedІnputFileInput | ProcessErdCreateOrConnectWithoutAcceptedІnputFileInput[]
    upsert?: ProcessErdUpsertWithWhereUniqueWithoutAcceptedІnputFileInput | ProcessErdUpsertWithWhereUniqueWithoutAcceptedІnputFileInput[]
    createMany?: ProcessErdCreateManyAcceptedІnputFileInputEnvelope
    set?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
    disconnect?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
    delete?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
    connect?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
    update?: ProcessErdUpdateWithWhereUniqueWithoutAcceptedІnputFileInput | ProcessErdUpdateWithWhereUniqueWithoutAcceptedІnputFileInput[]
    updateMany?: ProcessErdUpdateManyWithWhereWithoutAcceptedІnputFileInput | ProcessErdUpdateManyWithWhereWithoutAcceptedІnputFileInput[]
    deleteMany?: ProcessErdScalarWhereInput | ProcessErdScalarWhereInput[]
  }

  export type ProcessErdUncheckedUpdateManyWithoutResultFileNestedInput = {
    create?: XOR<ProcessErdCreateWithoutResultFileInput, ProcessErdUncheckedCreateWithoutResultFileInput> | ProcessErdCreateWithoutResultFileInput[] | ProcessErdUncheckedCreateWithoutResultFileInput[]
    connectOrCreate?: ProcessErdCreateOrConnectWithoutResultFileInput | ProcessErdCreateOrConnectWithoutResultFileInput[]
    upsert?: ProcessErdUpsertWithWhereUniqueWithoutResultFileInput | ProcessErdUpsertWithWhereUniqueWithoutResultFileInput[]
    createMany?: ProcessErdCreateManyResultFileInputEnvelope
    set?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
    disconnect?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
    delete?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
    connect?: ProcessErdWhereUniqueInput | ProcessErdWhereUniqueInput[]
    update?: ProcessErdUpdateWithWhereUniqueWithoutResultFileInput | ProcessErdUpdateWithWhereUniqueWithoutResultFileInput[]
    updateMany?: ProcessErdUpdateManyWithWhereWithoutResultFileInput | ProcessErdUpdateManyWithWhereWithoutResultFileInput[]
    deleteMany?: ProcessErdScalarWhereInput | ProcessErdScalarWhereInput[]
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

  export type ProcessDmsuCreateNestedOneWithoutProcessInput = {
    create?: XOR<ProcessDmsuCreateWithoutProcessInput, ProcessDmsuUncheckedCreateWithoutProcessInput>
    connectOrCreate?: ProcessDmsuCreateOrConnectWithoutProcessInput
    connect?: ProcessDmsuWhereUniqueInput
  }

  export type ProcessPfuCreateNestedOneWithoutProcessInput = {
    create?: XOR<ProcessPfuCreateWithoutProcessInput, ProcessPfuUncheckedCreateWithoutProcessInput>
    connectOrCreate?: ProcessPfuCreateOrConnectWithoutProcessInput
    connect?: ProcessPfuWhereUniqueInput
  }

  export type ProcessErdCreateNestedOneWithoutProcessInput = {
    create?: XOR<ProcessErdCreateWithoutProcessInput, ProcessErdUncheckedCreateWithoutProcessInput>
    connectOrCreate?: ProcessErdCreateOrConnectWithoutProcessInput
    connect?: ProcessErdWhereUniqueInput
  }

  export type ProcessHstsMvsUncheckedCreateNestedOneWithoutProcessInput = {
    create?: XOR<ProcessHstsMvsCreateWithoutProcessInput, ProcessHstsMvsUncheckedCreateWithoutProcessInput>
    connectOrCreate?: ProcessHstsMvsCreateOrConnectWithoutProcessInput
    connect?: ProcessHstsMvsWhereUniqueInput
  }

  export type ProcessDmsuUncheckedCreateNestedOneWithoutProcessInput = {
    create?: XOR<ProcessDmsuCreateWithoutProcessInput, ProcessDmsuUncheckedCreateWithoutProcessInput>
    connectOrCreate?: ProcessDmsuCreateOrConnectWithoutProcessInput
    connect?: ProcessDmsuWhereUniqueInput
  }

  export type ProcessPfuUncheckedCreateNestedOneWithoutProcessInput = {
    create?: XOR<ProcessPfuCreateWithoutProcessInput, ProcessPfuUncheckedCreateWithoutProcessInput>
    connectOrCreate?: ProcessPfuCreateOrConnectWithoutProcessInput
    connect?: ProcessPfuWhereUniqueInput
  }

  export type ProcessErdUncheckedCreateNestedOneWithoutProcessInput = {
    create?: XOR<ProcessErdCreateWithoutProcessInput, ProcessErdUncheckedCreateWithoutProcessInput>
    connectOrCreate?: ProcessErdCreateOrConnectWithoutProcessInput
    connect?: ProcessErdWhereUniqueInput
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type EnumProcessTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProcessType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type ProcessDmsuUpdateOneWithoutProcessNestedInput = {
    create?: XOR<ProcessDmsuCreateWithoutProcessInput, ProcessDmsuUncheckedCreateWithoutProcessInput>
    connectOrCreate?: ProcessDmsuCreateOrConnectWithoutProcessInput
    upsert?: ProcessDmsuUpsertWithoutProcessInput
    disconnect?: ProcessDmsuWhereInput | boolean
    delete?: ProcessDmsuWhereInput | boolean
    connect?: ProcessDmsuWhereUniqueInput
    update?: XOR<XOR<ProcessDmsuUpdateToOneWithWhereWithoutProcessInput, ProcessDmsuUpdateWithoutProcessInput>, ProcessDmsuUncheckedUpdateWithoutProcessInput>
  }

  export type ProcessPfuUpdateOneWithoutProcessNestedInput = {
    create?: XOR<ProcessPfuCreateWithoutProcessInput, ProcessPfuUncheckedCreateWithoutProcessInput>
    connectOrCreate?: ProcessPfuCreateOrConnectWithoutProcessInput
    upsert?: ProcessPfuUpsertWithoutProcessInput
    disconnect?: ProcessPfuWhereInput | boolean
    delete?: ProcessPfuWhereInput | boolean
    connect?: ProcessPfuWhereUniqueInput
    update?: XOR<XOR<ProcessPfuUpdateToOneWithWhereWithoutProcessInput, ProcessPfuUpdateWithoutProcessInput>, ProcessPfuUncheckedUpdateWithoutProcessInput>
  }

  export type ProcessErdUpdateOneWithoutProcessNestedInput = {
    create?: XOR<ProcessErdCreateWithoutProcessInput, ProcessErdUncheckedCreateWithoutProcessInput>
    connectOrCreate?: ProcessErdCreateOrConnectWithoutProcessInput
    upsert?: ProcessErdUpsertWithoutProcessInput
    disconnect?: ProcessErdWhereInput | boolean
    delete?: ProcessErdWhereInput | boolean
    connect?: ProcessErdWhereUniqueInput
    update?: XOR<XOR<ProcessErdUpdateToOneWithWhereWithoutProcessInput, ProcessErdUpdateWithoutProcessInput>, ProcessErdUncheckedUpdateWithoutProcessInput>
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

  export type ProcessDmsuUncheckedUpdateOneWithoutProcessNestedInput = {
    create?: XOR<ProcessDmsuCreateWithoutProcessInput, ProcessDmsuUncheckedCreateWithoutProcessInput>
    connectOrCreate?: ProcessDmsuCreateOrConnectWithoutProcessInput
    upsert?: ProcessDmsuUpsertWithoutProcessInput
    disconnect?: ProcessDmsuWhereInput | boolean
    delete?: ProcessDmsuWhereInput | boolean
    connect?: ProcessDmsuWhereUniqueInput
    update?: XOR<XOR<ProcessDmsuUpdateToOneWithWhereWithoutProcessInput, ProcessDmsuUpdateWithoutProcessInput>, ProcessDmsuUncheckedUpdateWithoutProcessInput>
  }

  export type ProcessPfuUncheckedUpdateOneWithoutProcessNestedInput = {
    create?: XOR<ProcessPfuCreateWithoutProcessInput, ProcessPfuUncheckedCreateWithoutProcessInput>
    connectOrCreate?: ProcessPfuCreateOrConnectWithoutProcessInput
    upsert?: ProcessPfuUpsertWithoutProcessInput
    disconnect?: ProcessPfuWhereInput | boolean
    delete?: ProcessPfuWhereInput | boolean
    connect?: ProcessPfuWhereUniqueInput
    update?: XOR<XOR<ProcessPfuUpdateToOneWithWhereWithoutProcessInput, ProcessPfuUpdateWithoutProcessInput>, ProcessPfuUncheckedUpdateWithoutProcessInput>
  }

  export type ProcessErdUncheckedUpdateOneWithoutProcessNestedInput = {
    create?: XOR<ProcessErdCreateWithoutProcessInput, ProcessErdUncheckedCreateWithoutProcessInput>
    connectOrCreate?: ProcessErdCreateOrConnectWithoutProcessInput
    upsert?: ProcessErdUpsertWithoutProcessInput
    disconnect?: ProcessErdWhereInput | boolean
    delete?: ProcessErdWhereInput | boolean
    connect?: ProcessErdWhereUniqueInput
    update?: XOR<XOR<ProcessErdUpdateToOneWithWhereWithoutProcessInput, ProcessErdUpdateWithoutProcessInput>, ProcessErdUncheckedUpdateWithoutProcessInput>
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

  export type StorageFileCreateNestedOneWithoutResultProcessesHstsMvsInput = {
    create?: XOR<StorageFileCreateWithoutResultProcessesHstsMvsInput, StorageFileUncheckedCreateWithoutResultProcessesHstsMvsInput>
    connectOrCreate?: StorageFileCreateOrConnectWithoutResultProcessesHstsMvsInput
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

  export type StorageFileUpdateOneWithoutDriverLicenseProcessesNestedInput = {
    create?: XOR<StorageFileCreateWithoutDriverLicenseProcessesInput, StorageFileUncheckedCreateWithoutDriverLicenseProcessesInput>
    connectOrCreate?: StorageFileCreateOrConnectWithoutDriverLicenseProcessesInput
    upsert?: StorageFileUpsertWithoutDriverLicenseProcessesInput
    disconnect?: StorageFileWhereInput | boolean
    delete?: StorageFileWhereInput | boolean
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

  export type StorageFileUpdateOneWithoutResultProcessesHstsMvsNestedInput = {
    create?: XOR<StorageFileCreateWithoutResultProcessesHstsMvsInput, StorageFileUncheckedCreateWithoutResultProcessesHstsMvsInput>
    connectOrCreate?: StorageFileCreateOrConnectWithoutResultProcessesHstsMvsInput
    upsert?: StorageFileUpsertWithoutResultProcessesHstsMvsInput
    disconnect?: StorageFileWhereInput | boolean
    delete?: StorageFileWhereInput | boolean
    connect?: StorageFileWhereUniqueInput
    update?: XOR<XOR<StorageFileUpdateToOneWithWhereWithoutResultProcessesHstsMvsInput, StorageFileUpdateWithoutResultProcessesHstsMvsInput>, StorageFileUncheckedUpdateWithoutResultProcessesHstsMvsInput>
  }

  export type ProcessCreateNestedOneWithoutDmsuInput = {
    create?: XOR<ProcessCreateWithoutDmsuInput, ProcessUncheckedCreateWithoutDmsuInput>
    connectOrCreate?: ProcessCreateOrConnectWithoutDmsuInput
    connect?: ProcessWhereUniqueInput
  }

  export type StorageFileCreateNestedOneWithoutPersonInfoProcessesInput = {
    create?: XOR<StorageFileCreateWithoutPersonInfoProcessesInput, StorageFileUncheckedCreateWithoutPersonInfoProcessesInput>
    connectOrCreate?: StorageFileCreateOrConnectWithoutPersonInfoProcessesInput
    connect?: StorageFileWhereUniqueInput
  }

  export type StorageFileCreateNestedOneWithoutResultProcessesDmsuInput = {
    create?: XOR<StorageFileCreateWithoutResultProcessesDmsuInput, StorageFileUncheckedCreateWithoutResultProcessesDmsuInput>
    connectOrCreate?: StorageFileCreateOrConnectWithoutResultProcessesDmsuInput
    connect?: StorageFileWhereUniqueInput
  }

  export type StorageFileCreateNestedOneWithoutWithoutWMProcessesInput = {
    create?: XOR<StorageFileCreateWithoutWithoutWMProcessesInput, StorageFileUncheckedCreateWithoutWithoutWMProcessesInput>
    connectOrCreate?: StorageFileCreateOrConnectWithoutWithoutWMProcessesInput
    connect?: StorageFileWhereUniqueInput
  }

  export type EnumDmsuStageFieldUpdateOperationsInput = {
    set?: $Enums.DmsuStage
  }

  export type ProcessUpdateOneRequiredWithoutDmsuNestedInput = {
    create?: XOR<ProcessCreateWithoutDmsuInput, ProcessUncheckedCreateWithoutDmsuInput>
    connectOrCreate?: ProcessCreateOrConnectWithoutDmsuInput
    upsert?: ProcessUpsertWithoutDmsuInput
    connect?: ProcessWhereUniqueInput
    update?: XOR<XOR<ProcessUpdateToOneWithWhereWithoutDmsuInput, ProcessUpdateWithoutDmsuInput>, ProcessUncheckedUpdateWithoutDmsuInput>
  }

  export type StorageFileUpdateOneRequiredWithoutPersonInfoProcessesNestedInput = {
    create?: XOR<StorageFileCreateWithoutPersonInfoProcessesInput, StorageFileUncheckedCreateWithoutPersonInfoProcessesInput>
    connectOrCreate?: StorageFileCreateOrConnectWithoutPersonInfoProcessesInput
    upsert?: StorageFileUpsertWithoutPersonInfoProcessesInput
    connect?: StorageFileWhereUniqueInput
    update?: XOR<XOR<StorageFileUpdateToOneWithWhereWithoutPersonInfoProcessesInput, StorageFileUpdateWithoutPersonInfoProcessesInput>, StorageFileUncheckedUpdateWithoutPersonInfoProcessesInput>
  }

  export type StorageFileUpdateOneWithoutResultProcessesDmsuNestedInput = {
    create?: XOR<StorageFileCreateWithoutResultProcessesDmsuInput, StorageFileUncheckedCreateWithoutResultProcessesDmsuInput>
    connectOrCreate?: StorageFileCreateOrConnectWithoutResultProcessesDmsuInput
    upsert?: StorageFileUpsertWithoutResultProcessesDmsuInput
    disconnect?: StorageFileWhereInput | boolean
    delete?: StorageFileWhereInput | boolean
    connect?: StorageFileWhereUniqueInput
    update?: XOR<XOR<StorageFileUpdateToOneWithWhereWithoutResultProcessesDmsuInput, StorageFileUpdateWithoutResultProcessesDmsuInput>, StorageFileUncheckedUpdateWithoutResultProcessesDmsuInput>
  }

  export type StorageFileUpdateOneWithoutWithoutWMProcessesNestedInput = {
    create?: XOR<StorageFileCreateWithoutWithoutWMProcessesInput, StorageFileUncheckedCreateWithoutWithoutWMProcessesInput>
    connectOrCreate?: StorageFileCreateOrConnectWithoutWithoutWMProcessesInput
    upsert?: StorageFileUpsertWithoutWithoutWMProcessesInput
    disconnect?: StorageFileWhereInput | boolean
    delete?: StorageFileWhereInput | boolean
    connect?: StorageFileWhereUniqueInput
    update?: XOR<XOR<StorageFileUpdateToOneWithWhereWithoutWithoutWMProcessesInput, StorageFileUpdateWithoutWithoutWMProcessesInput>, StorageFileUncheckedUpdateWithoutWithoutWMProcessesInput>
  }

  export type ProcessCreateNestedOneWithoutPfuInput = {
    create?: XOR<ProcessCreateWithoutPfuInput, ProcessUncheckedCreateWithoutPfuInput>
    connectOrCreate?: ProcessCreateOrConnectWithoutPfuInput
    connect?: ProcessWhereUniqueInput
  }

  export type StorageFileCreateNestedOneWithoutInputFilePfuInput = {
    create?: XOR<StorageFileCreateWithoutInputFilePfuInput, StorageFileUncheckedCreateWithoutInputFilePfuInput>
    connectOrCreate?: StorageFileCreateOrConnectWithoutInputFilePfuInput
    connect?: StorageFileWhereUniqueInput
  }

  export type StorageFileCreateNestedOneWithoutResultFilePfuInput = {
    create?: XOR<StorageFileCreateWithoutResultFilePfuInput, StorageFileUncheckedCreateWithoutResultFilePfuInput>
    connectOrCreate?: StorageFileCreateOrConnectWithoutResultFilePfuInput
    connect?: StorageFileWhereUniqueInput
  }

  export type EnumPfuStageFieldUpdateOperationsInput = {
    set?: $Enums.PfuStage
  }

  export type ProcessUpdateOneRequiredWithoutPfuNestedInput = {
    create?: XOR<ProcessCreateWithoutPfuInput, ProcessUncheckedCreateWithoutPfuInput>
    connectOrCreate?: ProcessCreateOrConnectWithoutPfuInput
    upsert?: ProcessUpsertWithoutPfuInput
    connect?: ProcessWhereUniqueInput
    update?: XOR<XOR<ProcessUpdateToOneWithWhereWithoutPfuInput, ProcessUpdateWithoutPfuInput>, ProcessUncheckedUpdateWithoutPfuInput>
  }

  export type StorageFileUpdateOneRequiredWithoutInputFilePfuNestedInput = {
    create?: XOR<StorageFileCreateWithoutInputFilePfuInput, StorageFileUncheckedCreateWithoutInputFilePfuInput>
    connectOrCreate?: StorageFileCreateOrConnectWithoutInputFilePfuInput
    upsert?: StorageFileUpsertWithoutInputFilePfuInput
    connect?: StorageFileWhereUniqueInput
    update?: XOR<XOR<StorageFileUpdateToOneWithWhereWithoutInputFilePfuInput, StorageFileUpdateWithoutInputFilePfuInput>, StorageFileUncheckedUpdateWithoutInputFilePfuInput>
  }

  export type StorageFileUpdateOneWithoutResultFilePfuNestedInput = {
    create?: XOR<StorageFileCreateWithoutResultFilePfuInput, StorageFileUncheckedCreateWithoutResultFilePfuInput>
    connectOrCreate?: StorageFileCreateOrConnectWithoutResultFilePfuInput
    upsert?: StorageFileUpsertWithoutResultFilePfuInput
    disconnect?: StorageFileWhereInput | boolean
    delete?: StorageFileWhereInput | boolean
    connect?: StorageFileWhereUniqueInput
    update?: XOR<XOR<StorageFileUpdateToOneWithWhereWithoutResultFilePfuInput, StorageFileUpdateWithoutResultFilePfuInput>, StorageFileUncheckedUpdateWithoutResultFilePfuInput>
  }

  export type ProcessCreateNestedOneWithoutErdInput = {
    create?: XOR<ProcessCreateWithoutErdInput, ProcessUncheckedCreateWithoutErdInput>
    connectOrCreate?: ProcessCreateOrConnectWithoutErdInput
    connect?: ProcessWhereUniqueInput
  }

  export type StorageFileCreateNestedOneWithoutGrantedІnputFileErdInput = {
    create?: XOR<StorageFileCreateWithoutGrantedІnputFileErdInput, StorageFileUncheckedCreateWithoutGrantedІnputFileErdInput>
    connectOrCreate?: StorageFileCreateOrConnectWithoutGrantedІnputFileErdInput
    connect?: StorageFileWhereUniqueInput
  }

  export type StorageFileCreateNestedOneWithoutAcceptedІnputFileErdInput = {
    create?: XOR<StorageFileCreateWithoutAcceptedІnputFileErdInput, StorageFileUncheckedCreateWithoutAcceptedІnputFileErdInput>
    connectOrCreate?: StorageFileCreateOrConnectWithoutAcceptedІnputFileErdInput
    connect?: StorageFileWhereUniqueInput
  }

  export type StorageFileCreateNestedOneWithoutResultFileErdInput = {
    create?: XOR<StorageFileCreateWithoutResultFileErdInput, StorageFileUncheckedCreateWithoutResultFileErdInput>
    connectOrCreate?: StorageFileCreateOrConnectWithoutResultFileErdInput
    connect?: StorageFileWhereUniqueInput
  }

  export type EnumErdStageFieldUpdateOperationsInput = {
    set?: $Enums.ErdStage
  }

  export type ProcessUpdateOneRequiredWithoutErdNestedInput = {
    create?: XOR<ProcessCreateWithoutErdInput, ProcessUncheckedCreateWithoutErdInput>
    connectOrCreate?: ProcessCreateOrConnectWithoutErdInput
    upsert?: ProcessUpsertWithoutErdInput
    connect?: ProcessWhereUniqueInput
    update?: XOR<XOR<ProcessUpdateToOneWithWhereWithoutErdInput, ProcessUpdateWithoutErdInput>, ProcessUncheckedUpdateWithoutErdInput>
  }

  export type StorageFileUpdateOneWithoutGrantedІnputFileErdNestedInput = {
    create?: XOR<StorageFileCreateWithoutGrantedІnputFileErdInput, StorageFileUncheckedCreateWithoutGrantedІnputFileErdInput>
    connectOrCreate?: StorageFileCreateOrConnectWithoutGrantedІnputFileErdInput
    upsert?: StorageFileUpsertWithoutGrantedІnputFileErdInput
    disconnect?: StorageFileWhereInput | boolean
    delete?: StorageFileWhereInput | boolean
    connect?: StorageFileWhereUniqueInput
    update?: XOR<XOR<StorageFileUpdateToOneWithWhereWithoutGrantedІnputFileErdInput, StorageFileUpdateWithoutGrantedІnputFileErdInput>, StorageFileUncheckedUpdateWithoutGrantedІnputFileErdInput>
  }

  export type StorageFileUpdateOneWithoutAcceptedІnputFileErdNestedInput = {
    create?: XOR<StorageFileCreateWithoutAcceptedІnputFileErdInput, StorageFileUncheckedCreateWithoutAcceptedІnputFileErdInput>
    connectOrCreate?: StorageFileCreateOrConnectWithoutAcceptedІnputFileErdInput
    upsert?: StorageFileUpsertWithoutAcceptedІnputFileErdInput
    disconnect?: StorageFileWhereInput | boolean
    delete?: StorageFileWhereInput | boolean
    connect?: StorageFileWhereUniqueInput
    update?: XOR<XOR<StorageFileUpdateToOneWithWhereWithoutAcceptedІnputFileErdInput, StorageFileUpdateWithoutAcceptedІnputFileErdInput>, StorageFileUncheckedUpdateWithoutAcceptedІnputFileErdInput>
  }

  export type StorageFileUpdateOneWithoutResultFileErdNestedInput = {
    create?: XOR<StorageFileCreateWithoutResultFileErdInput, StorageFileUncheckedCreateWithoutResultFileErdInput>
    connectOrCreate?: StorageFileCreateOrConnectWithoutResultFileErdInput
    upsert?: StorageFileUpsertWithoutResultFileErdInput
    disconnect?: StorageFileWhereInput | boolean
    delete?: StorageFileWhereInput | boolean
    connect?: StorageFileWhereUniqueInput
    update?: XOR<XOR<StorageFileUpdateToOneWithWhereWithoutResultFileErdInput, StorageFileUpdateWithoutResultFileErdInput>, StorageFileUncheckedUpdateWithoutResultFileErdInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedEnumDmsuStageFilter<$PrismaModel = never> = {
    equals?: $Enums.DmsuStage | EnumDmsuStageFieldRefInput<$PrismaModel>
    in?: $Enums.DmsuStage[] | ListEnumDmsuStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.DmsuStage[] | ListEnumDmsuStageFieldRefInput<$PrismaModel>
    not?: NestedEnumDmsuStageFilter<$PrismaModel> | $Enums.DmsuStage
  }

  export type NestedEnumDmsuStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DmsuStage | EnumDmsuStageFieldRefInput<$PrismaModel>
    in?: $Enums.DmsuStage[] | ListEnumDmsuStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.DmsuStage[] | ListEnumDmsuStageFieldRefInput<$PrismaModel>
    not?: NestedEnumDmsuStageWithAggregatesFilter<$PrismaModel> | $Enums.DmsuStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDmsuStageFilter<$PrismaModel>
    _max?: NestedEnumDmsuStageFilter<$PrismaModel>
  }

  export type NestedEnumPfuStageFilter<$PrismaModel = never> = {
    equals?: $Enums.PfuStage | EnumPfuStageFieldRefInput<$PrismaModel>
    in?: $Enums.PfuStage[] | ListEnumPfuStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.PfuStage[] | ListEnumPfuStageFieldRefInput<$PrismaModel>
    not?: NestedEnumPfuStageFilter<$PrismaModel> | $Enums.PfuStage
  }

  export type NestedEnumPfuStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PfuStage | EnumPfuStageFieldRefInput<$PrismaModel>
    in?: $Enums.PfuStage[] | ListEnumPfuStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.PfuStage[] | ListEnumPfuStageFieldRefInput<$PrismaModel>
    not?: NestedEnumPfuStageWithAggregatesFilter<$PrismaModel> | $Enums.PfuStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPfuStageFilter<$PrismaModel>
    _max?: NestedEnumPfuStageFilter<$PrismaModel>
  }

  export type NestedEnumErdStageFilter<$PrismaModel = never> = {
    equals?: $Enums.ErdStage | EnumErdStageFieldRefInput<$PrismaModel>
    in?: $Enums.ErdStage[] | ListEnumErdStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.ErdStage[] | ListEnumErdStageFieldRefInput<$PrismaModel>
    not?: NestedEnumErdStageFilter<$PrismaModel> | $Enums.ErdStage
  }

  export type NestedEnumErdStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ErdStage | EnumErdStageFieldRefInput<$PrismaModel>
    in?: $Enums.ErdStage[] | ListEnumErdStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.ErdStage[] | ListEnumErdStageFieldRefInput<$PrismaModel>
    not?: NestedEnumErdStageWithAggregatesFilter<$PrismaModel> | $Enums.ErdStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumErdStageFilter<$PrismaModel>
    _max?: NestedEnumErdStageFilter<$PrismaModel>
  }

  export type ProcessCreateWithoutUserInput = {
    id?: string
    status?: $Enums.Status
    owner?: string | null
    type: $Enums.ProcessType
    createdAt?: Date | string
    finishedAt?: Date | string | null
    hstsMvs?: ProcessHstsMvsCreateNestedOneWithoutProcessInput
    dmsu?: ProcessDmsuCreateNestedOneWithoutProcessInput
    pfu?: ProcessPfuCreateNestedOneWithoutProcessInput
    erd?: ProcessErdCreateNestedOneWithoutProcessInput
  }

  export type ProcessUncheckedCreateWithoutUserInput = {
    id?: string
    status?: $Enums.Status
    owner?: string | null
    type: $Enums.ProcessType
    createdAt?: Date | string
    finishedAt?: Date | string | null
    hstsMvs?: ProcessHstsMvsUncheckedCreateNestedOneWithoutProcessInput
    dmsu?: ProcessDmsuUncheckedCreateNestedOneWithoutProcessInput
    pfu?: ProcessPfuUncheckedCreateNestedOneWithoutProcessInput
    erd?: ProcessErdUncheckedCreateNestedOneWithoutProcessInput
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
    finishedAt?: DateTimeNullableFilter<"Process"> | Date | string | null
  }

  export type ProcessHstsMvsCreateWithoutDriverLicenseFileInput = {
    isAi?: boolean
    stage?: $Enums.HstsMvsStage
    errorMessage?: string | null
    process: ProcessCreateNestedOneWithoutHstsMvsInput
    carInfoFile: StorageFileCreateNestedOneWithoutCarInfoProcessesInput
    resultFile?: StorageFileCreateNestedOneWithoutResultProcessesHstsMvsInput
  }

  export type ProcessHstsMvsUncheckedCreateWithoutDriverLicenseFileInput = {
    processId: string
    carInfoFileId: string
    resultFileId?: string | null
    isAi?: boolean
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
    isAi?: boolean
    stage?: $Enums.HstsMvsStage
    errorMessage?: string | null
    process: ProcessCreateNestedOneWithoutHstsMvsInput
    driverLicenseFile?: StorageFileCreateNestedOneWithoutDriverLicenseProcessesInput
    resultFile?: StorageFileCreateNestedOneWithoutResultProcessesHstsMvsInput
  }

  export type ProcessHstsMvsUncheckedCreateWithoutCarInfoFileInput = {
    processId: string
    driverLicenseFileId?: string | null
    resultFileId?: string | null
    isAi?: boolean
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
    isAi?: boolean
    stage?: $Enums.HstsMvsStage
    errorMessage?: string | null
    process: ProcessCreateNestedOneWithoutHstsMvsInput
    driverLicenseFile?: StorageFileCreateNestedOneWithoutDriverLicenseProcessesInput
    carInfoFile: StorageFileCreateNestedOneWithoutCarInfoProcessesInput
  }

  export type ProcessHstsMvsUncheckedCreateWithoutResultFileInput = {
    processId: string
    driverLicenseFileId?: string | null
    carInfoFileId: string
    isAi?: boolean
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

  export type ProcessDmsuCreateWithoutPersonInfoFileInput = {
    isAi?: boolean
    stage?: $Enums.DmsuStage
    errorMessage?: string | null
    process: ProcessCreateNestedOneWithoutDmsuInput
    resultFile?: StorageFileCreateNestedOneWithoutResultProcessesDmsuInput
    withoutWMFile?: StorageFileCreateNestedOneWithoutWithoutWMProcessesInput
  }

  export type ProcessDmsuUncheckedCreateWithoutPersonInfoFileInput = {
    processId: string
    resultFileId?: string | null
    withoutWMFileId?: string | null
    isAi?: boolean
    stage?: $Enums.DmsuStage
    errorMessage?: string | null
  }

  export type ProcessDmsuCreateOrConnectWithoutPersonInfoFileInput = {
    where: ProcessDmsuWhereUniqueInput
    create: XOR<ProcessDmsuCreateWithoutPersonInfoFileInput, ProcessDmsuUncheckedCreateWithoutPersonInfoFileInput>
  }

  export type ProcessDmsuCreateManyPersonInfoFileInputEnvelope = {
    data: ProcessDmsuCreateManyPersonInfoFileInput | ProcessDmsuCreateManyPersonInfoFileInput[]
    skipDuplicates?: boolean
  }

  export type ProcessDmsuCreateWithoutResultFileInput = {
    isAi?: boolean
    stage?: $Enums.DmsuStage
    errorMessage?: string | null
    process: ProcessCreateNestedOneWithoutDmsuInput
    personInfoFile: StorageFileCreateNestedOneWithoutPersonInfoProcessesInput
    withoutWMFile?: StorageFileCreateNestedOneWithoutWithoutWMProcessesInput
  }

  export type ProcessDmsuUncheckedCreateWithoutResultFileInput = {
    processId: string
    personInfoFileId: string
    withoutWMFileId?: string | null
    isAi?: boolean
    stage?: $Enums.DmsuStage
    errorMessage?: string | null
  }

  export type ProcessDmsuCreateOrConnectWithoutResultFileInput = {
    where: ProcessDmsuWhereUniqueInput
    create: XOR<ProcessDmsuCreateWithoutResultFileInput, ProcessDmsuUncheckedCreateWithoutResultFileInput>
  }

  export type ProcessDmsuCreateManyResultFileInputEnvelope = {
    data: ProcessDmsuCreateManyResultFileInput | ProcessDmsuCreateManyResultFileInput[]
    skipDuplicates?: boolean
  }

  export type ProcessDmsuCreateWithoutWithoutWMFileInput = {
    isAi?: boolean
    stage?: $Enums.DmsuStage
    errorMessage?: string | null
    process: ProcessCreateNestedOneWithoutDmsuInput
    personInfoFile: StorageFileCreateNestedOneWithoutPersonInfoProcessesInput
    resultFile?: StorageFileCreateNestedOneWithoutResultProcessesDmsuInput
  }

  export type ProcessDmsuUncheckedCreateWithoutWithoutWMFileInput = {
    processId: string
    personInfoFileId: string
    resultFileId?: string | null
    isAi?: boolean
    stage?: $Enums.DmsuStage
    errorMessage?: string | null
  }

  export type ProcessDmsuCreateOrConnectWithoutWithoutWMFileInput = {
    where: ProcessDmsuWhereUniqueInput
    create: XOR<ProcessDmsuCreateWithoutWithoutWMFileInput, ProcessDmsuUncheckedCreateWithoutWithoutWMFileInput>
  }

  export type ProcessDmsuCreateManyWithoutWMFileInputEnvelope = {
    data: ProcessDmsuCreateManyWithoutWMFileInput | ProcessDmsuCreateManyWithoutWMFileInput[]
    skipDuplicates?: boolean
  }

  export type ProcessPfuCreateWithoutInputFileInput = {
    isAi?: boolean
    stage?: $Enums.PfuStage
    errorMessage?: string | null
    process: ProcessCreateNestedOneWithoutPfuInput
    resultFile?: StorageFileCreateNestedOneWithoutResultFilePfuInput
  }

  export type ProcessPfuUncheckedCreateWithoutInputFileInput = {
    processId: string
    resultFileId?: string | null
    isAi?: boolean
    stage?: $Enums.PfuStage
    errorMessage?: string | null
  }

  export type ProcessPfuCreateOrConnectWithoutInputFileInput = {
    where: ProcessPfuWhereUniqueInput
    create: XOR<ProcessPfuCreateWithoutInputFileInput, ProcessPfuUncheckedCreateWithoutInputFileInput>
  }

  export type ProcessPfuCreateManyInputFileInputEnvelope = {
    data: ProcessPfuCreateManyInputFileInput | ProcessPfuCreateManyInputFileInput[]
    skipDuplicates?: boolean
  }

  export type ProcessPfuCreateWithoutResultFileInput = {
    isAi?: boolean
    stage?: $Enums.PfuStage
    errorMessage?: string | null
    process: ProcessCreateNestedOneWithoutPfuInput
    inputFile: StorageFileCreateNestedOneWithoutInputFilePfuInput
  }

  export type ProcessPfuUncheckedCreateWithoutResultFileInput = {
    processId: string
    inputFileId: string
    isAi?: boolean
    stage?: $Enums.PfuStage
    errorMessage?: string | null
  }

  export type ProcessPfuCreateOrConnectWithoutResultFileInput = {
    where: ProcessPfuWhereUniqueInput
    create: XOR<ProcessPfuCreateWithoutResultFileInput, ProcessPfuUncheckedCreateWithoutResultFileInput>
  }

  export type ProcessPfuCreateManyResultFileInputEnvelope = {
    data: ProcessPfuCreateManyResultFileInput | ProcessPfuCreateManyResultFileInput[]
    skipDuplicates?: boolean
  }

  export type ProcessErdCreateWithoutGrantedІnputFileInput = {
    isAi?: boolean
    stage?: $Enums.ErdStage
    errorMessage?: string | null
    process: ProcessCreateNestedOneWithoutErdInput
    acceptedІnputFile?: StorageFileCreateNestedOneWithoutAcceptedІnputFileErdInput
    resultFile?: StorageFileCreateNestedOneWithoutResultFileErdInput
  }

  export type ProcessErdUncheckedCreateWithoutGrantedІnputFileInput = {
    processId: string
    acceptedІnputFileId?: string | null
    resultFileId?: string | null
    isAi?: boolean
    stage?: $Enums.ErdStage
    errorMessage?: string | null
  }

  export type ProcessErdCreateOrConnectWithoutGrantedІnputFileInput = {
    where: ProcessErdWhereUniqueInput
    create: XOR<ProcessErdCreateWithoutGrantedІnputFileInput, ProcessErdUncheckedCreateWithoutGrantedІnputFileInput>
  }

  export type ProcessErdCreateManyGrantedІnputFileInputEnvelope = {
    data: ProcessErdCreateManyGrantedІnputFileInput | ProcessErdCreateManyGrantedІnputFileInput[]
    skipDuplicates?: boolean
  }

  export type ProcessErdCreateWithoutAcceptedІnputFileInput = {
    isAi?: boolean
    stage?: $Enums.ErdStage
    errorMessage?: string | null
    process: ProcessCreateNestedOneWithoutErdInput
    grantedІnputFile?: StorageFileCreateNestedOneWithoutGrantedІnputFileErdInput
    resultFile?: StorageFileCreateNestedOneWithoutResultFileErdInput
  }

  export type ProcessErdUncheckedCreateWithoutAcceptedІnputFileInput = {
    processId: string
    grantedІnputFileId?: string | null
    resultFileId?: string | null
    isAi?: boolean
    stage?: $Enums.ErdStage
    errorMessage?: string | null
  }

  export type ProcessErdCreateOrConnectWithoutAcceptedІnputFileInput = {
    where: ProcessErdWhereUniqueInput
    create: XOR<ProcessErdCreateWithoutAcceptedІnputFileInput, ProcessErdUncheckedCreateWithoutAcceptedІnputFileInput>
  }

  export type ProcessErdCreateManyAcceptedІnputFileInputEnvelope = {
    data: ProcessErdCreateManyAcceptedІnputFileInput | ProcessErdCreateManyAcceptedІnputFileInput[]
    skipDuplicates?: boolean
  }

  export type ProcessErdCreateWithoutResultFileInput = {
    isAi?: boolean
    stage?: $Enums.ErdStage
    errorMessage?: string | null
    process: ProcessCreateNestedOneWithoutErdInput
    grantedІnputFile?: StorageFileCreateNestedOneWithoutGrantedІnputFileErdInput
    acceptedІnputFile?: StorageFileCreateNestedOneWithoutAcceptedІnputFileErdInput
  }

  export type ProcessErdUncheckedCreateWithoutResultFileInput = {
    processId: string
    grantedІnputFileId?: string | null
    acceptedІnputFileId?: string | null
    isAi?: boolean
    stage?: $Enums.ErdStage
    errorMessage?: string | null
  }

  export type ProcessErdCreateOrConnectWithoutResultFileInput = {
    where: ProcessErdWhereUniqueInput
    create: XOR<ProcessErdCreateWithoutResultFileInput, ProcessErdUncheckedCreateWithoutResultFileInput>
  }

  export type ProcessErdCreateManyResultFileInputEnvelope = {
    data: ProcessErdCreateManyResultFileInput | ProcessErdCreateManyResultFileInput[]
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
    driverLicenseFileId?: StringNullableFilter<"ProcessHstsMvs"> | string | null
    carInfoFileId?: StringFilter<"ProcessHstsMvs"> | string
    resultFileId?: StringNullableFilter<"ProcessHstsMvs"> | string | null
    isAi?: BoolFilter<"ProcessHstsMvs"> | boolean
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

  export type ProcessDmsuUpsertWithWhereUniqueWithoutPersonInfoFileInput = {
    where: ProcessDmsuWhereUniqueInput
    update: XOR<ProcessDmsuUpdateWithoutPersonInfoFileInput, ProcessDmsuUncheckedUpdateWithoutPersonInfoFileInput>
    create: XOR<ProcessDmsuCreateWithoutPersonInfoFileInput, ProcessDmsuUncheckedCreateWithoutPersonInfoFileInput>
  }

  export type ProcessDmsuUpdateWithWhereUniqueWithoutPersonInfoFileInput = {
    where: ProcessDmsuWhereUniqueInput
    data: XOR<ProcessDmsuUpdateWithoutPersonInfoFileInput, ProcessDmsuUncheckedUpdateWithoutPersonInfoFileInput>
  }

  export type ProcessDmsuUpdateManyWithWhereWithoutPersonInfoFileInput = {
    where: ProcessDmsuScalarWhereInput
    data: XOR<ProcessDmsuUpdateManyMutationInput, ProcessDmsuUncheckedUpdateManyWithoutPersonInfoFileInput>
  }

  export type ProcessDmsuScalarWhereInput = {
    AND?: ProcessDmsuScalarWhereInput | ProcessDmsuScalarWhereInput[]
    OR?: ProcessDmsuScalarWhereInput[]
    NOT?: ProcessDmsuScalarWhereInput | ProcessDmsuScalarWhereInput[]
    processId?: StringFilter<"ProcessDmsu"> | string
    personInfoFileId?: StringFilter<"ProcessDmsu"> | string
    resultFileId?: StringNullableFilter<"ProcessDmsu"> | string | null
    withoutWMFileId?: StringNullableFilter<"ProcessDmsu"> | string | null
    isAi?: BoolFilter<"ProcessDmsu"> | boolean
    stage?: EnumDmsuStageFilter<"ProcessDmsu"> | $Enums.DmsuStage
    errorMessage?: StringNullableFilter<"ProcessDmsu"> | string | null
  }

  export type ProcessDmsuUpsertWithWhereUniqueWithoutResultFileInput = {
    where: ProcessDmsuWhereUniqueInput
    update: XOR<ProcessDmsuUpdateWithoutResultFileInput, ProcessDmsuUncheckedUpdateWithoutResultFileInput>
    create: XOR<ProcessDmsuCreateWithoutResultFileInput, ProcessDmsuUncheckedCreateWithoutResultFileInput>
  }

  export type ProcessDmsuUpdateWithWhereUniqueWithoutResultFileInput = {
    where: ProcessDmsuWhereUniqueInput
    data: XOR<ProcessDmsuUpdateWithoutResultFileInput, ProcessDmsuUncheckedUpdateWithoutResultFileInput>
  }

  export type ProcessDmsuUpdateManyWithWhereWithoutResultFileInput = {
    where: ProcessDmsuScalarWhereInput
    data: XOR<ProcessDmsuUpdateManyMutationInput, ProcessDmsuUncheckedUpdateManyWithoutResultFileInput>
  }

  export type ProcessDmsuUpsertWithWhereUniqueWithoutWithoutWMFileInput = {
    where: ProcessDmsuWhereUniqueInput
    update: XOR<ProcessDmsuUpdateWithoutWithoutWMFileInput, ProcessDmsuUncheckedUpdateWithoutWithoutWMFileInput>
    create: XOR<ProcessDmsuCreateWithoutWithoutWMFileInput, ProcessDmsuUncheckedCreateWithoutWithoutWMFileInput>
  }

  export type ProcessDmsuUpdateWithWhereUniqueWithoutWithoutWMFileInput = {
    where: ProcessDmsuWhereUniqueInput
    data: XOR<ProcessDmsuUpdateWithoutWithoutWMFileInput, ProcessDmsuUncheckedUpdateWithoutWithoutWMFileInput>
  }

  export type ProcessDmsuUpdateManyWithWhereWithoutWithoutWMFileInput = {
    where: ProcessDmsuScalarWhereInput
    data: XOR<ProcessDmsuUpdateManyMutationInput, ProcessDmsuUncheckedUpdateManyWithoutWithoutWMFileInput>
  }

  export type ProcessPfuUpsertWithWhereUniqueWithoutInputFileInput = {
    where: ProcessPfuWhereUniqueInput
    update: XOR<ProcessPfuUpdateWithoutInputFileInput, ProcessPfuUncheckedUpdateWithoutInputFileInput>
    create: XOR<ProcessPfuCreateWithoutInputFileInput, ProcessPfuUncheckedCreateWithoutInputFileInput>
  }

  export type ProcessPfuUpdateWithWhereUniqueWithoutInputFileInput = {
    where: ProcessPfuWhereUniqueInput
    data: XOR<ProcessPfuUpdateWithoutInputFileInput, ProcessPfuUncheckedUpdateWithoutInputFileInput>
  }

  export type ProcessPfuUpdateManyWithWhereWithoutInputFileInput = {
    where: ProcessPfuScalarWhereInput
    data: XOR<ProcessPfuUpdateManyMutationInput, ProcessPfuUncheckedUpdateManyWithoutInputFileInput>
  }

  export type ProcessPfuScalarWhereInput = {
    AND?: ProcessPfuScalarWhereInput | ProcessPfuScalarWhereInput[]
    OR?: ProcessPfuScalarWhereInput[]
    NOT?: ProcessPfuScalarWhereInput | ProcessPfuScalarWhereInput[]
    processId?: StringFilter<"ProcessPfu"> | string
    inputFileId?: StringFilter<"ProcessPfu"> | string
    resultFileId?: StringNullableFilter<"ProcessPfu"> | string | null
    isAi?: BoolFilter<"ProcessPfu"> | boolean
    stage?: EnumPfuStageFilter<"ProcessPfu"> | $Enums.PfuStage
    errorMessage?: StringNullableFilter<"ProcessPfu"> | string | null
  }

  export type ProcessPfuUpsertWithWhereUniqueWithoutResultFileInput = {
    where: ProcessPfuWhereUniqueInput
    update: XOR<ProcessPfuUpdateWithoutResultFileInput, ProcessPfuUncheckedUpdateWithoutResultFileInput>
    create: XOR<ProcessPfuCreateWithoutResultFileInput, ProcessPfuUncheckedCreateWithoutResultFileInput>
  }

  export type ProcessPfuUpdateWithWhereUniqueWithoutResultFileInput = {
    where: ProcessPfuWhereUniqueInput
    data: XOR<ProcessPfuUpdateWithoutResultFileInput, ProcessPfuUncheckedUpdateWithoutResultFileInput>
  }

  export type ProcessPfuUpdateManyWithWhereWithoutResultFileInput = {
    where: ProcessPfuScalarWhereInput
    data: XOR<ProcessPfuUpdateManyMutationInput, ProcessPfuUncheckedUpdateManyWithoutResultFileInput>
  }

  export type ProcessErdUpsertWithWhereUniqueWithoutGrantedІnputFileInput = {
    where: ProcessErdWhereUniqueInput
    update: XOR<ProcessErdUpdateWithoutGrantedІnputFileInput, ProcessErdUncheckedUpdateWithoutGrantedІnputFileInput>
    create: XOR<ProcessErdCreateWithoutGrantedІnputFileInput, ProcessErdUncheckedCreateWithoutGrantedІnputFileInput>
  }

  export type ProcessErdUpdateWithWhereUniqueWithoutGrantedІnputFileInput = {
    where: ProcessErdWhereUniqueInput
    data: XOR<ProcessErdUpdateWithoutGrantedІnputFileInput, ProcessErdUncheckedUpdateWithoutGrantedІnputFileInput>
  }

  export type ProcessErdUpdateManyWithWhereWithoutGrantedІnputFileInput = {
    where: ProcessErdScalarWhereInput
    data: XOR<ProcessErdUpdateManyMutationInput, ProcessErdUncheckedUpdateManyWithoutGrantedІnputFileInput>
  }

  export type ProcessErdScalarWhereInput = {
    AND?: ProcessErdScalarWhereInput | ProcessErdScalarWhereInput[]
    OR?: ProcessErdScalarWhereInput[]
    NOT?: ProcessErdScalarWhereInput | ProcessErdScalarWhereInput[]
    processId?: StringFilter<"ProcessErd"> | string
    grantedІnputFileId?: StringNullableFilter<"ProcessErd"> | string | null
    acceptedІnputFileId?: StringNullableFilter<"ProcessErd"> | string | null
    resultFileId?: StringNullableFilter<"ProcessErd"> | string | null
    isAi?: BoolFilter<"ProcessErd"> | boolean
    stage?: EnumErdStageFilter<"ProcessErd"> | $Enums.ErdStage
    errorMessage?: StringNullableFilter<"ProcessErd"> | string | null
  }

  export type ProcessErdUpsertWithWhereUniqueWithoutAcceptedІnputFileInput = {
    where: ProcessErdWhereUniqueInput
    update: XOR<ProcessErdUpdateWithoutAcceptedІnputFileInput, ProcessErdUncheckedUpdateWithoutAcceptedІnputFileInput>
    create: XOR<ProcessErdCreateWithoutAcceptedІnputFileInput, ProcessErdUncheckedCreateWithoutAcceptedІnputFileInput>
  }

  export type ProcessErdUpdateWithWhereUniqueWithoutAcceptedІnputFileInput = {
    where: ProcessErdWhereUniqueInput
    data: XOR<ProcessErdUpdateWithoutAcceptedІnputFileInput, ProcessErdUncheckedUpdateWithoutAcceptedІnputFileInput>
  }

  export type ProcessErdUpdateManyWithWhereWithoutAcceptedІnputFileInput = {
    where: ProcessErdScalarWhereInput
    data: XOR<ProcessErdUpdateManyMutationInput, ProcessErdUncheckedUpdateManyWithoutAcceptedІnputFileInput>
  }

  export type ProcessErdUpsertWithWhereUniqueWithoutResultFileInput = {
    where: ProcessErdWhereUniqueInput
    update: XOR<ProcessErdUpdateWithoutResultFileInput, ProcessErdUncheckedUpdateWithoutResultFileInput>
    create: XOR<ProcessErdCreateWithoutResultFileInput, ProcessErdUncheckedCreateWithoutResultFileInput>
  }

  export type ProcessErdUpdateWithWhereUniqueWithoutResultFileInput = {
    where: ProcessErdWhereUniqueInput
    data: XOR<ProcessErdUpdateWithoutResultFileInput, ProcessErdUncheckedUpdateWithoutResultFileInput>
  }

  export type ProcessErdUpdateManyWithWhereWithoutResultFileInput = {
    where: ProcessErdScalarWhereInput
    data: XOR<ProcessErdUpdateManyMutationInput, ProcessErdUncheckedUpdateManyWithoutResultFileInput>
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
    isAi?: boolean
    stage?: $Enums.HstsMvsStage
    errorMessage?: string | null
    driverLicenseFile?: StorageFileCreateNestedOneWithoutDriverLicenseProcessesInput
    carInfoFile: StorageFileCreateNestedOneWithoutCarInfoProcessesInput
    resultFile?: StorageFileCreateNestedOneWithoutResultProcessesHstsMvsInput
  }

  export type ProcessHstsMvsUncheckedCreateWithoutProcessInput = {
    driverLicenseFileId?: string | null
    carInfoFileId: string
    resultFileId?: string | null
    isAi?: boolean
    stage?: $Enums.HstsMvsStage
    errorMessage?: string | null
  }

  export type ProcessHstsMvsCreateOrConnectWithoutProcessInput = {
    where: ProcessHstsMvsWhereUniqueInput
    create: XOR<ProcessHstsMvsCreateWithoutProcessInput, ProcessHstsMvsUncheckedCreateWithoutProcessInput>
  }

  export type ProcessDmsuCreateWithoutProcessInput = {
    isAi?: boolean
    stage?: $Enums.DmsuStage
    errorMessage?: string | null
    personInfoFile: StorageFileCreateNestedOneWithoutPersonInfoProcessesInput
    resultFile?: StorageFileCreateNestedOneWithoutResultProcessesDmsuInput
    withoutWMFile?: StorageFileCreateNestedOneWithoutWithoutWMProcessesInput
  }

  export type ProcessDmsuUncheckedCreateWithoutProcessInput = {
    personInfoFileId: string
    resultFileId?: string | null
    withoutWMFileId?: string | null
    isAi?: boolean
    stage?: $Enums.DmsuStage
    errorMessage?: string | null
  }

  export type ProcessDmsuCreateOrConnectWithoutProcessInput = {
    where: ProcessDmsuWhereUniqueInput
    create: XOR<ProcessDmsuCreateWithoutProcessInput, ProcessDmsuUncheckedCreateWithoutProcessInput>
  }

  export type ProcessPfuCreateWithoutProcessInput = {
    isAi?: boolean
    stage?: $Enums.PfuStage
    errorMessage?: string | null
    inputFile: StorageFileCreateNestedOneWithoutInputFilePfuInput
    resultFile?: StorageFileCreateNestedOneWithoutResultFilePfuInput
  }

  export type ProcessPfuUncheckedCreateWithoutProcessInput = {
    inputFileId: string
    resultFileId?: string | null
    isAi?: boolean
    stage?: $Enums.PfuStage
    errorMessage?: string | null
  }

  export type ProcessPfuCreateOrConnectWithoutProcessInput = {
    where: ProcessPfuWhereUniqueInput
    create: XOR<ProcessPfuCreateWithoutProcessInput, ProcessPfuUncheckedCreateWithoutProcessInput>
  }

  export type ProcessErdCreateWithoutProcessInput = {
    isAi?: boolean
    stage?: $Enums.ErdStage
    errorMessage?: string | null
    grantedІnputFile?: StorageFileCreateNestedOneWithoutGrantedІnputFileErdInput
    acceptedІnputFile?: StorageFileCreateNestedOneWithoutAcceptedІnputFileErdInput
    resultFile?: StorageFileCreateNestedOneWithoutResultFileErdInput
  }

  export type ProcessErdUncheckedCreateWithoutProcessInput = {
    grantedІnputFileId?: string | null
    acceptedІnputFileId?: string | null
    resultFileId?: string | null
    isAi?: boolean
    stage?: $Enums.ErdStage
    errorMessage?: string | null
  }

  export type ProcessErdCreateOrConnectWithoutProcessInput = {
    where: ProcessErdWhereUniqueInput
    create: XOR<ProcessErdCreateWithoutProcessInput, ProcessErdUncheckedCreateWithoutProcessInput>
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
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    driverLicenseFile?: StorageFileUpdateOneWithoutDriverLicenseProcessesNestedInput
    carInfoFile?: StorageFileUpdateOneRequiredWithoutCarInfoProcessesNestedInput
    resultFile?: StorageFileUpdateOneWithoutResultProcessesHstsMvsNestedInput
  }

  export type ProcessHstsMvsUncheckedUpdateWithoutProcessInput = {
    driverLicenseFileId?: NullableStringFieldUpdateOperationsInput | string | null
    carInfoFileId?: StringFieldUpdateOperationsInput | string
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessDmsuUpsertWithoutProcessInput = {
    update: XOR<ProcessDmsuUpdateWithoutProcessInput, ProcessDmsuUncheckedUpdateWithoutProcessInput>
    create: XOR<ProcessDmsuCreateWithoutProcessInput, ProcessDmsuUncheckedCreateWithoutProcessInput>
    where?: ProcessDmsuWhereInput
  }

  export type ProcessDmsuUpdateToOneWithWhereWithoutProcessInput = {
    where?: ProcessDmsuWhereInput
    data: XOR<ProcessDmsuUpdateWithoutProcessInput, ProcessDmsuUncheckedUpdateWithoutProcessInput>
  }

  export type ProcessDmsuUpdateWithoutProcessInput = {
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumDmsuStageFieldUpdateOperationsInput | $Enums.DmsuStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    personInfoFile?: StorageFileUpdateOneRequiredWithoutPersonInfoProcessesNestedInput
    resultFile?: StorageFileUpdateOneWithoutResultProcessesDmsuNestedInput
    withoutWMFile?: StorageFileUpdateOneWithoutWithoutWMProcessesNestedInput
  }

  export type ProcessDmsuUncheckedUpdateWithoutProcessInput = {
    personInfoFileId?: StringFieldUpdateOperationsInput | string
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    withoutWMFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumDmsuStageFieldUpdateOperationsInput | $Enums.DmsuStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessPfuUpsertWithoutProcessInput = {
    update: XOR<ProcessPfuUpdateWithoutProcessInput, ProcessPfuUncheckedUpdateWithoutProcessInput>
    create: XOR<ProcessPfuCreateWithoutProcessInput, ProcessPfuUncheckedCreateWithoutProcessInput>
    where?: ProcessPfuWhereInput
  }

  export type ProcessPfuUpdateToOneWithWhereWithoutProcessInput = {
    where?: ProcessPfuWhereInput
    data: XOR<ProcessPfuUpdateWithoutProcessInput, ProcessPfuUncheckedUpdateWithoutProcessInput>
  }

  export type ProcessPfuUpdateWithoutProcessInput = {
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumPfuStageFieldUpdateOperationsInput | $Enums.PfuStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    inputFile?: StorageFileUpdateOneRequiredWithoutInputFilePfuNestedInput
    resultFile?: StorageFileUpdateOneWithoutResultFilePfuNestedInput
  }

  export type ProcessPfuUncheckedUpdateWithoutProcessInput = {
    inputFileId?: StringFieldUpdateOperationsInput | string
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumPfuStageFieldUpdateOperationsInput | $Enums.PfuStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessErdUpsertWithoutProcessInput = {
    update: XOR<ProcessErdUpdateWithoutProcessInput, ProcessErdUncheckedUpdateWithoutProcessInput>
    create: XOR<ProcessErdCreateWithoutProcessInput, ProcessErdUncheckedCreateWithoutProcessInput>
    where?: ProcessErdWhereInput
  }

  export type ProcessErdUpdateToOneWithWhereWithoutProcessInput = {
    where?: ProcessErdWhereInput
    data: XOR<ProcessErdUpdateWithoutProcessInput, ProcessErdUncheckedUpdateWithoutProcessInput>
  }

  export type ProcessErdUpdateWithoutProcessInput = {
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumErdStageFieldUpdateOperationsInput | $Enums.ErdStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    grantedІnputFile?: StorageFileUpdateOneWithoutGrantedІnputFileErdNestedInput
    acceptedІnputFile?: StorageFileUpdateOneWithoutAcceptedІnputFileErdNestedInput
    resultFile?: StorageFileUpdateOneWithoutResultFileErdNestedInput
  }

  export type ProcessErdUncheckedUpdateWithoutProcessInput = {
    grantedІnputFileId?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedІnputFileId?: NullableStringFieldUpdateOperationsInput | string | null
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumErdStageFieldUpdateOperationsInput | $Enums.ErdStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessCreateWithoutHstsMvsInput = {
    id?: string
    status?: $Enums.Status
    owner?: string | null
    type: $Enums.ProcessType
    createdAt?: Date | string
    finishedAt?: Date | string | null
    user: UserCreateNestedOneWithoutProcessesInput
    dmsu?: ProcessDmsuCreateNestedOneWithoutProcessInput
    pfu?: ProcessPfuCreateNestedOneWithoutProcessInput
    erd?: ProcessErdCreateNestedOneWithoutProcessInput
  }

  export type ProcessUncheckedCreateWithoutHstsMvsInput = {
    id?: string
    status?: $Enums.Status
    userId: string
    owner?: string | null
    type: $Enums.ProcessType
    createdAt?: Date | string
    finishedAt?: Date | string | null
    dmsu?: ProcessDmsuUncheckedCreateNestedOneWithoutProcessInput
    pfu?: ProcessPfuUncheckedCreateNestedOneWithoutProcessInput
    erd?: ProcessErdUncheckedCreateNestedOneWithoutProcessInput
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
    resultProcessesHstsMvs?: ProcessHstsMvsCreateNestedManyWithoutResultFileInput
    personInfoProcesses?: ProcessDmsuCreateNestedManyWithoutPersonInfoFileInput
    resultProcessesDmsu?: ProcessDmsuCreateNestedManyWithoutResultFileInput
    withoutWMProcesses?: ProcessDmsuCreateNestedManyWithoutWithoutWMFileInput
    inputFilePfu?: ProcessPfuCreateNestedManyWithoutInputFileInput
    resultFilePfu?: ProcessPfuCreateNestedManyWithoutResultFileInput
    grantedІnputFileErd?: ProcessErdCreateNestedManyWithoutGrantedІnputFileInput
    acceptedІnputFileErd?: ProcessErdCreateNestedManyWithoutAcceptedІnputFileInput
    resultFileErd?: ProcessErdCreateNestedManyWithoutResultFileInput
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
    resultProcessesHstsMvs?: ProcessHstsMvsUncheckedCreateNestedManyWithoutResultFileInput
    personInfoProcesses?: ProcessDmsuUncheckedCreateNestedManyWithoutPersonInfoFileInput
    resultProcessesDmsu?: ProcessDmsuUncheckedCreateNestedManyWithoutResultFileInput
    withoutWMProcesses?: ProcessDmsuUncheckedCreateNestedManyWithoutWithoutWMFileInput
    inputFilePfu?: ProcessPfuUncheckedCreateNestedManyWithoutInputFileInput
    resultFilePfu?: ProcessPfuUncheckedCreateNestedManyWithoutResultFileInput
    grantedІnputFileErd?: ProcessErdUncheckedCreateNestedManyWithoutGrantedІnputFileInput
    acceptedІnputFileErd?: ProcessErdUncheckedCreateNestedManyWithoutAcceptedІnputFileInput
    resultFileErd?: ProcessErdUncheckedCreateNestedManyWithoutResultFileInput
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
    resultProcessesHstsMvs?: ProcessHstsMvsCreateNestedManyWithoutResultFileInput
    personInfoProcesses?: ProcessDmsuCreateNestedManyWithoutPersonInfoFileInput
    resultProcessesDmsu?: ProcessDmsuCreateNestedManyWithoutResultFileInput
    withoutWMProcesses?: ProcessDmsuCreateNestedManyWithoutWithoutWMFileInput
    inputFilePfu?: ProcessPfuCreateNestedManyWithoutInputFileInput
    resultFilePfu?: ProcessPfuCreateNestedManyWithoutResultFileInput
    grantedІnputFileErd?: ProcessErdCreateNestedManyWithoutGrantedІnputFileInput
    acceptedІnputFileErd?: ProcessErdCreateNestedManyWithoutAcceptedІnputFileInput
    resultFileErd?: ProcessErdCreateNestedManyWithoutResultFileInput
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
    resultProcessesHstsMvs?: ProcessHstsMvsUncheckedCreateNestedManyWithoutResultFileInput
    personInfoProcesses?: ProcessDmsuUncheckedCreateNestedManyWithoutPersonInfoFileInput
    resultProcessesDmsu?: ProcessDmsuUncheckedCreateNestedManyWithoutResultFileInput
    withoutWMProcesses?: ProcessDmsuUncheckedCreateNestedManyWithoutWithoutWMFileInput
    inputFilePfu?: ProcessPfuUncheckedCreateNestedManyWithoutInputFileInput
    resultFilePfu?: ProcessPfuUncheckedCreateNestedManyWithoutResultFileInput
    grantedІnputFileErd?: ProcessErdUncheckedCreateNestedManyWithoutGrantedІnputFileInput
    acceptedІnputFileErd?: ProcessErdUncheckedCreateNestedManyWithoutAcceptedІnputFileInput
    resultFileErd?: ProcessErdUncheckedCreateNestedManyWithoutResultFileInput
  }

  export type StorageFileCreateOrConnectWithoutCarInfoProcessesInput = {
    where: StorageFileWhereUniqueInput
    create: XOR<StorageFileCreateWithoutCarInfoProcessesInput, StorageFileUncheckedCreateWithoutCarInfoProcessesInput>
  }

  export type StorageFileCreateWithoutResultProcessesHstsMvsInput = {
    id?: string
    inputFilename: string
    outputFilename?: string | null
    extension: string
    size: number
    bucket: string
    path: string
    driverLicenseProcesses?: ProcessHstsMvsCreateNestedManyWithoutDriverLicenseFileInput
    carInfoProcesses?: ProcessHstsMvsCreateNestedManyWithoutCarInfoFileInput
    personInfoProcesses?: ProcessDmsuCreateNestedManyWithoutPersonInfoFileInput
    resultProcessesDmsu?: ProcessDmsuCreateNestedManyWithoutResultFileInput
    withoutWMProcesses?: ProcessDmsuCreateNestedManyWithoutWithoutWMFileInput
    inputFilePfu?: ProcessPfuCreateNestedManyWithoutInputFileInput
    resultFilePfu?: ProcessPfuCreateNestedManyWithoutResultFileInput
    grantedІnputFileErd?: ProcessErdCreateNestedManyWithoutGrantedІnputFileInput
    acceptedІnputFileErd?: ProcessErdCreateNestedManyWithoutAcceptedІnputFileInput
    resultFileErd?: ProcessErdCreateNestedManyWithoutResultFileInput
  }

  export type StorageFileUncheckedCreateWithoutResultProcessesHstsMvsInput = {
    id?: string
    inputFilename: string
    outputFilename?: string | null
    extension: string
    size: number
    bucket: string
    path: string
    driverLicenseProcesses?: ProcessHstsMvsUncheckedCreateNestedManyWithoutDriverLicenseFileInput
    carInfoProcesses?: ProcessHstsMvsUncheckedCreateNestedManyWithoutCarInfoFileInput
    personInfoProcesses?: ProcessDmsuUncheckedCreateNestedManyWithoutPersonInfoFileInput
    resultProcessesDmsu?: ProcessDmsuUncheckedCreateNestedManyWithoutResultFileInput
    withoutWMProcesses?: ProcessDmsuUncheckedCreateNestedManyWithoutWithoutWMFileInput
    inputFilePfu?: ProcessPfuUncheckedCreateNestedManyWithoutInputFileInput
    resultFilePfu?: ProcessPfuUncheckedCreateNestedManyWithoutResultFileInput
    grantedІnputFileErd?: ProcessErdUncheckedCreateNestedManyWithoutGrantedІnputFileInput
    acceptedІnputFileErd?: ProcessErdUncheckedCreateNestedManyWithoutAcceptedІnputFileInput
    resultFileErd?: ProcessErdUncheckedCreateNestedManyWithoutResultFileInput
  }

  export type StorageFileCreateOrConnectWithoutResultProcessesHstsMvsInput = {
    where: StorageFileWhereUniqueInput
    create: XOR<StorageFileCreateWithoutResultProcessesHstsMvsInput, StorageFileUncheckedCreateWithoutResultProcessesHstsMvsInput>
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
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutProcessesNestedInput
    dmsu?: ProcessDmsuUpdateOneWithoutProcessNestedInput
    pfu?: ProcessPfuUpdateOneWithoutProcessNestedInput
    erd?: ProcessErdUpdateOneWithoutProcessNestedInput
  }

  export type ProcessUncheckedUpdateWithoutHstsMvsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dmsu?: ProcessDmsuUncheckedUpdateOneWithoutProcessNestedInput
    pfu?: ProcessPfuUncheckedUpdateOneWithoutProcessNestedInput
    erd?: ProcessErdUncheckedUpdateOneWithoutProcessNestedInput
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
    resultProcessesHstsMvs?: ProcessHstsMvsUpdateManyWithoutResultFileNestedInput
    personInfoProcesses?: ProcessDmsuUpdateManyWithoutPersonInfoFileNestedInput
    resultProcessesDmsu?: ProcessDmsuUpdateManyWithoutResultFileNestedInput
    withoutWMProcesses?: ProcessDmsuUpdateManyWithoutWithoutWMFileNestedInput
    inputFilePfu?: ProcessPfuUpdateManyWithoutInputFileNestedInput
    resultFilePfu?: ProcessPfuUpdateManyWithoutResultFileNestedInput
    grantedІnputFileErd?: ProcessErdUpdateManyWithoutGrantedІnputFileNestedInput
    acceptedІnputFileErd?: ProcessErdUpdateManyWithoutAcceptedІnputFileNestedInput
    resultFileErd?: ProcessErdUpdateManyWithoutResultFileNestedInput
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
    resultProcessesHstsMvs?: ProcessHstsMvsUncheckedUpdateManyWithoutResultFileNestedInput
    personInfoProcesses?: ProcessDmsuUncheckedUpdateManyWithoutPersonInfoFileNestedInput
    resultProcessesDmsu?: ProcessDmsuUncheckedUpdateManyWithoutResultFileNestedInput
    withoutWMProcesses?: ProcessDmsuUncheckedUpdateManyWithoutWithoutWMFileNestedInput
    inputFilePfu?: ProcessPfuUncheckedUpdateManyWithoutInputFileNestedInput
    resultFilePfu?: ProcessPfuUncheckedUpdateManyWithoutResultFileNestedInput
    grantedІnputFileErd?: ProcessErdUncheckedUpdateManyWithoutGrantedІnputFileNestedInput
    acceptedІnputFileErd?: ProcessErdUncheckedUpdateManyWithoutAcceptedІnputFileNestedInput
    resultFileErd?: ProcessErdUncheckedUpdateManyWithoutResultFileNestedInput
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
    resultProcessesHstsMvs?: ProcessHstsMvsUpdateManyWithoutResultFileNestedInput
    personInfoProcesses?: ProcessDmsuUpdateManyWithoutPersonInfoFileNestedInput
    resultProcessesDmsu?: ProcessDmsuUpdateManyWithoutResultFileNestedInput
    withoutWMProcesses?: ProcessDmsuUpdateManyWithoutWithoutWMFileNestedInput
    inputFilePfu?: ProcessPfuUpdateManyWithoutInputFileNestedInput
    resultFilePfu?: ProcessPfuUpdateManyWithoutResultFileNestedInput
    grantedІnputFileErd?: ProcessErdUpdateManyWithoutGrantedІnputFileNestedInput
    acceptedІnputFileErd?: ProcessErdUpdateManyWithoutAcceptedІnputFileNestedInput
    resultFileErd?: ProcessErdUpdateManyWithoutResultFileNestedInput
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
    resultProcessesHstsMvs?: ProcessHstsMvsUncheckedUpdateManyWithoutResultFileNestedInput
    personInfoProcesses?: ProcessDmsuUncheckedUpdateManyWithoutPersonInfoFileNestedInput
    resultProcessesDmsu?: ProcessDmsuUncheckedUpdateManyWithoutResultFileNestedInput
    withoutWMProcesses?: ProcessDmsuUncheckedUpdateManyWithoutWithoutWMFileNestedInput
    inputFilePfu?: ProcessPfuUncheckedUpdateManyWithoutInputFileNestedInput
    resultFilePfu?: ProcessPfuUncheckedUpdateManyWithoutResultFileNestedInput
    grantedІnputFileErd?: ProcessErdUncheckedUpdateManyWithoutGrantedІnputFileNestedInput
    acceptedІnputFileErd?: ProcessErdUncheckedUpdateManyWithoutAcceptedІnputFileNestedInput
    resultFileErd?: ProcessErdUncheckedUpdateManyWithoutResultFileNestedInput
  }

  export type StorageFileUpsertWithoutResultProcessesHstsMvsInput = {
    update: XOR<StorageFileUpdateWithoutResultProcessesHstsMvsInput, StorageFileUncheckedUpdateWithoutResultProcessesHstsMvsInput>
    create: XOR<StorageFileCreateWithoutResultProcessesHstsMvsInput, StorageFileUncheckedCreateWithoutResultProcessesHstsMvsInput>
    where?: StorageFileWhereInput
  }

  export type StorageFileUpdateToOneWithWhereWithoutResultProcessesHstsMvsInput = {
    where?: StorageFileWhereInput
    data: XOR<StorageFileUpdateWithoutResultProcessesHstsMvsInput, StorageFileUncheckedUpdateWithoutResultProcessesHstsMvsInput>
  }

  export type StorageFileUpdateWithoutResultProcessesHstsMvsInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    driverLicenseProcesses?: ProcessHstsMvsUpdateManyWithoutDriverLicenseFileNestedInput
    carInfoProcesses?: ProcessHstsMvsUpdateManyWithoutCarInfoFileNestedInput
    personInfoProcesses?: ProcessDmsuUpdateManyWithoutPersonInfoFileNestedInput
    resultProcessesDmsu?: ProcessDmsuUpdateManyWithoutResultFileNestedInput
    withoutWMProcesses?: ProcessDmsuUpdateManyWithoutWithoutWMFileNestedInput
    inputFilePfu?: ProcessPfuUpdateManyWithoutInputFileNestedInput
    resultFilePfu?: ProcessPfuUpdateManyWithoutResultFileNestedInput
    grantedІnputFileErd?: ProcessErdUpdateManyWithoutGrantedІnputFileNestedInput
    acceptedІnputFileErd?: ProcessErdUpdateManyWithoutAcceptedІnputFileNestedInput
    resultFileErd?: ProcessErdUpdateManyWithoutResultFileNestedInput
  }

  export type StorageFileUncheckedUpdateWithoutResultProcessesHstsMvsInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    driverLicenseProcesses?: ProcessHstsMvsUncheckedUpdateManyWithoutDriverLicenseFileNestedInput
    carInfoProcesses?: ProcessHstsMvsUncheckedUpdateManyWithoutCarInfoFileNestedInput
    personInfoProcesses?: ProcessDmsuUncheckedUpdateManyWithoutPersonInfoFileNestedInput
    resultProcessesDmsu?: ProcessDmsuUncheckedUpdateManyWithoutResultFileNestedInput
    withoutWMProcesses?: ProcessDmsuUncheckedUpdateManyWithoutWithoutWMFileNestedInput
    inputFilePfu?: ProcessPfuUncheckedUpdateManyWithoutInputFileNestedInput
    resultFilePfu?: ProcessPfuUncheckedUpdateManyWithoutResultFileNestedInput
    grantedІnputFileErd?: ProcessErdUncheckedUpdateManyWithoutGrantedІnputFileNestedInput
    acceptedІnputFileErd?: ProcessErdUncheckedUpdateManyWithoutAcceptedІnputFileNestedInput
    resultFileErd?: ProcessErdUncheckedUpdateManyWithoutResultFileNestedInput
  }

  export type ProcessCreateWithoutDmsuInput = {
    id?: string
    status?: $Enums.Status
    owner?: string | null
    type: $Enums.ProcessType
    createdAt?: Date | string
    finishedAt?: Date | string | null
    user: UserCreateNestedOneWithoutProcessesInput
    hstsMvs?: ProcessHstsMvsCreateNestedOneWithoutProcessInput
    pfu?: ProcessPfuCreateNestedOneWithoutProcessInput
    erd?: ProcessErdCreateNestedOneWithoutProcessInput
  }

  export type ProcessUncheckedCreateWithoutDmsuInput = {
    id?: string
    status?: $Enums.Status
    userId: string
    owner?: string | null
    type: $Enums.ProcessType
    createdAt?: Date | string
    finishedAt?: Date | string | null
    hstsMvs?: ProcessHstsMvsUncheckedCreateNestedOneWithoutProcessInput
    pfu?: ProcessPfuUncheckedCreateNestedOneWithoutProcessInput
    erd?: ProcessErdUncheckedCreateNestedOneWithoutProcessInput
  }

  export type ProcessCreateOrConnectWithoutDmsuInput = {
    where: ProcessWhereUniqueInput
    create: XOR<ProcessCreateWithoutDmsuInput, ProcessUncheckedCreateWithoutDmsuInput>
  }

  export type StorageFileCreateWithoutPersonInfoProcessesInput = {
    id?: string
    inputFilename: string
    outputFilename?: string | null
    extension: string
    size: number
    bucket: string
    path: string
    driverLicenseProcesses?: ProcessHstsMvsCreateNestedManyWithoutDriverLicenseFileInput
    carInfoProcesses?: ProcessHstsMvsCreateNestedManyWithoutCarInfoFileInput
    resultProcessesHstsMvs?: ProcessHstsMvsCreateNestedManyWithoutResultFileInput
    resultProcessesDmsu?: ProcessDmsuCreateNestedManyWithoutResultFileInput
    withoutWMProcesses?: ProcessDmsuCreateNestedManyWithoutWithoutWMFileInput
    inputFilePfu?: ProcessPfuCreateNestedManyWithoutInputFileInput
    resultFilePfu?: ProcessPfuCreateNestedManyWithoutResultFileInput
    grantedІnputFileErd?: ProcessErdCreateNestedManyWithoutGrantedІnputFileInput
    acceptedІnputFileErd?: ProcessErdCreateNestedManyWithoutAcceptedІnputFileInput
    resultFileErd?: ProcessErdCreateNestedManyWithoutResultFileInput
  }

  export type StorageFileUncheckedCreateWithoutPersonInfoProcessesInput = {
    id?: string
    inputFilename: string
    outputFilename?: string | null
    extension: string
    size: number
    bucket: string
    path: string
    driverLicenseProcesses?: ProcessHstsMvsUncheckedCreateNestedManyWithoutDriverLicenseFileInput
    carInfoProcesses?: ProcessHstsMvsUncheckedCreateNestedManyWithoutCarInfoFileInput
    resultProcessesHstsMvs?: ProcessHstsMvsUncheckedCreateNestedManyWithoutResultFileInput
    resultProcessesDmsu?: ProcessDmsuUncheckedCreateNestedManyWithoutResultFileInput
    withoutWMProcesses?: ProcessDmsuUncheckedCreateNestedManyWithoutWithoutWMFileInput
    inputFilePfu?: ProcessPfuUncheckedCreateNestedManyWithoutInputFileInput
    resultFilePfu?: ProcessPfuUncheckedCreateNestedManyWithoutResultFileInput
    grantedІnputFileErd?: ProcessErdUncheckedCreateNestedManyWithoutGrantedІnputFileInput
    acceptedІnputFileErd?: ProcessErdUncheckedCreateNestedManyWithoutAcceptedІnputFileInput
    resultFileErd?: ProcessErdUncheckedCreateNestedManyWithoutResultFileInput
  }

  export type StorageFileCreateOrConnectWithoutPersonInfoProcessesInput = {
    where: StorageFileWhereUniqueInput
    create: XOR<StorageFileCreateWithoutPersonInfoProcessesInput, StorageFileUncheckedCreateWithoutPersonInfoProcessesInput>
  }

  export type StorageFileCreateWithoutResultProcessesDmsuInput = {
    id?: string
    inputFilename: string
    outputFilename?: string | null
    extension: string
    size: number
    bucket: string
    path: string
    driverLicenseProcesses?: ProcessHstsMvsCreateNestedManyWithoutDriverLicenseFileInput
    carInfoProcesses?: ProcessHstsMvsCreateNestedManyWithoutCarInfoFileInput
    resultProcessesHstsMvs?: ProcessHstsMvsCreateNestedManyWithoutResultFileInput
    personInfoProcesses?: ProcessDmsuCreateNestedManyWithoutPersonInfoFileInput
    withoutWMProcesses?: ProcessDmsuCreateNestedManyWithoutWithoutWMFileInput
    inputFilePfu?: ProcessPfuCreateNestedManyWithoutInputFileInput
    resultFilePfu?: ProcessPfuCreateNestedManyWithoutResultFileInput
    grantedІnputFileErd?: ProcessErdCreateNestedManyWithoutGrantedІnputFileInput
    acceptedІnputFileErd?: ProcessErdCreateNestedManyWithoutAcceptedІnputFileInput
    resultFileErd?: ProcessErdCreateNestedManyWithoutResultFileInput
  }

  export type StorageFileUncheckedCreateWithoutResultProcessesDmsuInput = {
    id?: string
    inputFilename: string
    outputFilename?: string | null
    extension: string
    size: number
    bucket: string
    path: string
    driverLicenseProcesses?: ProcessHstsMvsUncheckedCreateNestedManyWithoutDriverLicenseFileInput
    carInfoProcesses?: ProcessHstsMvsUncheckedCreateNestedManyWithoutCarInfoFileInput
    resultProcessesHstsMvs?: ProcessHstsMvsUncheckedCreateNestedManyWithoutResultFileInput
    personInfoProcesses?: ProcessDmsuUncheckedCreateNestedManyWithoutPersonInfoFileInput
    withoutWMProcesses?: ProcessDmsuUncheckedCreateNestedManyWithoutWithoutWMFileInput
    inputFilePfu?: ProcessPfuUncheckedCreateNestedManyWithoutInputFileInput
    resultFilePfu?: ProcessPfuUncheckedCreateNestedManyWithoutResultFileInput
    grantedІnputFileErd?: ProcessErdUncheckedCreateNestedManyWithoutGrantedІnputFileInput
    acceptedІnputFileErd?: ProcessErdUncheckedCreateNestedManyWithoutAcceptedІnputFileInput
    resultFileErd?: ProcessErdUncheckedCreateNestedManyWithoutResultFileInput
  }

  export type StorageFileCreateOrConnectWithoutResultProcessesDmsuInput = {
    where: StorageFileWhereUniqueInput
    create: XOR<StorageFileCreateWithoutResultProcessesDmsuInput, StorageFileUncheckedCreateWithoutResultProcessesDmsuInput>
  }

  export type StorageFileCreateWithoutWithoutWMProcessesInput = {
    id?: string
    inputFilename: string
    outputFilename?: string | null
    extension: string
    size: number
    bucket: string
    path: string
    driverLicenseProcesses?: ProcessHstsMvsCreateNestedManyWithoutDriverLicenseFileInput
    carInfoProcesses?: ProcessHstsMvsCreateNestedManyWithoutCarInfoFileInput
    resultProcessesHstsMvs?: ProcessHstsMvsCreateNestedManyWithoutResultFileInput
    personInfoProcesses?: ProcessDmsuCreateNestedManyWithoutPersonInfoFileInput
    resultProcessesDmsu?: ProcessDmsuCreateNestedManyWithoutResultFileInput
    inputFilePfu?: ProcessPfuCreateNestedManyWithoutInputFileInput
    resultFilePfu?: ProcessPfuCreateNestedManyWithoutResultFileInput
    grantedІnputFileErd?: ProcessErdCreateNestedManyWithoutGrantedІnputFileInput
    acceptedІnputFileErd?: ProcessErdCreateNestedManyWithoutAcceptedІnputFileInput
    resultFileErd?: ProcessErdCreateNestedManyWithoutResultFileInput
  }

  export type StorageFileUncheckedCreateWithoutWithoutWMProcessesInput = {
    id?: string
    inputFilename: string
    outputFilename?: string | null
    extension: string
    size: number
    bucket: string
    path: string
    driverLicenseProcesses?: ProcessHstsMvsUncheckedCreateNestedManyWithoutDriverLicenseFileInput
    carInfoProcesses?: ProcessHstsMvsUncheckedCreateNestedManyWithoutCarInfoFileInput
    resultProcessesHstsMvs?: ProcessHstsMvsUncheckedCreateNestedManyWithoutResultFileInput
    personInfoProcesses?: ProcessDmsuUncheckedCreateNestedManyWithoutPersonInfoFileInput
    resultProcessesDmsu?: ProcessDmsuUncheckedCreateNestedManyWithoutResultFileInput
    inputFilePfu?: ProcessPfuUncheckedCreateNestedManyWithoutInputFileInput
    resultFilePfu?: ProcessPfuUncheckedCreateNestedManyWithoutResultFileInput
    grantedІnputFileErd?: ProcessErdUncheckedCreateNestedManyWithoutGrantedІnputFileInput
    acceptedІnputFileErd?: ProcessErdUncheckedCreateNestedManyWithoutAcceptedІnputFileInput
    resultFileErd?: ProcessErdUncheckedCreateNestedManyWithoutResultFileInput
  }

  export type StorageFileCreateOrConnectWithoutWithoutWMProcessesInput = {
    where: StorageFileWhereUniqueInput
    create: XOR<StorageFileCreateWithoutWithoutWMProcessesInput, StorageFileUncheckedCreateWithoutWithoutWMProcessesInput>
  }

  export type ProcessUpsertWithoutDmsuInput = {
    update: XOR<ProcessUpdateWithoutDmsuInput, ProcessUncheckedUpdateWithoutDmsuInput>
    create: XOR<ProcessCreateWithoutDmsuInput, ProcessUncheckedCreateWithoutDmsuInput>
    where?: ProcessWhereInput
  }

  export type ProcessUpdateToOneWithWhereWithoutDmsuInput = {
    where?: ProcessWhereInput
    data: XOR<ProcessUpdateWithoutDmsuInput, ProcessUncheckedUpdateWithoutDmsuInput>
  }

  export type ProcessUpdateWithoutDmsuInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutProcessesNestedInput
    hstsMvs?: ProcessHstsMvsUpdateOneWithoutProcessNestedInput
    pfu?: ProcessPfuUpdateOneWithoutProcessNestedInput
    erd?: ProcessErdUpdateOneWithoutProcessNestedInput
  }

  export type ProcessUncheckedUpdateWithoutDmsuInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hstsMvs?: ProcessHstsMvsUncheckedUpdateOneWithoutProcessNestedInput
    pfu?: ProcessPfuUncheckedUpdateOneWithoutProcessNestedInput
    erd?: ProcessErdUncheckedUpdateOneWithoutProcessNestedInput
  }

  export type StorageFileUpsertWithoutPersonInfoProcessesInput = {
    update: XOR<StorageFileUpdateWithoutPersonInfoProcessesInput, StorageFileUncheckedUpdateWithoutPersonInfoProcessesInput>
    create: XOR<StorageFileCreateWithoutPersonInfoProcessesInput, StorageFileUncheckedCreateWithoutPersonInfoProcessesInput>
    where?: StorageFileWhereInput
  }

  export type StorageFileUpdateToOneWithWhereWithoutPersonInfoProcessesInput = {
    where?: StorageFileWhereInput
    data: XOR<StorageFileUpdateWithoutPersonInfoProcessesInput, StorageFileUncheckedUpdateWithoutPersonInfoProcessesInput>
  }

  export type StorageFileUpdateWithoutPersonInfoProcessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    driverLicenseProcesses?: ProcessHstsMvsUpdateManyWithoutDriverLicenseFileNestedInput
    carInfoProcesses?: ProcessHstsMvsUpdateManyWithoutCarInfoFileNestedInput
    resultProcessesHstsMvs?: ProcessHstsMvsUpdateManyWithoutResultFileNestedInput
    resultProcessesDmsu?: ProcessDmsuUpdateManyWithoutResultFileNestedInput
    withoutWMProcesses?: ProcessDmsuUpdateManyWithoutWithoutWMFileNestedInput
    inputFilePfu?: ProcessPfuUpdateManyWithoutInputFileNestedInput
    resultFilePfu?: ProcessPfuUpdateManyWithoutResultFileNestedInput
    grantedІnputFileErd?: ProcessErdUpdateManyWithoutGrantedІnputFileNestedInput
    acceptedІnputFileErd?: ProcessErdUpdateManyWithoutAcceptedІnputFileNestedInput
    resultFileErd?: ProcessErdUpdateManyWithoutResultFileNestedInput
  }

  export type StorageFileUncheckedUpdateWithoutPersonInfoProcessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    driverLicenseProcesses?: ProcessHstsMvsUncheckedUpdateManyWithoutDriverLicenseFileNestedInput
    carInfoProcesses?: ProcessHstsMvsUncheckedUpdateManyWithoutCarInfoFileNestedInput
    resultProcessesHstsMvs?: ProcessHstsMvsUncheckedUpdateManyWithoutResultFileNestedInput
    resultProcessesDmsu?: ProcessDmsuUncheckedUpdateManyWithoutResultFileNestedInput
    withoutWMProcesses?: ProcessDmsuUncheckedUpdateManyWithoutWithoutWMFileNestedInput
    inputFilePfu?: ProcessPfuUncheckedUpdateManyWithoutInputFileNestedInput
    resultFilePfu?: ProcessPfuUncheckedUpdateManyWithoutResultFileNestedInput
    grantedІnputFileErd?: ProcessErdUncheckedUpdateManyWithoutGrantedІnputFileNestedInput
    acceptedІnputFileErd?: ProcessErdUncheckedUpdateManyWithoutAcceptedІnputFileNestedInput
    resultFileErd?: ProcessErdUncheckedUpdateManyWithoutResultFileNestedInput
  }

  export type StorageFileUpsertWithoutResultProcessesDmsuInput = {
    update: XOR<StorageFileUpdateWithoutResultProcessesDmsuInput, StorageFileUncheckedUpdateWithoutResultProcessesDmsuInput>
    create: XOR<StorageFileCreateWithoutResultProcessesDmsuInput, StorageFileUncheckedCreateWithoutResultProcessesDmsuInput>
    where?: StorageFileWhereInput
  }

  export type StorageFileUpdateToOneWithWhereWithoutResultProcessesDmsuInput = {
    where?: StorageFileWhereInput
    data: XOR<StorageFileUpdateWithoutResultProcessesDmsuInput, StorageFileUncheckedUpdateWithoutResultProcessesDmsuInput>
  }

  export type StorageFileUpdateWithoutResultProcessesDmsuInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    driverLicenseProcesses?: ProcessHstsMvsUpdateManyWithoutDriverLicenseFileNestedInput
    carInfoProcesses?: ProcessHstsMvsUpdateManyWithoutCarInfoFileNestedInput
    resultProcessesHstsMvs?: ProcessHstsMvsUpdateManyWithoutResultFileNestedInput
    personInfoProcesses?: ProcessDmsuUpdateManyWithoutPersonInfoFileNestedInput
    withoutWMProcesses?: ProcessDmsuUpdateManyWithoutWithoutWMFileNestedInput
    inputFilePfu?: ProcessPfuUpdateManyWithoutInputFileNestedInput
    resultFilePfu?: ProcessPfuUpdateManyWithoutResultFileNestedInput
    grantedІnputFileErd?: ProcessErdUpdateManyWithoutGrantedІnputFileNestedInput
    acceptedІnputFileErd?: ProcessErdUpdateManyWithoutAcceptedІnputFileNestedInput
    resultFileErd?: ProcessErdUpdateManyWithoutResultFileNestedInput
  }

  export type StorageFileUncheckedUpdateWithoutResultProcessesDmsuInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    driverLicenseProcesses?: ProcessHstsMvsUncheckedUpdateManyWithoutDriverLicenseFileNestedInput
    carInfoProcesses?: ProcessHstsMvsUncheckedUpdateManyWithoutCarInfoFileNestedInput
    resultProcessesHstsMvs?: ProcessHstsMvsUncheckedUpdateManyWithoutResultFileNestedInput
    personInfoProcesses?: ProcessDmsuUncheckedUpdateManyWithoutPersonInfoFileNestedInput
    withoutWMProcesses?: ProcessDmsuUncheckedUpdateManyWithoutWithoutWMFileNestedInput
    inputFilePfu?: ProcessPfuUncheckedUpdateManyWithoutInputFileNestedInput
    resultFilePfu?: ProcessPfuUncheckedUpdateManyWithoutResultFileNestedInput
    grantedІnputFileErd?: ProcessErdUncheckedUpdateManyWithoutGrantedІnputFileNestedInput
    acceptedІnputFileErd?: ProcessErdUncheckedUpdateManyWithoutAcceptedІnputFileNestedInput
    resultFileErd?: ProcessErdUncheckedUpdateManyWithoutResultFileNestedInput
  }

  export type StorageFileUpsertWithoutWithoutWMProcessesInput = {
    update: XOR<StorageFileUpdateWithoutWithoutWMProcessesInput, StorageFileUncheckedUpdateWithoutWithoutWMProcessesInput>
    create: XOR<StorageFileCreateWithoutWithoutWMProcessesInput, StorageFileUncheckedCreateWithoutWithoutWMProcessesInput>
    where?: StorageFileWhereInput
  }

  export type StorageFileUpdateToOneWithWhereWithoutWithoutWMProcessesInput = {
    where?: StorageFileWhereInput
    data: XOR<StorageFileUpdateWithoutWithoutWMProcessesInput, StorageFileUncheckedUpdateWithoutWithoutWMProcessesInput>
  }

  export type StorageFileUpdateWithoutWithoutWMProcessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    driverLicenseProcesses?: ProcessHstsMvsUpdateManyWithoutDriverLicenseFileNestedInput
    carInfoProcesses?: ProcessHstsMvsUpdateManyWithoutCarInfoFileNestedInput
    resultProcessesHstsMvs?: ProcessHstsMvsUpdateManyWithoutResultFileNestedInput
    personInfoProcesses?: ProcessDmsuUpdateManyWithoutPersonInfoFileNestedInput
    resultProcessesDmsu?: ProcessDmsuUpdateManyWithoutResultFileNestedInput
    inputFilePfu?: ProcessPfuUpdateManyWithoutInputFileNestedInput
    resultFilePfu?: ProcessPfuUpdateManyWithoutResultFileNestedInput
    grantedІnputFileErd?: ProcessErdUpdateManyWithoutGrantedІnputFileNestedInput
    acceptedІnputFileErd?: ProcessErdUpdateManyWithoutAcceptedІnputFileNestedInput
    resultFileErd?: ProcessErdUpdateManyWithoutResultFileNestedInput
  }

  export type StorageFileUncheckedUpdateWithoutWithoutWMProcessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    driverLicenseProcesses?: ProcessHstsMvsUncheckedUpdateManyWithoutDriverLicenseFileNestedInput
    carInfoProcesses?: ProcessHstsMvsUncheckedUpdateManyWithoutCarInfoFileNestedInput
    resultProcessesHstsMvs?: ProcessHstsMvsUncheckedUpdateManyWithoutResultFileNestedInput
    personInfoProcesses?: ProcessDmsuUncheckedUpdateManyWithoutPersonInfoFileNestedInput
    resultProcessesDmsu?: ProcessDmsuUncheckedUpdateManyWithoutResultFileNestedInput
    inputFilePfu?: ProcessPfuUncheckedUpdateManyWithoutInputFileNestedInput
    resultFilePfu?: ProcessPfuUncheckedUpdateManyWithoutResultFileNestedInput
    grantedІnputFileErd?: ProcessErdUncheckedUpdateManyWithoutGrantedІnputFileNestedInput
    acceptedІnputFileErd?: ProcessErdUncheckedUpdateManyWithoutAcceptedІnputFileNestedInput
    resultFileErd?: ProcessErdUncheckedUpdateManyWithoutResultFileNestedInput
  }

  export type ProcessCreateWithoutPfuInput = {
    id?: string
    status?: $Enums.Status
    owner?: string | null
    type: $Enums.ProcessType
    createdAt?: Date | string
    finishedAt?: Date | string | null
    user: UserCreateNestedOneWithoutProcessesInput
    hstsMvs?: ProcessHstsMvsCreateNestedOneWithoutProcessInput
    dmsu?: ProcessDmsuCreateNestedOneWithoutProcessInput
    erd?: ProcessErdCreateNestedOneWithoutProcessInput
  }

  export type ProcessUncheckedCreateWithoutPfuInput = {
    id?: string
    status?: $Enums.Status
    userId: string
    owner?: string | null
    type: $Enums.ProcessType
    createdAt?: Date | string
    finishedAt?: Date | string | null
    hstsMvs?: ProcessHstsMvsUncheckedCreateNestedOneWithoutProcessInput
    dmsu?: ProcessDmsuUncheckedCreateNestedOneWithoutProcessInput
    erd?: ProcessErdUncheckedCreateNestedOneWithoutProcessInput
  }

  export type ProcessCreateOrConnectWithoutPfuInput = {
    where: ProcessWhereUniqueInput
    create: XOR<ProcessCreateWithoutPfuInput, ProcessUncheckedCreateWithoutPfuInput>
  }

  export type StorageFileCreateWithoutInputFilePfuInput = {
    id?: string
    inputFilename: string
    outputFilename?: string | null
    extension: string
    size: number
    bucket: string
    path: string
    driverLicenseProcesses?: ProcessHstsMvsCreateNestedManyWithoutDriverLicenseFileInput
    carInfoProcesses?: ProcessHstsMvsCreateNestedManyWithoutCarInfoFileInput
    resultProcessesHstsMvs?: ProcessHstsMvsCreateNestedManyWithoutResultFileInput
    personInfoProcesses?: ProcessDmsuCreateNestedManyWithoutPersonInfoFileInput
    resultProcessesDmsu?: ProcessDmsuCreateNestedManyWithoutResultFileInput
    withoutWMProcesses?: ProcessDmsuCreateNestedManyWithoutWithoutWMFileInput
    resultFilePfu?: ProcessPfuCreateNestedManyWithoutResultFileInput
    grantedІnputFileErd?: ProcessErdCreateNestedManyWithoutGrantedІnputFileInput
    acceptedІnputFileErd?: ProcessErdCreateNestedManyWithoutAcceptedІnputFileInput
    resultFileErd?: ProcessErdCreateNestedManyWithoutResultFileInput
  }

  export type StorageFileUncheckedCreateWithoutInputFilePfuInput = {
    id?: string
    inputFilename: string
    outputFilename?: string | null
    extension: string
    size: number
    bucket: string
    path: string
    driverLicenseProcesses?: ProcessHstsMvsUncheckedCreateNestedManyWithoutDriverLicenseFileInput
    carInfoProcesses?: ProcessHstsMvsUncheckedCreateNestedManyWithoutCarInfoFileInput
    resultProcessesHstsMvs?: ProcessHstsMvsUncheckedCreateNestedManyWithoutResultFileInput
    personInfoProcesses?: ProcessDmsuUncheckedCreateNestedManyWithoutPersonInfoFileInput
    resultProcessesDmsu?: ProcessDmsuUncheckedCreateNestedManyWithoutResultFileInput
    withoutWMProcesses?: ProcessDmsuUncheckedCreateNestedManyWithoutWithoutWMFileInput
    resultFilePfu?: ProcessPfuUncheckedCreateNestedManyWithoutResultFileInput
    grantedІnputFileErd?: ProcessErdUncheckedCreateNestedManyWithoutGrantedІnputFileInput
    acceptedІnputFileErd?: ProcessErdUncheckedCreateNestedManyWithoutAcceptedІnputFileInput
    resultFileErd?: ProcessErdUncheckedCreateNestedManyWithoutResultFileInput
  }

  export type StorageFileCreateOrConnectWithoutInputFilePfuInput = {
    where: StorageFileWhereUniqueInput
    create: XOR<StorageFileCreateWithoutInputFilePfuInput, StorageFileUncheckedCreateWithoutInputFilePfuInput>
  }

  export type StorageFileCreateWithoutResultFilePfuInput = {
    id?: string
    inputFilename: string
    outputFilename?: string | null
    extension: string
    size: number
    bucket: string
    path: string
    driverLicenseProcesses?: ProcessHstsMvsCreateNestedManyWithoutDriverLicenseFileInput
    carInfoProcesses?: ProcessHstsMvsCreateNestedManyWithoutCarInfoFileInput
    resultProcessesHstsMvs?: ProcessHstsMvsCreateNestedManyWithoutResultFileInput
    personInfoProcesses?: ProcessDmsuCreateNestedManyWithoutPersonInfoFileInput
    resultProcessesDmsu?: ProcessDmsuCreateNestedManyWithoutResultFileInput
    withoutWMProcesses?: ProcessDmsuCreateNestedManyWithoutWithoutWMFileInput
    inputFilePfu?: ProcessPfuCreateNestedManyWithoutInputFileInput
    grantedІnputFileErd?: ProcessErdCreateNestedManyWithoutGrantedІnputFileInput
    acceptedІnputFileErd?: ProcessErdCreateNestedManyWithoutAcceptedІnputFileInput
    resultFileErd?: ProcessErdCreateNestedManyWithoutResultFileInput
  }

  export type StorageFileUncheckedCreateWithoutResultFilePfuInput = {
    id?: string
    inputFilename: string
    outputFilename?: string | null
    extension: string
    size: number
    bucket: string
    path: string
    driverLicenseProcesses?: ProcessHstsMvsUncheckedCreateNestedManyWithoutDriverLicenseFileInput
    carInfoProcesses?: ProcessHstsMvsUncheckedCreateNestedManyWithoutCarInfoFileInput
    resultProcessesHstsMvs?: ProcessHstsMvsUncheckedCreateNestedManyWithoutResultFileInput
    personInfoProcesses?: ProcessDmsuUncheckedCreateNestedManyWithoutPersonInfoFileInput
    resultProcessesDmsu?: ProcessDmsuUncheckedCreateNestedManyWithoutResultFileInput
    withoutWMProcesses?: ProcessDmsuUncheckedCreateNestedManyWithoutWithoutWMFileInput
    inputFilePfu?: ProcessPfuUncheckedCreateNestedManyWithoutInputFileInput
    grantedІnputFileErd?: ProcessErdUncheckedCreateNestedManyWithoutGrantedІnputFileInput
    acceptedІnputFileErd?: ProcessErdUncheckedCreateNestedManyWithoutAcceptedІnputFileInput
    resultFileErd?: ProcessErdUncheckedCreateNestedManyWithoutResultFileInput
  }

  export type StorageFileCreateOrConnectWithoutResultFilePfuInput = {
    where: StorageFileWhereUniqueInput
    create: XOR<StorageFileCreateWithoutResultFilePfuInput, StorageFileUncheckedCreateWithoutResultFilePfuInput>
  }

  export type ProcessUpsertWithoutPfuInput = {
    update: XOR<ProcessUpdateWithoutPfuInput, ProcessUncheckedUpdateWithoutPfuInput>
    create: XOR<ProcessCreateWithoutPfuInput, ProcessUncheckedCreateWithoutPfuInput>
    where?: ProcessWhereInput
  }

  export type ProcessUpdateToOneWithWhereWithoutPfuInput = {
    where?: ProcessWhereInput
    data: XOR<ProcessUpdateWithoutPfuInput, ProcessUncheckedUpdateWithoutPfuInput>
  }

  export type ProcessUpdateWithoutPfuInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutProcessesNestedInput
    hstsMvs?: ProcessHstsMvsUpdateOneWithoutProcessNestedInput
    dmsu?: ProcessDmsuUpdateOneWithoutProcessNestedInput
    erd?: ProcessErdUpdateOneWithoutProcessNestedInput
  }

  export type ProcessUncheckedUpdateWithoutPfuInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hstsMvs?: ProcessHstsMvsUncheckedUpdateOneWithoutProcessNestedInput
    dmsu?: ProcessDmsuUncheckedUpdateOneWithoutProcessNestedInput
    erd?: ProcessErdUncheckedUpdateOneWithoutProcessNestedInput
  }

  export type StorageFileUpsertWithoutInputFilePfuInput = {
    update: XOR<StorageFileUpdateWithoutInputFilePfuInput, StorageFileUncheckedUpdateWithoutInputFilePfuInput>
    create: XOR<StorageFileCreateWithoutInputFilePfuInput, StorageFileUncheckedCreateWithoutInputFilePfuInput>
    where?: StorageFileWhereInput
  }

  export type StorageFileUpdateToOneWithWhereWithoutInputFilePfuInput = {
    where?: StorageFileWhereInput
    data: XOR<StorageFileUpdateWithoutInputFilePfuInput, StorageFileUncheckedUpdateWithoutInputFilePfuInput>
  }

  export type StorageFileUpdateWithoutInputFilePfuInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    driverLicenseProcesses?: ProcessHstsMvsUpdateManyWithoutDriverLicenseFileNestedInput
    carInfoProcesses?: ProcessHstsMvsUpdateManyWithoutCarInfoFileNestedInput
    resultProcessesHstsMvs?: ProcessHstsMvsUpdateManyWithoutResultFileNestedInput
    personInfoProcesses?: ProcessDmsuUpdateManyWithoutPersonInfoFileNestedInput
    resultProcessesDmsu?: ProcessDmsuUpdateManyWithoutResultFileNestedInput
    withoutWMProcesses?: ProcessDmsuUpdateManyWithoutWithoutWMFileNestedInput
    resultFilePfu?: ProcessPfuUpdateManyWithoutResultFileNestedInput
    grantedІnputFileErd?: ProcessErdUpdateManyWithoutGrantedІnputFileNestedInput
    acceptedІnputFileErd?: ProcessErdUpdateManyWithoutAcceptedІnputFileNestedInput
    resultFileErd?: ProcessErdUpdateManyWithoutResultFileNestedInput
  }

  export type StorageFileUncheckedUpdateWithoutInputFilePfuInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    driverLicenseProcesses?: ProcessHstsMvsUncheckedUpdateManyWithoutDriverLicenseFileNestedInput
    carInfoProcesses?: ProcessHstsMvsUncheckedUpdateManyWithoutCarInfoFileNestedInput
    resultProcessesHstsMvs?: ProcessHstsMvsUncheckedUpdateManyWithoutResultFileNestedInput
    personInfoProcesses?: ProcessDmsuUncheckedUpdateManyWithoutPersonInfoFileNestedInput
    resultProcessesDmsu?: ProcessDmsuUncheckedUpdateManyWithoutResultFileNestedInput
    withoutWMProcesses?: ProcessDmsuUncheckedUpdateManyWithoutWithoutWMFileNestedInput
    resultFilePfu?: ProcessPfuUncheckedUpdateManyWithoutResultFileNestedInput
    grantedІnputFileErd?: ProcessErdUncheckedUpdateManyWithoutGrantedІnputFileNestedInput
    acceptedІnputFileErd?: ProcessErdUncheckedUpdateManyWithoutAcceptedІnputFileNestedInput
    resultFileErd?: ProcessErdUncheckedUpdateManyWithoutResultFileNestedInput
  }

  export type StorageFileUpsertWithoutResultFilePfuInput = {
    update: XOR<StorageFileUpdateWithoutResultFilePfuInput, StorageFileUncheckedUpdateWithoutResultFilePfuInput>
    create: XOR<StorageFileCreateWithoutResultFilePfuInput, StorageFileUncheckedCreateWithoutResultFilePfuInput>
    where?: StorageFileWhereInput
  }

  export type StorageFileUpdateToOneWithWhereWithoutResultFilePfuInput = {
    where?: StorageFileWhereInput
    data: XOR<StorageFileUpdateWithoutResultFilePfuInput, StorageFileUncheckedUpdateWithoutResultFilePfuInput>
  }

  export type StorageFileUpdateWithoutResultFilePfuInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    driverLicenseProcesses?: ProcessHstsMvsUpdateManyWithoutDriverLicenseFileNestedInput
    carInfoProcesses?: ProcessHstsMvsUpdateManyWithoutCarInfoFileNestedInput
    resultProcessesHstsMvs?: ProcessHstsMvsUpdateManyWithoutResultFileNestedInput
    personInfoProcesses?: ProcessDmsuUpdateManyWithoutPersonInfoFileNestedInput
    resultProcessesDmsu?: ProcessDmsuUpdateManyWithoutResultFileNestedInput
    withoutWMProcesses?: ProcessDmsuUpdateManyWithoutWithoutWMFileNestedInput
    inputFilePfu?: ProcessPfuUpdateManyWithoutInputFileNestedInput
    grantedІnputFileErd?: ProcessErdUpdateManyWithoutGrantedІnputFileNestedInput
    acceptedІnputFileErd?: ProcessErdUpdateManyWithoutAcceptedІnputFileNestedInput
    resultFileErd?: ProcessErdUpdateManyWithoutResultFileNestedInput
  }

  export type StorageFileUncheckedUpdateWithoutResultFilePfuInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    driverLicenseProcesses?: ProcessHstsMvsUncheckedUpdateManyWithoutDriverLicenseFileNestedInput
    carInfoProcesses?: ProcessHstsMvsUncheckedUpdateManyWithoutCarInfoFileNestedInput
    resultProcessesHstsMvs?: ProcessHstsMvsUncheckedUpdateManyWithoutResultFileNestedInput
    personInfoProcesses?: ProcessDmsuUncheckedUpdateManyWithoutPersonInfoFileNestedInput
    resultProcessesDmsu?: ProcessDmsuUncheckedUpdateManyWithoutResultFileNestedInput
    withoutWMProcesses?: ProcessDmsuUncheckedUpdateManyWithoutWithoutWMFileNestedInput
    inputFilePfu?: ProcessPfuUncheckedUpdateManyWithoutInputFileNestedInput
    grantedІnputFileErd?: ProcessErdUncheckedUpdateManyWithoutGrantedІnputFileNestedInput
    acceptedІnputFileErd?: ProcessErdUncheckedUpdateManyWithoutAcceptedІnputFileNestedInput
    resultFileErd?: ProcessErdUncheckedUpdateManyWithoutResultFileNestedInput
  }

  export type ProcessCreateWithoutErdInput = {
    id?: string
    status?: $Enums.Status
    owner?: string | null
    type: $Enums.ProcessType
    createdAt?: Date | string
    finishedAt?: Date | string | null
    user: UserCreateNestedOneWithoutProcessesInput
    hstsMvs?: ProcessHstsMvsCreateNestedOneWithoutProcessInput
    dmsu?: ProcessDmsuCreateNestedOneWithoutProcessInput
    pfu?: ProcessPfuCreateNestedOneWithoutProcessInput
  }

  export type ProcessUncheckedCreateWithoutErdInput = {
    id?: string
    status?: $Enums.Status
    userId: string
    owner?: string | null
    type: $Enums.ProcessType
    createdAt?: Date | string
    finishedAt?: Date | string | null
    hstsMvs?: ProcessHstsMvsUncheckedCreateNestedOneWithoutProcessInput
    dmsu?: ProcessDmsuUncheckedCreateNestedOneWithoutProcessInput
    pfu?: ProcessPfuUncheckedCreateNestedOneWithoutProcessInput
  }

  export type ProcessCreateOrConnectWithoutErdInput = {
    where: ProcessWhereUniqueInput
    create: XOR<ProcessCreateWithoutErdInput, ProcessUncheckedCreateWithoutErdInput>
  }

  export type StorageFileCreateWithoutGrantedІnputFileErdInput = {
    id?: string
    inputFilename: string
    outputFilename?: string | null
    extension: string
    size: number
    bucket: string
    path: string
    driverLicenseProcesses?: ProcessHstsMvsCreateNestedManyWithoutDriverLicenseFileInput
    carInfoProcesses?: ProcessHstsMvsCreateNestedManyWithoutCarInfoFileInput
    resultProcessesHstsMvs?: ProcessHstsMvsCreateNestedManyWithoutResultFileInput
    personInfoProcesses?: ProcessDmsuCreateNestedManyWithoutPersonInfoFileInput
    resultProcessesDmsu?: ProcessDmsuCreateNestedManyWithoutResultFileInput
    withoutWMProcesses?: ProcessDmsuCreateNestedManyWithoutWithoutWMFileInput
    inputFilePfu?: ProcessPfuCreateNestedManyWithoutInputFileInput
    resultFilePfu?: ProcessPfuCreateNestedManyWithoutResultFileInput
    acceptedІnputFileErd?: ProcessErdCreateNestedManyWithoutAcceptedІnputFileInput
    resultFileErd?: ProcessErdCreateNestedManyWithoutResultFileInput
  }

  export type StorageFileUncheckedCreateWithoutGrantedІnputFileErdInput = {
    id?: string
    inputFilename: string
    outputFilename?: string | null
    extension: string
    size: number
    bucket: string
    path: string
    driverLicenseProcesses?: ProcessHstsMvsUncheckedCreateNestedManyWithoutDriverLicenseFileInput
    carInfoProcesses?: ProcessHstsMvsUncheckedCreateNestedManyWithoutCarInfoFileInput
    resultProcessesHstsMvs?: ProcessHstsMvsUncheckedCreateNestedManyWithoutResultFileInput
    personInfoProcesses?: ProcessDmsuUncheckedCreateNestedManyWithoutPersonInfoFileInput
    resultProcessesDmsu?: ProcessDmsuUncheckedCreateNestedManyWithoutResultFileInput
    withoutWMProcesses?: ProcessDmsuUncheckedCreateNestedManyWithoutWithoutWMFileInput
    inputFilePfu?: ProcessPfuUncheckedCreateNestedManyWithoutInputFileInput
    resultFilePfu?: ProcessPfuUncheckedCreateNestedManyWithoutResultFileInput
    acceptedІnputFileErd?: ProcessErdUncheckedCreateNestedManyWithoutAcceptedІnputFileInput
    resultFileErd?: ProcessErdUncheckedCreateNestedManyWithoutResultFileInput
  }

  export type StorageFileCreateOrConnectWithoutGrantedІnputFileErdInput = {
    where: StorageFileWhereUniqueInput
    create: XOR<StorageFileCreateWithoutGrantedІnputFileErdInput, StorageFileUncheckedCreateWithoutGrantedІnputFileErdInput>
  }

  export type StorageFileCreateWithoutAcceptedІnputFileErdInput = {
    id?: string
    inputFilename: string
    outputFilename?: string | null
    extension: string
    size: number
    bucket: string
    path: string
    driverLicenseProcesses?: ProcessHstsMvsCreateNestedManyWithoutDriverLicenseFileInput
    carInfoProcesses?: ProcessHstsMvsCreateNestedManyWithoutCarInfoFileInput
    resultProcessesHstsMvs?: ProcessHstsMvsCreateNestedManyWithoutResultFileInput
    personInfoProcesses?: ProcessDmsuCreateNestedManyWithoutPersonInfoFileInput
    resultProcessesDmsu?: ProcessDmsuCreateNestedManyWithoutResultFileInput
    withoutWMProcesses?: ProcessDmsuCreateNestedManyWithoutWithoutWMFileInput
    inputFilePfu?: ProcessPfuCreateNestedManyWithoutInputFileInput
    resultFilePfu?: ProcessPfuCreateNestedManyWithoutResultFileInput
    grantedІnputFileErd?: ProcessErdCreateNestedManyWithoutGrantedІnputFileInput
    resultFileErd?: ProcessErdCreateNestedManyWithoutResultFileInput
  }

  export type StorageFileUncheckedCreateWithoutAcceptedІnputFileErdInput = {
    id?: string
    inputFilename: string
    outputFilename?: string | null
    extension: string
    size: number
    bucket: string
    path: string
    driverLicenseProcesses?: ProcessHstsMvsUncheckedCreateNestedManyWithoutDriverLicenseFileInput
    carInfoProcesses?: ProcessHstsMvsUncheckedCreateNestedManyWithoutCarInfoFileInput
    resultProcessesHstsMvs?: ProcessHstsMvsUncheckedCreateNestedManyWithoutResultFileInput
    personInfoProcesses?: ProcessDmsuUncheckedCreateNestedManyWithoutPersonInfoFileInput
    resultProcessesDmsu?: ProcessDmsuUncheckedCreateNestedManyWithoutResultFileInput
    withoutWMProcesses?: ProcessDmsuUncheckedCreateNestedManyWithoutWithoutWMFileInput
    inputFilePfu?: ProcessPfuUncheckedCreateNestedManyWithoutInputFileInput
    resultFilePfu?: ProcessPfuUncheckedCreateNestedManyWithoutResultFileInput
    grantedІnputFileErd?: ProcessErdUncheckedCreateNestedManyWithoutGrantedІnputFileInput
    resultFileErd?: ProcessErdUncheckedCreateNestedManyWithoutResultFileInput
  }

  export type StorageFileCreateOrConnectWithoutAcceptedІnputFileErdInput = {
    where: StorageFileWhereUniqueInput
    create: XOR<StorageFileCreateWithoutAcceptedІnputFileErdInput, StorageFileUncheckedCreateWithoutAcceptedІnputFileErdInput>
  }

  export type StorageFileCreateWithoutResultFileErdInput = {
    id?: string
    inputFilename: string
    outputFilename?: string | null
    extension: string
    size: number
    bucket: string
    path: string
    driverLicenseProcesses?: ProcessHstsMvsCreateNestedManyWithoutDriverLicenseFileInput
    carInfoProcesses?: ProcessHstsMvsCreateNestedManyWithoutCarInfoFileInput
    resultProcessesHstsMvs?: ProcessHstsMvsCreateNestedManyWithoutResultFileInput
    personInfoProcesses?: ProcessDmsuCreateNestedManyWithoutPersonInfoFileInput
    resultProcessesDmsu?: ProcessDmsuCreateNestedManyWithoutResultFileInput
    withoutWMProcesses?: ProcessDmsuCreateNestedManyWithoutWithoutWMFileInput
    inputFilePfu?: ProcessPfuCreateNestedManyWithoutInputFileInput
    resultFilePfu?: ProcessPfuCreateNestedManyWithoutResultFileInput
    grantedІnputFileErd?: ProcessErdCreateNestedManyWithoutGrantedІnputFileInput
    acceptedІnputFileErd?: ProcessErdCreateNestedManyWithoutAcceptedІnputFileInput
  }

  export type StorageFileUncheckedCreateWithoutResultFileErdInput = {
    id?: string
    inputFilename: string
    outputFilename?: string | null
    extension: string
    size: number
    bucket: string
    path: string
    driverLicenseProcesses?: ProcessHstsMvsUncheckedCreateNestedManyWithoutDriverLicenseFileInput
    carInfoProcesses?: ProcessHstsMvsUncheckedCreateNestedManyWithoutCarInfoFileInput
    resultProcessesHstsMvs?: ProcessHstsMvsUncheckedCreateNestedManyWithoutResultFileInput
    personInfoProcesses?: ProcessDmsuUncheckedCreateNestedManyWithoutPersonInfoFileInput
    resultProcessesDmsu?: ProcessDmsuUncheckedCreateNestedManyWithoutResultFileInput
    withoutWMProcesses?: ProcessDmsuUncheckedCreateNestedManyWithoutWithoutWMFileInput
    inputFilePfu?: ProcessPfuUncheckedCreateNestedManyWithoutInputFileInput
    resultFilePfu?: ProcessPfuUncheckedCreateNestedManyWithoutResultFileInput
    grantedІnputFileErd?: ProcessErdUncheckedCreateNestedManyWithoutGrantedІnputFileInput
    acceptedІnputFileErd?: ProcessErdUncheckedCreateNestedManyWithoutAcceptedІnputFileInput
  }

  export type StorageFileCreateOrConnectWithoutResultFileErdInput = {
    where: StorageFileWhereUniqueInput
    create: XOR<StorageFileCreateWithoutResultFileErdInput, StorageFileUncheckedCreateWithoutResultFileErdInput>
  }

  export type ProcessUpsertWithoutErdInput = {
    update: XOR<ProcessUpdateWithoutErdInput, ProcessUncheckedUpdateWithoutErdInput>
    create: XOR<ProcessCreateWithoutErdInput, ProcessUncheckedCreateWithoutErdInput>
    where?: ProcessWhereInput
  }

  export type ProcessUpdateToOneWithWhereWithoutErdInput = {
    where?: ProcessWhereInput
    data: XOR<ProcessUpdateWithoutErdInput, ProcessUncheckedUpdateWithoutErdInput>
  }

  export type ProcessUpdateWithoutErdInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutProcessesNestedInput
    hstsMvs?: ProcessHstsMvsUpdateOneWithoutProcessNestedInput
    dmsu?: ProcessDmsuUpdateOneWithoutProcessNestedInput
    pfu?: ProcessPfuUpdateOneWithoutProcessNestedInput
  }

  export type ProcessUncheckedUpdateWithoutErdInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hstsMvs?: ProcessHstsMvsUncheckedUpdateOneWithoutProcessNestedInput
    dmsu?: ProcessDmsuUncheckedUpdateOneWithoutProcessNestedInput
    pfu?: ProcessPfuUncheckedUpdateOneWithoutProcessNestedInput
  }

  export type StorageFileUpsertWithoutGrantedІnputFileErdInput = {
    update: XOR<StorageFileUpdateWithoutGrantedІnputFileErdInput, StorageFileUncheckedUpdateWithoutGrantedІnputFileErdInput>
    create: XOR<StorageFileCreateWithoutGrantedІnputFileErdInput, StorageFileUncheckedCreateWithoutGrantedІnputFileErdInput>
    where?: StorageFileWhereInput
  }

  export type StorageFileUpdateToOneWithWhereWithoutGrantedІnputFileErdInput = {
    where?: StorageFileWhereInput
    data: XOR<StorageFileUpdateWithoutGrantedІnputFileErdInput, StorageFileUncheckedUpdateWithoutGrantedІnputFileErdInput>
  }

  export type StorageFileUpdateWithoutGrantedІnputFileErdInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    driverLicenseProcesses?: ProcessHstsMvsUpdateManyWithoutDriverLicenseFileNestedInput
    carInfoProcesses?: ProcessHstsMvsUpdateManyWithoutCarInfoFileNestedInput
    resultProcessesHstsMvs?: ProcessHstsMvsUpdateManyWithoutResultFileNestedInput
    personInfoProcesses?: ProcessDmsuUpdateManyWithoutPersonInfoFileNestedInput
    resultProcessesDmsu?: ProcessDmsuUpdateManyWithoutResultFileNestedInput
    withoutWMProcesses?: ProcessDmsuUpdateManyWithoutWithoutWMFileNestedInput
    inputFilePfu?: ProcessPfuUpdateManyWithoutInputFileNestedInput
    resultFilePfu?: ProcessPfuUpdateManyWithoutResultFileNestedInput
    acceptedІnputFileErd?: ProcessErdUpdateManyWithoutAcceptedІnputFileNestedInput
    resultFileErd?: ProcessErdUpdateManyWithoutResultFileNestedInput
  }

  export type StorageFileUncheckedUpdateWithoutGrantedІnputFileErdInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    driverLicenseProcesses?: ProcessHstsMvsUncheckedUpdateManyWithoutDriverLicenseFileNestedInput
    carInfoProcesses?: ProcessHstsMvsUncheckedUpdateManyWithoutCarInfoFileNestedInput
    resultProcessesHstsMvs?: ProcessHstsMvsUncheckedUpdateManyWithoutResultFileNestedInput
    personInfoProcesses?: ProcessDmsuUncheckedUpdateManyWithoutPersonInfoFileNestedInput
    resultProcessesDmsu?: ProcessDmsuUncheckedUpdateManyWithoutResultFileNestedInput
    withoutWMProcesses?: ProcessDmsuUncheckedUpdateManyWithoutWithoutWMFileNestedInput
    inputFilePfu?: ProcessPfuUncheckedUpdateManyWithoutInputFileNestedInput
    resultFilePfu?: ProcessPfuUncheckedUpdateManyWithoutResultFileNestedInput
    acceptedІnputFileErd?: ProcessErdUncheckedUpdateManyWithoutAcceptedІnputFileNestedInput
    resultFileErd?: ProcessErdUncheckedUpdateManyWithoutResultFileNestedInput
  }

  export type StorageFileUpsertWithoutAcceptedІnputFileErdInput = {
    update: XOR<StorageFileUpdateWithoutAcceptedІnputFileErdInput, StorageFileUncheckedUpdateWithoutAcceptedІnputFileErdInput>
    create: XOR<StorageFileCreateWithoutAcceptedІnputFileErdInput, StorageFileUncheckedCreateWithoutAcceptedІnputFileErdInput>
    where?: StorageFileWhereInput
  }

  export type StorageFileUpdateToOneWithWhereWithoutAcceptedІnputFileErdInput = {
    where?: StorageFileWhereInput
    data: XOR<StorageFileUpdateWithoutAcceptedІnputFileErdInput, StorageFileUncheckedUpdateWithoutAcceptedІnputFileErdInput>
  }

  export type StorageFileUpdateWithoutAcceptedІnputFileErdInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    driverLicenseProcesses?: ProcessHstsMvsUpdateManyWithoutDriverLicenseFileNestedInput
    carInfoProcesses?: ProcessHstsMvsUpdateManyWithoutCarInfoFileNestedInput
    resultProcessesHstsMvs?: ProcessHstsMvsUpdateManyWithoutResultFileNestedInput
    personInfoProcesses?: ProcessDmsuUpdateManyWithoutPersonInfoFileNestedInput
    resultProcessesDmsu?: ProcessDmsuUpdateManyWithoutResultFileNestedInput
    withoutWMProcesses?: ProcessDmsuUpdateManyWithoutWithoutWMFileNestedInput
    inputFilePfu?: ProcessPfuUpdateManyWithoutInputFileNestedInput
    resultFilePfu?: ProcessPfuUpdateManyWithoutResultFileNestedInput
    grantedІnputFileErd?: ProcessErdUpdateManyWithoutGrantedІnputFileNestedInput
    resultFileErd?: ProcessErdUpdateManyWithoutResultFileNestedInput
  }

  export type StorageFileUncheckedUpdateWithoutAcceptedІnputFileErdInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    driverLicenseProcesses?: ProcessHstsMvsUncheckedUpdateManyWithoutDriverLicenseFileNestedInput
    carInfoProcesses?: ProcessHstsMvsUncheckedUpdateManyWithoutCarInfoFileNestedInput
    resultProcessesHstsMvs?: ProcessHstsMvsUncheckedUpdateManyWithoutResultFileNestedInput
    personInfoProcesses?: ProcessDmsuUncheckedUpdateManyWithoutPersonInfoFileNestedInput
    resultProcessesDmsu?: ProcessDmsuUncheckedUpdateManyWithoutResultFileNestedInput
    withoutWMProcesses?: ProcessDmsuUncheckedUpdateManyWithoutWithoutWMFileNestedInput
    inputFilePfu?: ProcessPfuUncheckedUpdateManyWithoutInputFileNestedInput
    resultFilePfu?: ProcessPfuUncheckedUpdateManyWithoutResultFileNestedInput
    grantedІnputFileErd?: ProcessErdUncheckedUpdateManyWithoutGrantedІnputFileNestedInput
    resultFileErd?: ProcessErdUncheckedUpdateManyWithoutResultFileNestedInput
  }

  export type StorageFileUpsertWithoutResultFileErdInput = {
    update: XOR<StorageFileUpdateWithoutResultFileErdInput, StorageFileUncheckedUpdateWithoutResultFileErdInput>
    create: XOR<StorageFileCreateWithoutResultFileErdInput, StorageFileUncheckedCreateWithoutResultFileErdInput>
    where?: StorageFileWhereInput
  }

  export type StorageFileUpdateToOneWithWhereWithoutResultFileErdInput = {
    where?: StorageFileWhereInput
    data: XOR<StorageFileUpdateWithoutResultFileErdInput, StorageFileUncheckedUpdateWithoutResultFileErdInput>
  }

  export type StorageFileUpdateWithoutResultFileErdInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    driverLicenseProcesses?: ProcessHstsMvsUpdateManyWithoutDriverLicenseFileNestedInput
    carInfoProcesses?: ProcessHstsMvsUpdateManyWithoutCarInfoFileNestedInput
    resultProcessesHstsMvs?: ProcessHstsMvsUpdateManyWithoutResultFileNestedInput
    personInfoProcesses?: ProcessDmsuUpdateManyWithoutPersonInfoFileNestedInput
    resultProcessesDmsu?: ProcessDmsuUpdateManyWithoutResultFileNestedInput
    withoutWMProcesses?: ProcessDmsuUpdateManyWithoutWithoutWMFileNestedInput
    inputFilePfu?: ProcessPfuUpdateManyWithoutInputFileNestedInput
    resultFilePfu?: ProcessPfuUpdateManyWithoutResultFileNestedInput
    grantedІnputFileErd?: ProcessErdUpdateManyWithoutGrantedІnputFileNestedInput
    acceptedІnputFileErd?: ProcessErdUpdateManyWithoutAcceptedІnputFileNestedInput
  }

  export type StorageFileUncheckedUpdateWithoutResultFileErdInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputFilename?: StringFieldUpdateOperationsInput | string
    outputFilename?: NullableStringFieldUpdateOperationsInput | string | null
    extension?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    bucket?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    driverLicenseProcesses?: ProcessHstsMvsUncheckedUpdateManyWithoutDriverLicenseFileNestedInput
    carInfoProcesses?: ProcessHstsMvsUncheckedUpdateManyWithoutCarInfoFileNestedInput
    resultProcessesHstsMvs?: ProcessHstsMvsUncheckedUpdateManyWithoutResultFileNestedInput
    personInfoProcesses?: ProcessDmsuUncheckedUpdateManyWithoutPersonInfoFileNestedInput
    resultProcessesDmsu?: ProcessDmsuUncheckedUpdateManyWithoutResultFileNestedInput
    withoutWMProcesses?: ProcessDmsuUncheckedUpdateManyWithoutWithoutWMFileNestedInput
    inputFilePfu?: ProcessPfuUncheckedUpdateManyWithoutInputFileNestedInput
    resultFilePfu?: ProcessPfuUncheckedUpdateManyWithoutResultFileNestedInput
    grantedІnputFileErd?: ProcessErdUncheckedUpdateManyWithoutGrantedІnputFileNestedInput
    acceptedІnputFileErd?: ProcessErdUncheckedUpdateManyWithoutAcceptedІnputFileNestedInput
  }

  export type ProcessCreateManyUserInput = {
    id?: string
    status?: $Enums.Status
    owner?: string | null
    type: $Enums.ProcessType
    createdAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type ProcessUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hstsMvs?: ProcessHstsMvsUpdateOneWithoutProcessNestedInput
    dmsu?: ProcessDmsuUpdateOneWithoutProcessNestedInput
    pfu?: ProcessPfuUpdateOneWithoutProcessNestedInput
    erd?: ProcessErdUpdateOneWithoutProcessNestedInput
  }

  export type ProcessUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hstsMvs?: ProcessHstsMvsUncheckedUpdateOneWithoutProcessNestedInput
    dmsu?: ProcessDmsuUncheckedUpdateOneWithoutProcessNestedInput
    pfu?: ProcessPfuUncheckedUpdateOneWithoutProcessNestedInput
    erd?: ProcessErdUncheckedUpdateOneWithoutProcessNestedInput
  }

  export type ProcessUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProcessHstsMvsCreateManyDriverLicenseFileInput = {
    processId: string
    carInfoFileId: string
    resultFileId?: string | null
    isAi?: boolean
    stage?: $Enums.HstsMvsStage
    errorMessage?: string | null
  }

  export type ProcessHstsMvsCreateManyCarInfoFileInput = {
    processId: string
    driverLicenseFileId?: string | null
    resultFileId?: string | null
    isAi?: boolean
    stage?: $Enums.HstsMvsStage
    errorMessage?: string | null
  }

  export type ProcessHstsMvsCreateManyResultFileInput = {
    processId: string
    driverLicenseFileId?: string | null
    carInfoFileId: string
    isAi?: boolean
    stage?: $Enums.HstsMvsStage
    errorMessage?: string | null
  }

  export type ProcessDmsuCreateManyPersonInfoFileInput = {
    processId: string
    resultFileId?: string | null
    withoutWMFileId?: string | null
    isAi?: boolean
    stage?: $Enums.DmsuStage
    errorMessage?: string | null
  }

  export type ProcessDmsuCreateManyResultFileInput = {
    processId: string
    personInfoFileId: string
    withoutWMFileId?: string | null
    isAi?: boolean
    stage?: $Enums.DmsuStage
    errorMessage?: string | null
  }

  export type ProcessDmsuCreateManyWithoutWMFileInput = {
    processId: string
    personInfoFileId: string
    resultFileId?: string | null
    isAi?: boolean
    stage?: $Enums.DmsuStage
    errorMessage?: string | null
  }

  export type ProcessPfuCreateManyInputFileInput = {
    processId: string
    resultFileId?: string | null
    isAi?: boolean
    stage?: $Enums.PfuStage
    errorMessage?: string | null
  }

  export type ProcessPfuCreateManyResultFileInput = {
    processId: string
    inputFileId: string
    isAi?: boolean
    stage?: $Enums.PfuStage
    errorMessage?: string | null
  }

  export type ProcessErdCreateManyGrantedІnputFileInput = {
    processId: string
    acceptedІnputFileId?: string | null
    resultFileId?: string | null
    isAi?: boolean
    stage?: $Enums.ErdStage
    errorMessage?: string | null
  }

  export type ProcessErdCreateManyAcceptedІnputFileInput = {
    processId: string
    grantedІnputFileId?: string | null
    resultFileId?: string | null
    isAi?: boolean
    stage?: $Enums.ErdStage
    errorMessage?: string | null
  }

  export type ProcessErdCreateManyResultFileInput = {
    processId: string
    grantedІnputFileId?: string | null
    acceptedІnputFileId?: string | null
    isAi?: boolean
    stage?: $Enums.ErdStage
    errorMessage?: string | null
  }

  export type ProcessHstsMvsUpdateWithoutDriverLicenseFileInput = {
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    process?: ProcessUpdateOneRequiredWithoutHstsMvsNestedInput
    carInfoFile?: StorageFileUpdateOneRequiredWithoutCarInfoProcessesNestedInput
    resultFile?: StorageFileUpdateOneWithoutResultProcessesHstsMvsNestedInput
  }

  export type ProcessHstsMvsUncheckedUpdateWithoutDriverLicenseFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    carInfoFileId?: StringFieldUpdateOperationsInput | string
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessHstsMvsUncheckedUpdateManyWithoutDriverLicenseFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    carInfoFileId?: StringFieldUpdateOperationsInput | string
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessHstsMvsUpdateWithoutCarInfoFileInput = {
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    process?: ProcessUpdateOneRequiredWithoutHstsMvsNestedInput
    driverLicenseFile?: StorageFileUpdateOneWithoutDriverLicenseProcessesNestedInput
    resultFile?: StorageFileUpdateOneWithoutResultProcessesHstsMvsNestedInput
  }

  export type ProcessHstsMvsUncheckedUpdateWithoutCarInfoFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    driverLicenseFileId?: NullableStringFieldUpdateOperationsInput | string | null
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessHstsMvsUncheckedUpdateManyWithoutCarInfoFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    driverLicenseFileId?: NullableStringFieldUpdateOperationsInput | string | null
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessHstsMvsUpdateWithoutResultFileInput = {
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    process?: ProcessUpdateOneRequiredWithoutHstsMvsNestedInput
    driverLicenseFile?: StorageFileUpdateOneWithoutDriverLicenseProcessesNestedInput
    carInfoFile?: StorageFileUpdateOneRequiredWithoutCarInfoProcessesNestedInput
  }

  export type ProcessHstsMvsUncheckedUpdateWithoutResultFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    driverLicenseFileId?: NullableStringFieldUpdateOperationsInput | string | null
    carInfoFileId?: StringFieldUpdateOperationsInput | string
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessHstsMvsUncheckedUpdateManyWithoutResultFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    driverLicenseFileId?: NullableStringFieldUpdateOperationsInput | string | null
    carInfoFileId?: StringFieldUpdateOperationsInput | string
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumHstsMvsStageFieldUpdateOperationsInput | $Enums.HstsMvsStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessDmsuUpdateWithoutPersonInfoFileInput = {
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumDmsuStageFieldUpdateOperationsInput | $Enums.DmsuStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    process?: ProcessUpdateOneRequiredWithoutDmsuNestedInput
    resultFile?: StorageFileUpdateOneWithoutResultProcessesDmsuNestedInput
    withoutWMFile?: StorageFileUpdateOneWithoutWithoutWMProcessesNestedInput
  }

  export type ProcessDmsuUncheckedUpdateWithoutPersonInfoFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    withoutWMFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumDmsuStageFieldUpdateOperationsInput | $Enums.DmsuStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessDmsuUncheckedUpdateManyWithoutPersonInfoFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    withoutWMFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumDmsuStageFieldUpdateOperationsInput | $Enums.DmsuStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessDmsuUpdateWithoutResultFileInput = {
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumDmsuStageFieldUpdateOperationsInput | $Enums.DmsuStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    process?: ProcessUpdateOneRequiredWithoutDmsuNestedInput
    personInfoFile?: StorageFileUpdateOneRequiredWithoutPersonInfoProcessesNestedInput
    withoutWMFile?: StorageFileUpdateOneWithoutWithoutWMProcessesNestedInput
  }

  export type ProcessDmsuUncheckedUpdateWithoutResultFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    personInfoFileId?: StringFieldUpdateOperationsInput | string
    withoutWMFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumDmsuStageFieldUpdateOperationsInput | $Enums.DmsuStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessDmsuUncheckedUpdateManyWithoutResultFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    personInfoFileId?: StringFieldUpdateOperationsInput | string
    withoutWMFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumDmsuStageFieldUpdateOperationsInput | $Enums.DmsuStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessDmsuUpdateWithoutWithoutWMFileInput = {
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumDmsuStageFieldUpdateOperationsInput | $Enums.DmsuStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    process?: ProcessUpdateOneRequiredWithoutDmsuNestedInput
    personInfoFile?: StorageFileUpdateOneRequiredWithoutPersonInfoProcessesNestedInput
    resultFile?: StorageFileUpdateOneWithoutResultProcessesDmsuNestedInput
  }

  export type ProcessDmsuUncheckedUpdateWithoutWithoutWMFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    personInfoFileId?: StringFieldUpdateOperationsInput | string
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumDmsuStageFieldUpdateOperationsInput | $Enums.DmsuStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessDmsuUncheckedUpdateManyWithoutWithoutWMFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    personInfoFileId?: StringFieldUpdateOperationsInput | string
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumDmsuStageFieldUpdateOperationsInput | $Enums.DmsuStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessPfuUpdateWithoutInputFileInput = {
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumPfuStageFieldUpdateOperationsInput | $Enums.PfuStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    process?: ProcessUpdateOneRequiredWithoutPfuNestedInput
    resultFile?: StorageFileUpdateOneWithoutResultFilePfuNestedInput
  }

  export type ProcessPfuUncheckedUpdateWithoutInputFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumPfuStageFieldUpdateOperationsInput | $Enums.PfuStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessPfuUncheckedUpdateManyWithoutInputFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumPfuStageFieldUpdateOperationsInput | $Enums.PfuStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessPfuUpdateWithoutResultFileInput = {
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumPfuStageFieldUpdateOperationsInput | $Enums.PfuStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    process?: ProcessUpdateOneRequiredWithoutPfuNestedInput
    inputFile?: StorageFileUpdateOneRequiredWithoutInputFilePfuNestedInput
  }

  export type ProcessPfuUncheckedUpdateWithoutResultFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    inputFileId?: StringFieldUpdateOperationsInput | string
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumPfuStageFieldUpdateOperationsInput | $Enums.PfuStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessPfuUncheckedUpdateManyWithoutResultFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    inputFileId?: StringFieldUpdateOperationsInput | string
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumPfuStageFieldUpdateOperationsInput | $Enums.PfuStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessErdUpdateWithoutGrantedІnputFileInput = {
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumErdStageFieldUpdateOperationsInput | $Enums.ErdStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    process?: ProcessUpdateOneRequiredWithoutErdNestedInput
    acceptedІnputFile?: StorageFileUpdateOneWithoutAcceptedІnputFileErdNestedInput
    resultFile?: StorageFileUpdateOneWithoutResultFileErdNestedInput
  }

  export type ProcessErdUncheckedUpdateWithoutGrantedІnputFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    acceptedІnputFileId?: NullableStringFieldUpdateOperationsInput | string | null
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumErdStageFieldUpdateOperationsInput | $Enums.ErdStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessErdUncheckedUpdateManyWithoutGrantedІnputFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    acceptedІnputFileId?: NullableStringFieldUpdateOperationsInput | string | null
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumErdStageFieldUpdateOperationsInput | $Enums.ErdStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessErdUpdateWithoutAcceptedІnputFileInput = {
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumErdStageFieldUpdateOperationsInput | $Enums.ErdStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    process?: ProcessUpdateOneRequiredWithoutErdNestedInput
    grantedІnputFile?: StorageFileUpdateOneWithoutGrantedІnputFileErdNestedInput
    resultFile?: StorageFileUpdateOneWithoutResultFileErdNestedInput
  }

  export type ProcessErdUncheckedUpdateWithoutAcceptedІnputFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    grantedІnputFileId?: NullableStringFieldUpdateOperationsInput | string | null
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumErdStageFieldUpdateOperationsInput | $Enums.ErdStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessErdUncheckedUpdateManyWithoutAcceptedІnputFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    grantedІnputFileId?: NullableStringFieldUpdateOperationsInput | string | null
    resultFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumErdStageFieldUpdateOperationsInput | $Enums.ErdStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessErdUpdateWithoutResultFileInput = {
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumErdStageFieldUpdateOperationsInput | $Enums.ErdStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    process?: ProcessUpdateOneRequiredWithoutErdNestedInput
    grantedІnputFile?: StorageFileUpdateOneWithoutGrantedІnputFileErdNestedInput
    acceptedІnputFile?: StorageFileUpdateOneWithoutAcceptedІnputFileErdNestedInput
  }

  export type ProcessErdUncheckedUpdateWithoutResultFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    grantedІnputFileId?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedІnputFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumErdStageFieldUpdateOperationsInput | $Enums.ErdStage
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessErdUncheckedUpdateManyWithoutResultFileInput = {
    processId?: StringFieldUpdateOperationsInput | string
    grantedІnputFileId?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedІnputFileId?: NullableStringFieldUpdateOperationsInput | string | null
    isAi?: BoolFieldUpdateOperationsInput | boolean
    stage?: EnumErdStageFieldUpdateOperationsInput | $Enums.ErdStage
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