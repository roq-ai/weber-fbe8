/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model citation
 *
 */
export type citation = $Result.DefaultSelection<Prisma.$citationPayload>;
/**
 * Model collaboration
 *
 */
export type collaboration = $Result.DefaultSelection<Prisma.$collaborationPayload>;
/**
 * Model conference
 *
 */
export type conference = $Result.DefaultSelection<Prisma.$conferencePayload>;
/**
 * Model organization
 *
 */
export type organization = $Result.DefaultSelection<Prisma.$organizationPayload>;
/**
 * Model patent
 *
 */
export type patent = $Result.DefaultSelection<Prisma.$patentPayload>;
/**
 * Model project
 *
 */
export type project = $Result.DefaultSelection<Prisma.$projectPayload>;
/**
 * Model publication
 *
 */
export type publication = $Result.DefaultSelection<Prisma.$publicationPayload>;
/**
 * Model research
 *
 */
export type research = $Result.DefaultSelection<Prisma.$researchPayload>;
/**
 * Model research_interest
 *
 */
export type research_interest = $Result.DefaultSelection<Prisma.$research_interestPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;
/**
 * Model workshop
 *
 */
export type workshop = $Result.DefaultSelection<Prisma.$workshopPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Citations
 * const citations = await prisma.citation.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Citations
   * const citations = await prisma.citation.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.citation`: Exposes CRUD operations for the **citation** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Citations
   * const citations = await prisma.citation.findMany()
   * ```
   */
  get citation(): Prisma.citationDelegate<ExtArgs>;

  /**
   * `prisma.collaboration`: Exposes CRUD operations for the **collaboration** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Collaborations
   * const collaborations = await prisma.collaboration.findMany()
   * ```
   */
  get collaboration(): Prisma.collaborationDelegate<ExtArgs>;

  /**
   * `prisma.conference`: Exposes CRUD operations for the **conference** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Conferences
   * const conferences = await prisma.conference.findMany()
   * ```
   */
  get conference(): Prisma.conferenceDelegate<ExtArgs>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **organization** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   */
  get organization(): Prisma.organizationDelegate<ExtArgs>;

  /**
   * `prisma.patent`: Exposes CRUD operations for the **patent** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Patents
   * const patents = await prisma.patent.findMany()
   * ```
   */
  get patent(): Prisma.patentDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **project** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   */
  get project(): Prisma.projectDelegate<ExtArgs>;

  /**
   * `prisma.publication`: Exposes CRUD operations for the **publication** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Publications
   * const publications = await prisma.publication.findMany()
   * ```
   */
  get publication(): Prisma.publicationDelegate<ExtArgs>;

  /**
   * `prisma.research`: Exposes CRUD operations for the **research** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Research
   * const research = await prisma.research.findMany()
   * ```
   */
  get research(): Prisma.researchDelegate<ExtArgs>;

  /**
   * `prisma.research_interest`: Exposes CRUD operations for the **research_interest** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Research_interests
   * const research_interests = await prisma.research_interest.findMany()
   * ```
   */
  get research_interest(): Prisma.research_interestDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.workshop`: Exposes CRUD operations for the **workshop** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Workshops
   * const workshops = await prisma.workshop.findMany()
   * ```
   */
  get workshop(): Prisma.workshopDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    citation: 'citation';
    collaboration: 'collaboration';
    conference: 'conference';
    organization: 'organization';
    patent: 'patent';
    project: 'project';
    publication: 'publication';
    research: 'research';
    research_interest: 'research_interest';
    user: 'user';
    workshop: 'workshop';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps:
        | 'citation'
        | 'collaboration'
        | 'conference'
        | 'organization'
        | 'patent'
        | 'project'
        | 'publication'
        | 'research'
        | 'research_interest'
        | 'user'
        | 'workshop';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      citation: {
        payload: Prisma.$citationPayload<ExtArgs>;
        fields: Prisma.citationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.citationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$citationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.citationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$citationPayload>;
          };
          findFirst: {
            args: Prisma.citationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$citationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.citationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$citationPayload>;
          };
          findMany: {
            args: Prisma.citationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$citationPayload>[];
          };
          create: {
            args: Prisma.citationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$citationPayload>;
          };
          createMany: {
            args: Prisma.citationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.citationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$citationPayload>;
          };
          update: {
            args: Prisma.citationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$citationPayload>;
          };
          deleteMany: {
            args: Prisma.citationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.citationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.citationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$citationPayload>;
          };
          aggregate: {
            args: Prisma.CitationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCitation>;
          };
          groupBy: {
            args: Prisma.citationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CitationGroupByOutputType>[];
          };
          count: {
            args: Prisma.citationCountArgs<ExtArgs>;
            result: $Utils.Optional<CitationCountAggregateOutputType> | number;
          };
        };
      };
      collaboration: {
        payload: Prisma.$collaborationPayload<ExtArgs>;
        fields: Prisma.collaborationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.collaborationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collaborationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.collaborationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collaborationPayload>;
          };
          findFirst: {
            args: Prisma.collaborationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collaborationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.collaborationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collaborationPayload>;
          };
          findMany: {
            args: Prisma.collaborationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collaborationPayload>[];
          };
          create: {
            args: Prisma.collaborationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collaborationPayload>;
          };
          createMany: {
            args: Prisma.collaborationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.collaborationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collaborationPayload>;
          };
          update: {
            args: Prisma.collaborationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collaborationPayload>;
          };
          deleteMany: {
            args: Prisma.collaborationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.collaborationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.collaborationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collaborationPayload>;
          };
          aggregate: {
            args: Prisma.CollaborationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCollaboration>;
          };
          groupBy: {
            args: Prisma.collaborationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CollaborationGroupByOutputType>[];
          };
          count: {
            args: Prisma.collaborationCountArgs<ExtArgs>;
            result: $Utils.Optional<CollaborationCountAggregateOutputType> | number;
          };
        };
      };
      conference: {
        payload: Prisma.$conferencePayload<ExtArgs>;
        fields: Prisma.conferenceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.conferenceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$conferencePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.conferenceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$conferencePayload>;
          };
          findFirst: {
            args: Prisma.conferenceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$conferencePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.conferenceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$conferencePayload>;
          };
          findMany: {
            args: Prisma.conferenceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$conferencePayload>[];
          };
          create: {
            args: Prisma.conferenceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$conferencePayload>;
          };
          createMany: {
            args: Prisma.conferenceCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.conferenceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$conferencePayload>;
          };
          update: {
            args: Prisma.conferenceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$conferencePayload>;
          };
          deleteMany: {
            args: Prisma.conferenceDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.conferenceUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.conferenceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$conferencePayload>;
          };
          aggregate: {
            args: Prisma.ConferenceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateConference>;
          };
          groupBy: {
            args: Prisma.conferenceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ConferenceGroupByOutputType>[];
          };
          count: {
            args: Prisma.conferenceCountArgs<ExtArgs>;
            result: $Utils.Optional<ConferenceCountAggregateOutputType> | number;
          };
        };
      };
      organization: {
        payload: Prisma.$organizationPayload<ExtArgs>;
        fields: Prisma.organizationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.organizationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.organizationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findFirst: {
            args: Prisma.organizationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.organizationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findMany: {
            args: Prisma.organizationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[];
          };
          create: {
            args: Prisma.organizationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          createMany: {
            args: Prisma.organizationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.organizationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          update: {
            args: Prisma.organizationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          deleteMany: {
            args: Prisma.organizationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.organizationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.organizationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganization>;
          };
          groupBy: {
            args: Prisma.organizationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationGroupByOutputType>[];
          };
          count: {
            args: Prisma.organizationCountArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number;
          };
        };
      };
      patent: {
        payload: Prisma.$patentPayload<ExtArgs>;
        fields: Prisma.patentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.patentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.patentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patentPayload>;
          };
          findFirst: {
            args: Prisma.patentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.patentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patentPayload>;
          };
          findMany: {
            args: Prisma.patentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patentPayload>[];
          };
          create: {
            args: Prisma.patentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patentPayload>;
          };
          createMany: {
            args: Prisma.patentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.patentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patentPayload>;
          };
          update: {
            args: Prisma.patentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patentPayload>;
          };
          deleteMany: {
            args: Prisma.patentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.patentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.patentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patentPayload>;
          };
          aggregate: {
            args: Prisma.PatentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePatent>;
          };
          groupBy: {
            args: Prisma.patentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PatentGroupByOutputType>[];
          };
          count: {
            args: Prisma.patentCountArgs<ExtArgs>;
            result: $Utils.Optional<PatentCountAggregateOutputType> | number;
          };
        };
      };
      project: {
        payload: Prisma.$projectPayload<ExtArgs>;
        fields: Prisma.projectFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.projectFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.projectFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          findFirst: {
            args: Prisma.projectFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.projectFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          findMany: {
            args: Prisma.projectFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[];
          };
          create: {
            args: Prisma.projectCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          createMany: {
            args: Prisma.projectCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.projectDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          update: {
            args: Prisma.projectUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          deleteMany: {
            args: Prisma.projectDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.projectUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.projectUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$projectPayload>;
          };
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProject>;
          };
          groupBy: {
            args: Prisma.projectGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProjectGroupByOutputType>[];
          };
          count: {
            args: Prisma.projectCountArgs<ExtArgs>;
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number;
          };
        };
      };
      publication: {
        payload: Prisma.$publicationPayload<ExtArgs>;
        fields: Prisma.publicationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.publicationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$publicationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.publicationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$publicationPayload>;
          };
          findFirst: {
            args: Prisma.publicationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$publicationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.publicationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$publicationPayload>;
          };
          findMany: {
            args: Prisma.publicationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$publicationPayload>[];
          };
          create: {
            args: Prisma.publicationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$publicationPayload>;
          };
          createMany: {
            args: Prisma.publicationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.publicationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$publicationPayload>;
          };
          update: {
            args: Prisma.publicationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$publicationPayload>;
          };
          deleteMany: {
            args: Prisma.publicationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.publicationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.publicationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$publicationPayload>;
          };
          aggregate: {
            args: Prisma.PublicationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePublication>;
          };
          groupBy: {
            args: Prisma.publicationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PublicationGroupByOutputType>[];
          };
          count: {
            args: Prisma.publicationCountArgs<ExtArgs>;
            result: $Utils.Optional<PublicationCountAggregateOutputType> | number;
          };
        };
      };
      research: {
        payload: Prisma.$researchPayload<ExtArgs>;
        fields: Prisma.researchFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.researchFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$researchPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.researchFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$researchPayload>;
          };
          findFirst: {
            args: Prisma.researchFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$researchPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.researchFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$researchPayload>;
          };
          findMany: {
            args: Prisma.researchFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$researchPayload>[];
          };
          create: {
            args: Prisma.researchCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$researchPayload>;
          };
          createMany: {
            args: Prisma.researchCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.researchDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$researchPayload>;
          };
          update: {
            args: Prisma.researchUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$researchPayload>;
          };
          deleteMany: {
            args: Prisma.researchDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.researchUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.researchUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$researchPayload>;
          };
          aggregate: {
            args: Prisma.ResearchAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateResearch>;
          };
          groupBy: {
            args: Prisma.researchGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ResearchGroupByOutputType>[];
          };
          count: {
            args: Prisma.researchCountArgs<ExtArgs>;
            result: $Utils.Optional<ResearchCountAggregateOutputType> | number;
          };
        };
      };
      research_interest: {
        payload: Prisma.$research_interestPayload<ExtArgs>;
        fields: Prisma.research_interestFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.research_interestFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$research_interestPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.research_interestFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$research_interestPayload>;
          };
          findFirst: {
            args: Prisma.research_interestFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$research_interestPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.research_interestFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$research_interestPayload>;
          };
          findMany: {
            args: Prisma.research_interestFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$research_interestPayload>[];
          };
          create: {
            args: Prisma.research_interestCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$research_interestPayload>;
          };
          createMany: {
            args: Prisma.research_interestCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.research_interestDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$research_interestPayload>;
          };
          update: {
            args: Prisma.research_interestUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$research_interestPayload>;
          };
          deleteMany: {
            args: Prisma.research_interestDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.research_interestUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.research_interestUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$research_interestPayload>;
          };
          aggregate: {
            args: Prisma.Research_interestAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateResearch_interest>;
          };
          groupBy: {
            args: Prisma.research_interestGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Research_interestGroupByOutputType>[];
          };
          count: {
            args: Prisma.research_interestCountArgs<ExtArgs>;
            result: $Utils.Optional<Research_interestCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      workshop: {
        payload: Prisma.$workshopPayload<ExtArgs>;
        fields: Prisma.workshopFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.workshopFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$workshopPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.workshopFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$workshopPayload>;
          };
          findFirst: {
            args: Prisma.workshopFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$workshopPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.workshopFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$workshopPayload>;
          };
          findMany: {
            args: Prisma.workshopFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$workshopPayload>[];
          };
          create: {
            args: Prisma.workshopCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$workshopPayload>;
          };
          createMany: {
            args: Prisma.workshopCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.workshopDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$workshopPayload>;
          };
          update: {
            args: Prisma.workshopUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$workshopPayload>;
          };
          deleteMany: {
            args: Prisma.workshopDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.workshopUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.workshopUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$workshopPayload>;
          };
          aggregate: {
            args: Prisma.WorkshopAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateWorkshop>;
          };
          groupBy: {
            args: Prisma.workshopGroupByArgs<ExtArgs>;
            result: $Utils.Optional<WorkshopGroupByOutputType>[];
          };
          count: {
            args: Prisma.workshopCountArgs<ExtArgs>;
            result: $Utils.Optional<WorkshopCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    project: number;
    research: number;
  };

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | OrganizationCountOutputTypeCountProjectArgs;
    research?: boolean | OrganizationCountOutputTypeCountResearchArgs;
  };

  // Custom InputTypes

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountProjectArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: projectWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountResearchArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: researchWhereInput;
  };

  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    collaboration: number;
  };

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collaboration?: boolean | ProjectCountOutputTypeCountCollaborationArgs;
  };

  // Custom InputTypes

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountCollaborationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: collaborationWhereInput;
  };

  /**
   * Count Type ResearchCountOutputType
   */

  export type ResearchCountOutputType = {
    publication: number;
  };

  export type ResearchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publication?: boolean | ResearchCountOutputTypeCountPublicationArgs;
  };

  // Custom InputTypes

  /**
   * ResearchCountOutputType without action
   */
  export type ResearchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchCountOutputType
     */
    select?: ResearchCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ResearchCountOutputType without action
   */
  export type ResearchCountOutputTypeCountPublicationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: publicationWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    collaboration: number;
    organization: number;
    project: number;
    publication: number;
    research: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collaboration?: boolean | UserCountOutputTypeCountCollaborationArgs;
    organization?: boolean | UserCountOutputTypeCountOrganizationArgs;
    project?: boolean | UserCountOutputTypeCountProjectArgs;
    publication?: boolean | UserCountOutputTypeCountPublicationArgs;
    research?: boolean | UserCountOutputTypeCountResearchArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCollaborationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: collaborationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrganizationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: organizationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: projectWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPublicationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: publicationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResearchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: researchWhereInput;
    };

  /**
   * Models
   */

  /**
   * Model citation
   */

  export type AggregateCitation = {
    _count: CitationCountAggregateOutputType | null;
    _min: CitationMinAggregateOutputType | null;
    _max: CitationMaxAggregateOutputType | null;
  };

  export type CitationMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CitationMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CitationCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CitationMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CitationMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CitationCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which citation to aggregate.
     */
    where?: citationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of citations to fetch.
     */
    orderBy?: citationOrderByWithRelationInput | citationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: citationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` citations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` citations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned citations
     **/
    _count?: true | CitationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CitationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CitationMaxAggregateInputType;
  };

  export type GetCitationAggregateType<T extends CitationAggregateArgs> = {
    [P in keyof T & keyof AggregateCitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCitation[P]>
      : GetScalarType<T[P], AggregateCitation[P]>;
  };

  export type citationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: citationWhereInput;
    orderBy?: citationOrderByWithAggregationInput | citationOrderByWithAggregationInput[];
    by: CitationScalarFieldEnum[] | CitationScalarFieldEnum;
    having?: citationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CitationCountAggregateInputType | true;
    _min?: CitationMinAggregateInputType;
    _max?: CitationMaxAggregateInputType;
  };

  export type CitationGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: CitationCountAggregateOutputType | null;
    _min: CitationMinAggregateOutputType | null;
    _max: CitationMaxAggregateOutputType | null;
  };

  type GetCitationGroupByPayload<T extends citationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CitationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CitationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CitationGroupByOutputType[P]>
          : GetScalarType<T[P], CitationGroupByOutputType[P]>;
      }
    >
  >;

  export type citationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['citation']
    >;

  export type citationSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $citationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'citation';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['citation']
    >;
    composites: {};
  };

  type citationGetPayload<S extends boolean | null | undefined | citationDefaultArgs> = $Result.GetResult<
    Prisma.$citationPayload,
    S
  >;

  type citationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    citationFindManyArgs,
    'select' | 'include'
  > & {
    select?: CitationCountAggregateInputType | true;
  };

  export interface citationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['citation']; meta: { name: 'citation' } };
    /**
     * Find zero or one Citation that matches the filter.
     * @param {citationFindUniqueArgs} args - Arguments to find a Citation
     * @example
     * // Get one Citation
     * const citation = await prisma.citation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends citationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, citationFindUniqueArgs<ExtArgs>>,
    ): Prisma__citationClient<
      $Result.GetResult<Prisma.$citationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Citation that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {citationFindUniqueOrThrowArgs} args - Arguments to find a Citation
     * @example
     * // Get one Citation
     * const citation = await prisma.citation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends citationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, citationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__citationClient<
      $Result.GetResult<Prisma.$citationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Citation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citationFindFirstArgs} args - Arguments to find a Citation
     * @example
     * // Get one Citation
     * const citation = await prisma.citation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends citationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, citationFindFirstArgs<ExtArgs>>,
    ): Prisma__citationClient<
      $Result.GetResult<Prisma.$citationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Citation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citationFindFirstOrThrowArgs} args - Arguments to find a Citation
     * @example
     * // Get one Citation
     * const citation = await prisma.citation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends citationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, citationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__citationClient<
      $Result.GetResult<Prisma.$citationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Citations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Citations
     * const citations = await prisma.citation.findMany()
     *
     * // Get first 10 Citations
     * const citations = await prisma.citation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const citationWithIdOnly = await prisma.citation.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends citationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, citationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$citationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Citation.
     * @param {citationCreateArgs} args - Arguments to create a Citation.
     * @example
     * // Create one Citation
     * const Citation = await prisma.citation.create({
     *   data: {
     *     // ... data to create a Citation
     *   }
     * })
     *
     **/
    create<T extends citationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, citationCreateArgs<ExtArgs>>,
    ): Prisma__citationClient<$Result.GetResult<Prisma.$citationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Citations.
     *     @param {citationCreateManyArgs} args - Arguments to create many Citations.
     *     @example
     *     // Create many Citations
     *     const citation = await prisma.citation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends citationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, citationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Citation.
     * @param {citationDeleteArgs} args - Arguments to delete one Citation.
     * @example
     * // Delete one Citation
     * const Citation = await prisma.citation.delete({
     *   where: {
     *     // ... filter to delete one Citation
     *   }
     * })
     *
     **/
    delete<T extends citationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, citationDeleteArgs<ExtArgs>>,
    ): Prisma__citationClient<$Result.GetResult<Prisma.$citationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Citation.
     * @param {citationUpdateArgs} args - Arguments to update one Citation.
     * @example
     * // Update one Citation
     * const citation = await prisma.citation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends citationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, citationUpdateArgs<ExtArgs>>,
    ): Prisma__citationClient<$Result.GetResult<Prisma.$citationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Citations.
     * @param {citationDeleteManyArgs} args - Arguments to filter Citations to delete.
     * @example
     * // Delete a few Citations
     * const { count } = await prisma.citation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends citationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, citationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Citations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Citations
     * const citation = await prisma.citation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends citationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, citationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Citation.
     * @param {citationUpsertArgs} args - Arguments to update or create a Citation.
     * @example
     * // Update or create a Citation
     * const citation = await prisma.citation.upsert({
     *   create: {
     *     // ... data to create a Citation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Citation we want to update
     *   }
     * })
     **/
    upsert<T extends citationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, citationUpsertArgs<ExtArgs>>,
    ): Prisma__citationClient<$Result.GetResult<Prisma.$citationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Citations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citationCountArgs} args - Arguments to filter Citations to count.
     * @example
     * // Count the number of Citations
     * const count = await prisma.citation.count({
     *   where: {
     *     // ... the filter for the Citations we want to count
     *   }
     * })
     **/
    count<T extends citationCountArgs>(
      args?: Subset<T, citationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CitationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Citation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CitationAggregateArgs>(
      args: Subset<T, CitationAggregateArgs>,
    ): Prisma.PrismaPromise<GetCitationAggregateType<T>>;

    /**
     * Group by Citation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citationGroupByArgs} args - Group by arguments.
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
      T extends citationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: citationGroupByArgs['orderBy'] }
        : { orderBy?: citationGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, citationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the citation model
     */
    readonly fields: citationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for citation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__citationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the citation model
   */
  interface citationFieldRefs {
    readonly id: FieldRef<'citation', 'String'>;
    readonly created_at: FieldRef<'citation', 'DateTime'>;
    readonly updated_at: FieldRef<'citation', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * citation findUnique
   */
  export type citationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the citation
     */
    select?: citationSelect<ExtArgs> | null;
    /**
     * Filter, which citation to fetch.
     */
    where: citationWhereUniqueInput;
  };

  /**
   * citation findUniqueOrThrow
   */
  export type citationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the citation
     */
    select?: citationSelect<ExtArgs> | null;
    /**
     * Filter, which citation to fetch.
     */
    where: citationWhereUniqueInput;
  };

  /**
   * citation findFirst
   */
  export type citationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the citation
     */
    select?: citationSelect<ExtArgs> | null;
    /**
     * Filter, which citation to fetch.
     */
    where?: citationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of citations to fetch.
     */
    orderBy?: citationOrderByWithRelationInput | citationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for citations.
     */
    cursor?: citationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` citations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` citations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of citations.
     */
    distinct?: CitationScalarFieldEnum | CitationScalarFieldEnum[];
  };

  /**
   * citation findFirstOrThrow
   */
  export type citationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the citation
     */
    select?: citationSelect<ExtArgs> | null;
    /**
     * Filter, which citation to fetch.
     */
    where?: citationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of citations to fetch.
     */
    orderBy?: citationOrderByWithRelationInput | citationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for citations.
     */
    cursor?: citationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` citations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` citations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of citations.
     */
    distinct?: CitationScalarFieldEnum | CitationScalarFieldEnum[];
  };

  /**
   * citation findMany
   */
  export type citationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the citation
     */
    select?: citationSelect<ExtArgs> | null;
    /**
     * Filter, which citations to fetch.
     */
    where?: citationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of citations to fetch.
     */
    orderBy?: citationOrderByWithRelationInput | citationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing citations.
     */
    cursor?: citationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` citations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` citations.
     */
    skip?: number;
    distinct?: CitationScalarFieldEnum | CitationScalarFieldEnum[];
  };

  /**
   * citation create
   */
  export type citationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the citation
     */
    select?: citationSelect<ExtArgs> | null;
    /**
     * The data needed to create a citation.
     */
    data?: XOR<citationCreateInput, citationUncheckedCreateInput>;
  };

  /**
   * citation createMany
   */
  export type citationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many citations.
     */
    data: citationCreateManyInput | citationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * citation update
   */
  export type citationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the citation
     */
    select?: citationSelect<ExtArgs> | null;
    /**
     * The data needed to update a citation.
     */
    data: XOR<citationUpdateInput, citationUncheckedUpdateInput>;
    /**
     * Choose, which citation to update.
     */
    where: citationWhereUniqueInput;
  };

  /**
   * citation updateMany
   */
  export type citationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update citations.
     */
    data: XOR<citationUpdateManyMutationInput, citationUncheckedUpdateManyInput>;
    /**
     * Filter which citations to update
     */
    where?: citationWhereInput;
  };

  /**
   * citation upsert
   */
  export type citationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the citation
     */
    select?: citationSelect<ExtArgs> | null;
    /**
     * The filter to search for the citation to update in case it exists.
     */
    where: citationWhereUniqueInput;
    /**
     * In case the citation found by the `where` argument doesn't exist, create a new citation with this data.
     */
    create: XOR<citationCreateInput, citationUncheckedCreateInput>;
    /**
     * In case the citation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<citationUpdateInput, citationUncheckedUpdateInput>;
  };

  /**
   * citation delete
   */
  export type citationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the citation
     */
    select?: citationSelect<ExtArgs> | null;
    /**
     * Filter which citation to delete.
     */
    where: citationWhereUniqueInput;
  };

  /**
   * citation deleteMany
   */
  export type citationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which citations to delete
     */
    where?: citationWhereInput;
  };

  /**
   * citation without action
   */
  export type citationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the citation
     */
    select?: citationSelect<ExtArgs> | null;
  };

  /**
   * Model collaboration
   */

  export type AggregateCollaboration = {
    _count: CollaborationCountAggregateOutputType | null;
    _min: CollaborationMinAggregateOutputType | null;
    _max: CollaborationMaxAggregateOutputType | null;
  };

  export type CollaborationMinAggregateOutputType = {
    id: string | null;
    collaborator_id: string | null;
    project_id: string | null;
    role: string | null;
    start_date: Date | null;
    end_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CollaborationMaxAggregateOutputType = {
    id: string | null;
    collaborator_id: string | null;
    project_id: string | null;
    role: string | null;
    start_date: Date | null;
    end_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CollaborationCountAggregateOutputType = {
    id: number;
    collaborator_id: number;
    project_id: number;
    role: number;
    start_date: number;
    end_date: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CollaborationMinAggregateInputType = {
    id?: true;
    collaborator_id?: true;
    project_id?: true;
    role?: true;
    start_date?: true;
    end_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CollaborationMaxAggregateInputType = {
    id?: true;
    collaborator_id?: true;
    project_id?: true;
    role?: true;
    start_date?: true;
    end_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CollaborationCountAggregateInputType = {
    id?: true;
    collaborator_id?: true;
    project_id?: true;
    role?: true;
    start_date?: true;
    end_date?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CollaborationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which collaboration to aggregate.
     */
    where?: collaborationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of collaborations to fetch.
     */
    orderBy?: collaborationOrderByWithRelationInput | collaborationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: collaborationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` collaborations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` collaborations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned collaborations
     **/
    _count?: true | CollaborationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CollaborationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CollaborationMaxAggregateInputType;
  };

  export type GetCollaborationAggregateType<T extends CollaborationAggregateArgs> = {
    [P in keyof T & keyof AggregateCollaboration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollaboration[P]>
      : GetScalarType<T[P], AggregateCollaboration[P]>;
  };

  export type collaborationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: collaborationWhereInput;
    orderBy?: collaborationOrderByWithAggregationInput | collaborationOrderByWithAggregationInput[];
    by: CollaborationScalarFieldEnum[] | CollaborationScalarFieldEnum;
    having?: collaborationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CollaborationCountAggregateInputType | true;
    _min?: CollaborationMinAggregateInputType;
    _max?: CollaborationMaxAggregateInputType;
  };

  export type CollaborationGroupByOutputType = {
    id: string;
    collaborator_id: string;
    project_id: string;
    role: string | null;
    start_date: Date | null;
    end_date: Date | null;
    created_at: Date;
    updated_at: Date;
    _count: CollaborationCountAggregateOutputType | null;
    _min: CollaborationMinAggregateOutputType | null;
    _max: CollaborationMaxAggregateOutputType | null;
  };

  type GetCollaborationGroupByPayload<T extends collaborationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollaborationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CollaborationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CollaborationGroupByOutputType[P]>
          : GetScalarType<T[P], CollaborationGroupByOutputType[P]>;
      }
    >
  >;

  export type collaborationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        collaborator_id?: boolean;
        project_id?: boolean;
        role?: boolean;
        start_date?: boolean;
        end_date?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
        project?: boolean | projectDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['collaboration']
    >;

  export type collaborationSelectScalar = {
    id?: boolean;
    collaborator_id?: boolean;
    project_id?: boolean;
    role?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type collaborationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    project?: boolean | projectDefaultArgs<ExtArgs>;
  };

  export type $collaborationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'collaboration';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      project: Prisma.$projectPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        collaborator_id: string;
        project_id: string;
        role: string | null;
        start_date: Date | null;
        end_date: Date | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['collaboration']
    >;
    composites: {};
  };

  type collaborationGetPayload<S extends boolean | null | undefined | collaborationDefaultArgs> = $Result.GetResult<
    Prisma.$collaborationPayload,
    S
  >;

  type collaborationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    collaborationFindManyArgs,
    'select' | 'include'
  > & {
    select?: CollaborationCountAggregateInputType | true;
  };

  export interface collaborationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['collaboration']; meta: { name: 'collaboration' } };
    /**
     * Find zero or one Collaboration that matches the filter.
     * @param {collaborationFindUniqueArgs} args - Arguments to find a Collaboration
     * @example
     * // Get one Collaboration
     * const collaboration = await prisma.collaboration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends collaborationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, collaborationFindUniqueArgs<ExtArgs>>,
    ): Prisma__collaborationClient<
      $Result.GetResult<Prisma.$collaborationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Collaboration that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {collaborationFindUniqueOrThrowArgs} args - Arguments to find a Collaboration
     * @example
     * // Get one Collaboration
     * const collaboration = await prisma.collaboration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends collaborationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, collaborationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__collaborationClient<
      $Result.GetResult<Prisma.$collaborationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Collaboration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collaborationFindFirstArgs} args - Arguments to find a Collaboration
     * @example
     * // Get one Collaboration
     * const collaboration = await prisma.collaboration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends collaborationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, collaborationFindFirstArgs<ExtArgs>>,
    ): Prisma__collaborationClient<
      $Result.GetResult<Prisma.$collaborationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Collaboration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collaborationFindFirstOrThrowArgs} args - Arguments to find a Collaboration
     * @example
     * // Get one Collaboration
     * const collaboration = await prisma.collaboration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends collaborationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, collaborationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__collaborationClient<
      $Result.GetResult<Prisma.$collaborationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Collaborations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collaborationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collaborations
     * const collaborations = await prisma.collaboration.findMany()
     *
     * // Get first 10 Collaborations
     * const collaborations = await prisma.collaboration.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const collaborationWithIdOnly = await prisma.collaboration.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends collaborationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, collaborationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$collaborationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Collaboration.
     * @param {collaborationCreateArgs} args - Arguments to create a Collaboration.
     * @example
     * // Create one Collaboration
     * const Collaboration = await prisma.collaboration.create({
     *   data: {
     *     // ... data to create a Collaboration
     *   }
     * })
     *
     **/
    create<T extends collaborationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, collaborationCreateArgs<ExtArgs>>,
    ): Prisma__collaborationClient<
      $Result.GetResult<Prisma.$collaborationPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Collaborations.
     *     @param {collaborationCreateManyArgs} args - Arguments to create many Collaborations.
     *     @example
     *     // Create many Collaborations
     *     const collaboration = await prisma.collaboration.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends collaborationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, collaborationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Collaboration.
     * @param {collaborationDeleteArgs} args - Arguments to delete one Collaboration.
     * @example
     * // Delete one Collaboration
     * const Collaboration = await prisma.collaboration.delete({
     *   where: {
     *     // ... filter to delete one Collaboration
     *   }
     * })
     *
     **/
    delete<T extends collaborationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, collaborationDeleteArgs<ExtArgs>>,
    ): Prisma__collaborationClient<
      $Result.GetResult<Prisma.$collaborationPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Collaboration.
     * @param {collaborationUpdateArgs} args - Arguments to update one Collaboration.
     * @example
     * // Update one Collaboration
     * const collaboration = await prisma.collaboration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends collaborationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, collaborationUpdateArgs<ExtArgs>>,
    ): Prisma__collaborationClient<
      $Result.GetResult<Prisma.$collaborationPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Collaborations.
     * @param {collaborationDeleteManyArgs} args - Arguments to filter Collaborations to delete.
     * @example
     * // Delete a few Collaborations
     * const { count } = await prisma.collaboration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends collaborationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, collaborationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Collaborations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collaborationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collaborations
     * const collaboration = await prisma.collaboration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends collaborationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, collaborationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Collaboration.
     * @param {collaborationUpsertArgs} args - Arguments to update or create a Collaboration.
     * @example
     * // Update or create a Collaboration
     * const collaboration = await prisma.collaboration.upsert({
     *   create: {
     *     // ... data to create a Collaboration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collaboration we want to update
     *   }
     * })
     **/
    upsert<T extends collaborationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, collaborationUpsertArgs<ExtArgs>>,
    ): Prisma__collaborationClient<
      $Result.GetResult<Prisma.$collaborationPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Collaborations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collaborationCountArgs} args - Arguments to filter Collaborations to count.
     * @example
     * // Count the number of Collaborations
     * const count = await prisma.collaboration.count({
     *   where: {
     *     // ... the filter for the Collaborations we want to count
     *   }
     * })
     **/
    count<T extends collaborationCountArgs>(
      args?: Subset<T, collaborationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollaborationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Collaboration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollaborationAggregateArgs>(
      args: Subset<T, CollaborationAggregateArgs>,
    ): Prisma.PrismaPromise<GetCollaborationAggregateType<T>>;

    /**
     * Group by Collaboration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collaborationGroupByArgs} args - Group by arguments.
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
      T extends collaborationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: collaborationGroupByArgs['orderBy'] }
        : { orderBy?: collaborationGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, collaborationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCollaborationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the collaboration model
     */
    readonly fields: collaborationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for collaboration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__collaborationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    project<T extends projectDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, projectDefaultArgs<ExtArgs>>,
    ): Prisma__projectClient<
      $Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the collaboration model
   */
  interface collaborationFieldRefs {
    readonly id: FieldRef<'collaboration', 'String'>;
    readonly collaborator_id: FieldRef<'collaboration', 'String'>;
    readonly project_id: FieldRef<'collaboration', 'String'>;
    readonly role: FieldRef<'collaboration', 'String'>;
    readonly start_date: FieldRef<'collaboration', 'DateTime'>;
    readonly end_date: FieldRef<'collaboration', 'DateTime'>;
    readonly created_at: FieldRef<'collaboration', 'DateTime'>;
    readonly updated_at: FieldRef<'collaboration', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * collaboration findUnique
   */
  export type collaborationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collaboration
     */
    select?: collaborationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collaborationInclude<ExtArgs> | null;
    /**
     * Filter, which collaboration to fetch.
     */
    where: collaborationWhereUniqueInput;
  };

  /**
   * collaboration findUniqueOrThrow
   */
  export type collaborationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collaboration
     */
    select?: collaborationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collaborationInclude<ExtArgs> | null;
    /**
     * Filter, which collaboration to fetch.
     */
    where: collaborationWhereUniqueInput;
  };

  /**
   * collaboration findFirst
   */
  export type collaborationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collaboration
     */
    select?: collaborationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collaborationInclude<ExtArgs> | null;
    /**
     * Filter, which collaboration to fetch.
     */
    where?: collaborationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of collaborations to fetch.
     */
    orderBy?: collaborationOrderByWithRelationInput | collaborationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for collaborations.
     */
    cursor?: collaborationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` collaborations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` collaborations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of collaborations.
     */
    distinct?: CollaborationScalarFieldEnum | CollaborationScalarFieldEnum[];
  };

  /**
   * collaboration findFirstOrThrow
   */
  export type collaborationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collaboration
     */
    select?: collaborationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collaborationInclude<ExtArgs> | null;
    /**
     * Filter, which collaboration to fetch.
     */
    where?: collaborationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of collaborations to fetch.
     */
    orderBy?: collaborationOrderByWithRelationInput | collaborationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for collaborations.
     */
    cursor?: collaborationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` collaborations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` collaborations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of collaborations.
     */
    distinct?: CollaborationScalarFieldEnum | CollaborationScalarFieldEnum[];
  };

  /**
   * collaboration findMany
   */
  export type collaborationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collaboration
     */
    select?: collaborationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collaborationInclude<ExtArgs> | null;
    /**
     * Filter, which collaborations to fetch.
     */
    where?: collaborationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of collaborations to fetch.
     */
    orderBy?: collaborationOrderByWithRelationInput | collaborationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing collaborations.
     */
    cursor?: collaborationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` collaborations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` collaborations.
     */
    skip?: number;
    distinct?: CollaborationScalarFieldEnum | CollaborationScalarFieldEnum[];
  };

  /**
   * collaboration create
   */
  export type collaborationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collaboration
     */
    select?: collaborationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collaborationInclude<ExtArgs> | null;
    /**
     * The data needed to create a collaboration.
     */
    data: XOR<collaborationCreateInput, collaborationUncheckedCreateInput>;
  };

  /**
   * collaboration createMany
   */
  export type collaborationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many collaborations.
     */
    data: collaborationCreateManyInput | collaborationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * collaboration update
   */
  export type collaborationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collaboration
     */
    select?: collaborationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collaborationInclude<ExtArgs> | null;
    /**
     * The data needed to update a collaboration.
     */
    data: XOR<collaborationUpdateInput, collaborationUncheckedUpdateInput>;
    /**
     * Choose, which collaboration to update.
     */
    where: collaborationWhereUniqueInput;
  };

  /**
   * collaboration updateMany
   */
  export type collaborationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update collaborations.
     */
    data: XOR<collaborationUpdateManyMutationInput, collaborationUncheckedUpdateManyInput>;
    /**
     * Filter which collaborations to update
     */
    where?: collaborationWhereInput;
  };

  /**
   * collaboration upsert
   */
  export type collaborationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collaboration
     */
    select?: collaborationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collaborationInclude<ExtArgs> | null;
    /**
     * The filter to search for the collaboration to update in case it exists.
     */
    where: collaborationWhereUniqueInput;
    /**
     * In case the collaboration found by the `where` argument doesn't exist, create a new collaboration with this data.
     */
    create: XOR<collaborationCreateInput, collaborationUncheckedCreateInput>;
    /**
     * In case the collaboration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<collaborationUpdateInput, collaborationUncheckedUpdateInput>;
  };

  /**
   * collaboration delete
   */
  export type collaborationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collaboration
     */
    select?: collaborationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collaborationInclude<ExtArgs> | null;
    /**
     * Filter which collaboration to delete.
     */
    where: collaborationWhereUniqueInput;
  };

  /**
   * collaboration deleteMany
   */
  export type collaborationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which collaborations to delete
     */
    where?: collaborationWhereInput;
  };

  /**
   * collaboration without action
   */
  export type collaborationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collaboration
     */
    select?: collaborationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collaborationInclude<ExtArgs> | null;
  };

  /**
   * Model conference
   */

  export type AggregateConference = {
    _count: ConferenceCountAggregateOutputType | null;
    _min: ConferenceMinAggregateOutputType | null;
    _max: ConferenceMaxAggregateOutputType | null;
  };

  export type ConferenceMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ConferenceMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ConferenceCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ConferenceMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ConferenceMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ConferenceCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ConferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conference to aggregate.
     */
    where?: conferenceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of conferences to fetch.
     */
    orderBy?: conferenceOrderByWithRelationInput | conferenceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: conferenceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` conferences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` conferences.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned conferences
     **/
    _count?: true | ConferenceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ConferenceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ConferenceMaxAggregateInputType;
  };

  export type GetConferenceAggregateType<T extends ConferenceAggregateArgs> = {
    [P in keyof T & keyof AggregateConference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConference[P]>
      : GetScalarType<T[P], AggregateConference[P]>;
  };

  export type conferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conferenceWhereInput;
    orderBy?: conferenceOrderByWithAggregationInput | conferenceOrderByWithAggregationInput[];
    by: ConferenceScalarFieldEnum[] | ConferenceScalarFieldEnum;
    having?: conferenceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConferenceCountAggregateInputType | true;
    _min?: ConferenceMinAggregateInputType;
    _max?: ConferenceMaxAggregateInputType;
  };

  export type ConferenceGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: ConferenceCountAggregateOutputType | null;
    _min: ConferenceMinAggregateOutputType | null;
    _max: ConferenceMaxAggregateOutputType | null;
  };

  type GetConferenceGroupByPayload<T extends conferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConferenceGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ConferenceGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ConferenceGroupByOutputType[P]>
          : GetScalarType<T[P], ConferenceGroupByOutputType[P]>;
      }
    >
  >;

  export type conferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['conference']
    >;

  export type conferenceSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $conferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'conference';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['conference']
    >;
    composites: {};
  };

  type conferenceGetPayload<S extends boolean | null | undefined | conferenceDefaultArgs> = $Result.GetResult<
    Prisma.$conferencePayload,
    S
  >;

  type conferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    conferenceFindManyArgs,
    'select' | 'include'
  > & {
    select?: ConferenceCountAggregateInputType | true;
  };

  export interface conferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['conference']; meta: { name: 'conference' } };
    /**
     * Find zero or one Conference that matches the filter.
     * @param {conferenceFindUniqueArgs} args - Arguments to find a Conference
     * @example
     * // Get one Conference
     * const conference = await prisma.conference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends conferenceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, conferenceFindUniqueArgs<ExtArgs>>,
    ): Prisma__conferenceClient<
      $Result.GetResult<Prisma.$conferencePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Conference that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {conferenceFindUniqueOrThrowArgs} args - Arguments to find a Conference
     * @example
     * // Get one Conference
     * const conference = await prisma.conference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends conferenceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, conferenceFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__conferenceClient<
      $Result.GetResult<Prisma.$conferencePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Conference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conferenceFindFirstArgs} args - Arguments to find a Conference
     * @example
     * // Get one Conference
     * const conference = await prisma.conference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends conferenceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, conferenceFindFirstArgs<ExtArgs>>,
    ): Prisma__conferenceClient<
      $Result.GetResult<Prisma.$conferencePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Conference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conferenceFindFirstOrThrowArgs} args - Arguments to find a Conference
     * @example
     * // Get one Conference
     * const conference = await prisma.conference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends conferenceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, conferenceFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__conferenceClient<
      $Result.GetResult<Prisma.$conferencePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Conferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conferenceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conferences
     * const conferences = await prisma.conference.findMany()
     *
     * // Get first 10 Conferences
     * const conferences = await prisma.conference.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const conferenceWithIdOnly = await prisma.conference.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends conferenceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, conferenceFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conferencePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Conference.
     * @param {conferenceCreateArgs} args - Arguments to create a Conference.
     * @example
     * // Create one Conference
     * const Conference = await prisma.conference.create({
     *   data: {
     *     // ... data to create a Conference
     *   }
     * })
     *
     **/
    create<T extends conferenceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, conferenceCreateArgs<ExtArgs>>,
    ): Prisma__conferenceClient<$Result.GetResult<Prisma.$conferencePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Conferences.
     *     @param {conferenceCreateManyArgs} args - Arguments to create many Conferences.
     *     @example
     *     // Create many Conferences
     *     const conference = await prisma.conference.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends conferenceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, conferenceCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Conference.
     * @param {conferenceDeleteArgs} args - Arguments to delete one Conference.
     * @example
     * // Delete one Conference
     * const Conference = await prisma.conference.delete({
     *   where: {
     *     // ... filter to delete one Conference
     *   }
     * })
     *
     **/
    delete<T extends conferenceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, conferenceDeleteArgs<ExtArgs>>,
    ): Prisma__conferenceClient<$Result.GetResult<Prisma.$conferencePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Conference.
     * @param {conferenceUpdateArgs} args - Arguments to update one Conference.
     * @example
     * // Update one Conference
     * const conference = await prisma.conference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends conferenceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, conferenceUpdateArgs<ExtArgs>>,
    ): Prisma__conferenceClient<$Result.GetResult<Prisma.$conferencePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Conferences.
     * @param {conferenceDeleteManyArgs} args - Arguments to filter Conferences to delete.
     * @example
     * // Delete a few Conferences
     * const { count } = await prisma.conference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends conferenceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, conferenceDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Conferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conferences
     * const conference = await prisma.conference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends conferenceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, conferenceUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Conference.
     * @param {conferenceUpsertArgs} args - Arguments to update or create a Conference.
     * @example
     * // Update or create a Conference
     * const conference = await prisma.conference.upsert({
     *   create: {
     *     // ... data to create a Conference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conference we want to update
     *   }
     * })
     **/
    upsert<T extends conferenceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, conferenceUpsertArgs<ExtArgs>>,
    ): Prisma__conferenceClient<$Result.GetResult<Prisma.$conferencePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Conferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conferenceCountArgs} args - Arguments to filter Conferences to count.
     * @example
     * // Count the number of Conferences
     * const count = await prisma.conference.count({
     *   where: {
     *     // ... the filter for the Conferences we want to count
     *   }
     * })
     **/
    count<T extends conferenceCountArgs>(
      args?: Subset<T, conferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConferenceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Conference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConferenceAggregateArgs>(
      args: Subset<T, ConferenceAggregateArgs>,
    ): Prisma.PrismaPromise<GetConferenceAggregateType<T>>;

    /**
     * Group by Conference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conferenceGroupByArgs} args - Group by arguments.
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
      T extends conferenceGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: conferenceGroupByArgs['orderBy'] }
        : { orderBy?: conferenceGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, conferenceGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetConferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the conference model
     */
    readonly fields: conferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for conference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__conferenceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the conference model
   */
  interface conferenceFieldRefs {
    readonly id: FieldRef<'conference', 'String'>;
    readonly created_at: FieldRef<'conference', 'DateTime'>;
    readonly updated_at: FieldRef<'conference', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * conference findUnique
   */
  export type conferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conference
     */
    select?: conferenceSelect<ExtArgs> | null;
    /**
     * Filter, which conference to fetch.
     */
    where: conferenceWhereUniqueInput;
  };

  /**
   * conference findUniqueOrThrow
   */
  export type conferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conference
     */
    select?: conferenceSelect<ExtArgs> | null;
    /**
     * Filter, which conference to fetch.
     */
    where: conferenceWhereUniqueInput;
  };

  /**
   * conference findFirst
   */
  export type conferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conference
     */
    select?: conferenceSelect<ExtArgs> | null;
    /**
     * Filter, which conference to fetch.
     */
    where?: conferenceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of conferences to fetch.
     */
    orderBy?: conferenceOrderByWithRelationInput | conferenceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for conferences.
     */
    cursor?: conferenceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` conferences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` conferences.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of conferences.
     */
    distinct?: ConferenceScalarFieldEnum | ConferenceScalarFieldEnum[];
  };

  /**
   * conference findFirstOrThrow
   */
  export type conferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conference
     */
    select?: conferenceSelect<ExtArgs> | null;
    /**
     * Filter, which conference to fetch.
     */
    where?: conferenceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of conferences to fetch.
     */
    orderBy?: conferenceOrderByWithRelationInput | conferenceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for conferences.
     */
    cursor?: conferenceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` conferences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` conferences.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of conferences.
     */
    distinct?: ConferenceScalarFieldEnum | ConferenceScalarFieldEnum[];
  };

  /**
   * conference findMany
   */
  export type conferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conference
     */
    select?: conferenceSelect<ExtArgs> | null;
    /**
     * Filter, which conferences to fetch.
     */
    where?: conferenceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of conferences to fetch.
     */
    orderBy?: conferenceOrderByWithRelationInput | conferenceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing conferences.
     */
    cursor?: conferenceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` conferences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` conferences.
     */
    skip?: number;
    distinct?: ConferenceScalarFieldEnum | ConferenceScalarFieldEnum[];
  };

  /**
   * conference create
   */
  export type conferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conference
     */
    select?: conferenceSelect<ExtArgs> | null;
    /**
     * The data needed to create a conference.
     */
    data?: XOR<conferenceCreateInput, conferenceUncheckedCreateInput>;
  };

  /**
   * conference createMany
   */
  export type conferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many conferences.
     */
    data: conferenceCreateManyInput | conferenceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * conference update
   */
  export type conferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conference
     */
    select?: conferenceSelect<ExtArgs> | null;
    /**
     * The data needed to update a conference.
     */
    data: XOR<conferenceUpdateInput, conferenceUncheckedUpdateInput>;
    /**
     * Choose, which conference to update.
     */
    where: conferenceWhereUniqueInput;
  };

  /**
   * conference updateMany
   */
  export type conferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update conferences.
     */
    data: XOR<conferenceUpdateManyMutationInput, conferenceUncheckedUpdateManyInput>;
    /**
     * Filter which conferences to update
     */
    where?: conferenceWhereInput;
  };

  /**
   * conference upsert
   */
  export type conferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conference
     */
    select?: conferenceSelect<ExtArgs> | null;
    /**
     * The filter to search for the conference to update in case it exists.
     */
    where: conferenceWhereUniqueInput;
    /**
     * In case the conference found by the `where` argument doesn't exist, create a new conference with this data.
     */
    create: XOR<conferenceCreateInput, conferenceUncheckedCreateInput>;
    /**
     * In case the conference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<conferenceUpdateInput, conferenceUncheckedUpdateInput>;
  };

  /**
   * conference delete
   */
  export type conferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conference
     */
    select?: conferenceSelect<ExtArgs> | null;
    /**
     * Filter which conference to delete.
     */
    where: conferenceWhereUniqueInput;
  };

  /**
   * conference deleteMany
   */
  export type conferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conferences to delete
     */
    where?: conferenceWhereInput;
  };

  /**
   * conference without action
   */
  export type conferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conference
     */
    select?: conferenceSelect<ExtArgs> | null;
  };

  /**
   * Model organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  export type OrganizationMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type OrganizationCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type OrganizationMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type OrganizationMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type OrganizationCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organization to aggregate.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned organizations
     **/
    _count?: true | OrganizationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizationMaxAggregateInputType;
  };

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>;
  };

  export type organizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithAggregationInput | organizationOrderByWithAggregationInput[];
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum;
    having?: organizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
  };

  export type OrganizationGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  type GetOrganizationGroupByPayload<T extends organizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OrganizationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
          : GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
      }
    >
  >;

  export type organizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user_id?: boolean;
        tenant_id?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
        project?: boolean | organization$projectArgs<ExtArgs>;
        research?: boolean | organization$researchArgs<ExtArgs>;
        _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['organization']
    >;

  export type organizationSelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type organizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    project?: boolean | organization$projectArgs<ExtArgs>;
    research?: boolean | organization$researchArgs<ExtArgs>;
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $organizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'organization';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      project: Prisma.$projectPayload<ExtArgs>[];
      research: Prisma.$researchPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['organization']
    >;
    composites: {};
  };

  type organizationGetPayload<S extends boolean | null | undefined | organizationDefaultArgs> = $Result.GetResult<
    Prisma.$organizationPayload,
    S
  >;

  type organizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    organizationFindManyArgs,
    'select' | 'include'
  > & {
    select?: OrganizationCountAggregateInputType | true;
  };

  export interface organizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organization']; meta: { name: 'organization' } };
    /**
     * Find zero or one Organization that matches the filter.
     * @param {organizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends organizationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, organizationFindUniqueArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Organization that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {organizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends organizationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends organizationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends organizationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     *
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends organizationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Organization.
     * @param {organizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     *
     **/
    create<T extends organizationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationCreateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Organizations.
     *     @param {organizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends organizationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Organization.
     * @param {organizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     *
     **/
    delete<T extends organizationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, organizationDeleteArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Organization.
     * @param {organizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends organizationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Organizations.
     * @param {organizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends organizationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends organizationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Organization.
     * @param {organizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     **/
    upsert<T extends organizationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpsertArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
     **/
    count<T extends organizationCountArgs>(
      args?: Subset<T, organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(
      args: Subset<T, OrganizationAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationGroupByArgs} args - Group by arguments.
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
      T extends organizationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationGroupByArgs['orderBy'] }
        : { orderBy?: organizationGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, organizationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the organization model
     */
    readonly fields: organizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    project<T extends organization$projectArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$projectArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findMany'> | Null>;

    research<T extends organization$researchArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$researchArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$researchPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the organization model
   */
  interface organizationFieldRefs {
    readonly id: FieldRef<'organization', 'String'>;
    readonly description: FieldRef<'organization', 'String'>;
    readonly name: FieldRef<'organization', 'String'>;
    readonly created_at: FieldRef<'organization', 'DateTime'>;
    readonly updated_at: FieldRef<'organization', 'DateTime'>;
    readonly user_id: FieldRef<'organization', 'String'>;
    readonly tenant_id: FieldRef<'organization', 'String'>;
  }

  // Custom InputTypes

  /**
   * organization findUnique
   */
  export type organizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findUniqueOrThrow
   */
  export type organizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findFirst
   */
  export type organizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findFirstOrThrow
   */
  export type organizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findMany
   */
  export type organizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization create
   */
  export type organizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to create a organization.
     */
    data: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
  };

  /**
   * organization createMany
   */
  export type organizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * organization update
   */
  export type organizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to update a organization.
     */
    data: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
    /**
     * Choose, which organization to update.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization updateMany
   */
  export type organizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>;
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput;
  };

  /**
   * organization upsert
   */
  export type organizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The filter to search for the organization to update in case it exists.
     */
    where: organizationWhereUniqueInput;
    /**
     * In case the organization found by the `where` argument doesn't exist, create a new organization with this data.
     */
    create: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
    /**
     * In case the organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
  };

  /**
   * organization delete
   */
  export type organizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter which organization to delete.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization deleteMany
   */
  export type organizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationWhereInput;
  };

  /**
   * organization.project
   */
  export type organization$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    where?: projectWhereInput;
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    cursor?: projectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * organization.research
   */
  export type organization$researchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research
     */
    select?: researchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: researchInclude<ExtArgs> | null;
    where?: researchWhereInput;
    orderBy?: researchOrderByWithRelationInput | researchOrderByWithRelationInput[];
    cursor?: researchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ResearchScalarFieldEnum | ResearchScalarFieldEnum[];
  };

  /**
   * organization without action
   */
  export type organizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
  };

  /**
   * Model patent
   */

  export type AggregatePatent = {
    _count: PatentCountAggregateOutputType | null;
    _min: PatentMinAggregateOutputType | null;
    _max: PatentMaxAggregateOutputType | null;
  };

  export type PatentMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PatentMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PatentCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type PatentMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PatentMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PatentCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type PatentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patent to aggregate.
     */
    where?: patentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of patents to fetch.
     */
    orderBy?: patentOrderByWithRelationInput | patentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: patentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` patents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` patents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned patents
     **/
    _count?: true | PatentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PatentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PatentMaxAggregateInputType;
  };

  export type GetPatentAggregateType<T extends PatentAggregateArgs> = {
    [P in keyof T & keyof AggregatePatent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatent[P]>
      : GetScalarType<T[P], AggregatePatent[P]>;
  };

  export type patentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: patentWhereInput;
    orderBy?: patentOrderByWithAggregationInput | patentOrderByWithAggregationInput[];
    by: PatentScalarFieldEnum[] | PatentScalarFieldEnum;
    having?: patentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PatentCountAggregateInputType | true;
    _min?: PatentMinAggregateInputType;
    _max?: PatentMaxAggregateInputType;
  };

  export type PatentGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: PatentCountAggregateOutputType | null;
    _min: PatentMinAggregateOutputType | null;
    _max: PatentMaxAggregateOutputType | null;
  };

  type GetPatentGroupByPayload<T extends patentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PatentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PatentGroupByOutputType[P]>
          : GetScalarType<T[P], PatentGroupByOutputType[P]>;
      }
    >
  >;

  export type patentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['patent']
  >;

  export type patentSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $patentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'patent';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['patent']
    >;
    composites: {};
  };

  type patentGetPayload<S extends boolean | null | undefined | patentDefaultArgs> = $Result.GetResult<
    Prisma.$patentPayload,
    S
  >;

  type patentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    patentFindManyArgs,
    'select' | 'include'
  > & {
    select?: PatentCountAggregateInputType | true;
  };

  export interface patentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['patent']; meta: { name: 'patent' } };
    /**
     * Find zero or one Patent that matches the filter.
     * @param {patentFindUniqueArgs} args - Arguments to find a Patent
     * @example
     * // Get one Patent
     * const patent = await prisma.patent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends patentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, patentFindUniqueArgs<ExtArgs>>,
    ): Prisma__patentClient<$Result.GetResult<Prisma.$patentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Patent that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {patentFindUniqueOrThrowArgs} args - Arguments to find a Patent
     * @example
     * // Get one Patent
     * const patent = await prisma.patent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends patentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, patentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__patentClient<$Result.GetResult<Prisma.$patentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Patent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patentFindFirstArgs} args - Arguments to find a Patent
     * @example
     * // Get one Patent
     * const patent = await prisma.patent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends patentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, patentFindFirstArgs<ExtArgs>>,
    ): Prisma__patentClient<$Result.GetResult<Prisma.$patentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Patent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patentFindFirstOrThrowArgs} args - Arguments to find a Patent
     * @example
     * // Get one Patent
     * const patent = await prisma.patent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends patentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, patentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__patentClient<$Result.GetResult<Prisma.$patentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Patents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patents
     * const patents = await prisma.patent.findMany()
     *
     * // Get first 10 Patents
     * const patents = await prisma.patent.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const patentWithIdOnly = await prisma.patent.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends patentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, patentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Patent.
     * @param {patentCreateArgs} args - Arguments to create a Patent.
     * @example
     * // Create one Patent
     * const Patent = await prisma.patent.create({
     *   data: {
     *     // ... data to create a Patent
     *   }
     * })
     *
     **/
    create<T extends patentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, patentCreateArgs<ExtArgs>>,
    ): Prisma__patentClient<$Result.GetResult<Prisma.$patentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Patents.
     *     @param {patentCreateManyArgs} args - Arguments to create many Patents.
     *     @example
     *     // Create many Patents
     *     const patent = await prisma.patent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends patentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, patentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Patent.
     * @param {patentDeleteArgs} args - Arguments to delete one Patent.
     * @example
     * // Delete one Patent
     * const Patent = await prisma.patent.delete({
     *   where: {
     *     // ... filter to delete one Patent
     *   }
     * })
     *
     **/
    delete<T extends patentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, patentDeleteArgs<ExtArgs>>,
    ): Prisma__patentClient<$Result.GetResult<Prisma.$patentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Patent.
     * @param {patentUpdateArgs} args - Arguments to update one Patent.
     * @example
     * // Update one Patent
     * const patent = await prisma.patent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends patentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, patentUpdateArgs<ExtArgs>>,
    ): Prisma__patentClient<$Result.GetResult<Prisma.$patentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Patents.
     * @param {patentDeleteManyArgs} args - Arguments to filter Patents to delete.
     * @example
     * // Delete a few Patents
     * const { count } = await prisma.patent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends patentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, patentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Patents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patents
     * const patent = await prisma.patent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends patentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, patentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Patent.
     * @param {patentUpsertArgs} args - Arguments to update or create a Patent.
     * @example
     * // Update or create a Patent
     * const patent = await prisma.patent.upsert({
     *   create: {
     *     // ... data to create a Patent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patent we want to update
     *   }
     * })
     **/
    upsert<T extends patentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, patentUpsertArgs<ExtArgs>>,
    ): Prisma__patentClient<$Result.GetResult<Prisma.$patentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Patents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patentCountArgs} args - Arguments to filter Patents to count.
     * @example
     * // Count the number of Patents
     * const count = await prisma.patent.count({
     *   where: {
     *     // ... the filter for the Patents we want to count
     *   }
     * })
     **/
    count<T extends patentCountArgs>(
      args?: Subset<T, patentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Patent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatentAggregateArgs>(
      args: Subset<T, PatentAggregateArgs>,
    ): Prisma.PrismaPromise<GetPatentAggregateType<T>>;

    /**
     * Group by Patent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patentGroupByArgs} args - Group by arguments.
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
      T extends patentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: patentGroupByArgs['orderBy'] }
        : { orderBy?: patentGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, patentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPatentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the patent model
     */
    readonly fields: patentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for patent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__patentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the patent model
   */
  interface patentFieldRefs {
    readonly id: FieldRef<'patent', 'String'>;
    readonly created_at: FieldRef<'patent', 'DateTime'>;
    readonly updated_at: FieldRef<'patent', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * patent findUnique
   */
  export type patentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patent
     */
    select?: patentSelect<ExtArgs> | null;
    /**
     * Filter, which patent to fetch.
     */
    where: patentWhereUniqueInput;
  };

  /**
   * patent findUniqueOrThrow
   */
  export type patentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patent
     */
    select?: patentSelect<ExtArgs> | null;
    /**
     * Filter, which patent to fetch.
     */
    where: patentWhereUniqueInput;
  };

  /**
   * patent findFirst
   */
  export type patentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patent
     */
    select?: patentSelect<ExtArgs> | null;
    /**
     * Filter, which patent to fetch.
     */
    where?: patentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of patents to fetch.
     */
    orderBy?: patentOrderByWithRelationInput | patentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for patents.
     */
    cursor?: patentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` patents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` patents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of patents.
     */
    distinct?: PatentScalarFieldEnum | PatentScalarFieldEnum[];
  };

  /**
   * patent findFirstOrThrow
   */
  export type patentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patent
     */
    select?: patentSelect<ExtArgs> | null;
    /**
     * Filter, which patent to fetch.
     */
    where?: patentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of patents to fetch.
     */
    orderBy?: patentOrderByWithRelationInput | patentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for patents.
     */
    cursor?: patentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` patents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` patents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of patents.
     */
    distinct?: PatentScalarFieldEnum | PatentScalarFieldEnum[];
  };

  /**
   * patent findMany
   */
  export type patentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patent
     */
    select?: patentSelect<ExtArgs> | null;
    /**
     * Filter, which patents to fetch.
     */
    where?: patentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of patents to fetch.
     */
    orderBy?: patentOrderByWithRelationInput | patentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing patents.
     */
    cursor?: patentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` patents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` patents.
     */
    skip?: number;
    distinct?: PatentScalarFieldEnum | PatentScalarFieldEnum[];
  };

  /**
   * patent create
   */
  export type patentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patent
     */
    select?: patentSelect<ExtArgs> | null;
    /**
     * The data needed to create a patent.
     */
    data?: XOR<patentCreateInput, patentUncheckedCreateInput>;
  };

  /**
   * patent createMany
   */
  export type patentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many patents.
     */
    data: patentCreateManyInput | patentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * patent update
   */
  export type patentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patent
     */
    select?: patentSelect<ExtArgs> | null;
    /**
     * The data needed to update a patent.
     */
    data: XOR<patentUpdateInput, patentUncheckedUpdateInput>;
    /**
     * Choose, which patent to update.
     */
    where: patentWhereUniqueInput;
  };

  /**
   * patent updateMany
   */
  export type patentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update patents.
     */
    data: XOR<patentUpdateManyMutationInput, patentUncheckedUpdateManyInput>;
    /**
     * Filter which patents to update
     */
    where?: patentWhereInput;
  };

  /**
   * patent upsert
   */
  export type patentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patent
     */
    select?: patentSelect<ExtArgs> | null;
    /**
     * The filter to search for the patent to update in case it exists.
     */
    where: patentWhereUniqueInput;
    /**
     * In case the patent found by the `where` argument doesn't exist, create a new patent with this data.
     */
    create: XOR<patentCreateInput, patentUncheckedCreateInput>;
    /**
     * In case the patent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<patentUpdateInput, patentUncheckedUpdateInput>;
  };

  /**
   * patent delete
   */
  export type patentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patent
     */
    select?: patentSelect<ExtArgs> | null;
    /**
     * Filter which patent to delete.
     */
    where: patentWhereUniqueInput;
  };

  /**
   * patent deleteMany
   */
  export type patentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patents to delete
     */
    where?: patentWhereInput;
  };

  /**
   * patent without action
   */
  export type patentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patent
     */
    select?: patentSelect<ExtArgs> | null;
  };

  /**
   * Model project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null;
    _min: ProjectMinAggregateOutputType | null;
    _max: ProjectMaxAggregateOutputType | null;
  };

  export type ProjectMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    start_date: Date | null;
    end_date: Date | null;
    user_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProjectMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    start_date: Date | null;
    end_date: Date | null;
    user_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ProjectCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    start_date: number;
    end_date: number;
    user_id: number;
    organization_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ProjectMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProjectMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ProjectCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project to aggregate.
     */
    where?: projectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: projectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned projects
     **/
    _count?: true | ProjectCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProjectMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProjectMaxAggregateInputType;
  };

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
    [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>;
  };

  export type projectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput;
    orderBy?: projectOrderByWithAggregationInput | projectOrderByWithAggregationInput[];
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum;
    having?: projectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProjectCountAggregateInputType | true;
    _min?: ProjectMinAggregateInputType;
    _max?: ProjectMaxAggregateInputType;
  };

  export type ProjectGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    start_date: Date | null;
    end_date: Date | null;
    user_id: string;
    organization_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ProjectCountAggregateOutputType | null;
    _min: ProjectMinAggregateOutputType | null;
    _max: ProjectMaxAggregateOutputType | null;
  };

  type GetProjectGroupByPayload<T extends projectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ProjectGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
          : GetScalarType<T[P], ProjectGroupByOutputType[P]>;
      }
    >
  >;

  export type projectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      start_date?: boolean;
      end_date?: boolean;
      user_id?: boolean;
      organization_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      collaboration?: boolean | project$collaborationArgs<ExtArgs>;
      organization?: boolean | organizationDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['project']
  >;

  export type projectSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    user_id?: boolean;
    organization_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type projectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collaboration?: boolean | project$collaborationArgs<ExtArgs>;
    organization?: boolean | organizationDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $projectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'project';
    objects: {
      collaboration: Prisma.$collaborationPayload<ExtArgs>[];
      organization: Prisma.$organizationPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        start_date: Date | null;
        end_date: Date | null;
        user_id: string;
        organization_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['project']
    >;
    composites: {};
  };

  type projectGetPayload<S extends boolean | null | undefined | projectDefaultArgs> = $Result.GetResult<
    Prisma.$projectPayload,
    S
  >;

  type projectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    projectFindManyArgs,
    'select' | 'include'
  > & {
    select?: ProjectCountAggregateInputType | true;
  };

  export interface projectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project']; meta: { name: 'project' } };
    /**
     * Find zero or one Project that matches the filter.
     * @param {projectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends projectFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, projectFindUniqueArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Project that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {projectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends projectFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, projectFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__projectClient<
      $Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends projectFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, projectFindFirstArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends projectFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, projectFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     *
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends projectFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, projectFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Project.
     * @param {projectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     *
     **/
    create<T extends projectCreateArgs<ExtArgs>>(
      args: SelectSubset<T, projectCreateArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Projects.
     *     @param {projectCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const project = await prisma.project.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends projectCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, projectCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Project.
     * @param {projectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     *
     **/
    delete<T extends projectDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, projectDeleteArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Project.
     * @param {projectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends projectUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, projectUpdateArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Projects.
     * @param {projectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends projectDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, projectDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends projectUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, projectUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Project.
     * @param {projectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     **/
    upsert<T extends projectUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, projectUpsertArgs<ExtArgs>>,
    ): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
     **/
    count<T extends projectCountArgs>(
      args?: Subset<T, projectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(
      args: Subset<T, ProjectAggregateArgs>,
    ): Prisma.PrismaPromise<GetProjectAggregateType<T>>;

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectGroupByArgs} args - Group by arguments.
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
      T extends projectGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectGroupByArgs['orderBy'] }
        : { orderBy?: projectGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, projectGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the project model
     */
    readonly fields: projectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    collaboration<T extends project$collaborationArgs<ExtArgs> = {}>(
      args?: Subset<T, project$collaborationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$collaborationPayload<ExtArgs>, T, 'findMany'> | Null>;

    organization<T extends organizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, organizationDefaultArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the project model
   */
  interface projectFieldRefs {
    readonly id: FieldRef<'project', 'String'>;
    readonly name: FieldRef<'project', 'String'>;
    readonly description: FieldRef<'project', 'String'>;
    readonly start_date: FieldRef<'project', 'DateTime'>;
    readonly end_date: FieldRef<'project', 'DateTime'>;
    readonly user_id: FieldRef<'project', 'String'>;
    readonly organization_id: FieldRef<'project', 'String'>;
    readonly created_at: FieldRef<'project', 'DateTime'>;
    readonly updated_at: FieldRef<'project', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * project findUnique
   */
  export type projectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput;
  };

  /**
   * project findUniqueOrThrow
   */
  export type projectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput;
  };

  /**
   * project findFirst
   */
  export type projectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * project findFirstOrThrow
   */
  export type projectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` projects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * project findMany
   */
  export type projectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter, which projects to fetch.
     */
    where?: projectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing projects.
     */
    cursor?: projectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` projects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` projects.
     */
    skip?: number;
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * project create
   */
  export type projectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * The data needed to create a project.
     */
    data: XOR<projectCreateInput, projectUncheckedCreateInput>;
  };

  /**
   * project createMany
   */
  export type projectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * project update
   */
  export type projectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * The data needed to update a project.
     */
    data: XOR<projectUpdateInput, projectUncheckedUpdateInput>;
    /**
     * Choose, which project to update.
     */
    where: projectWhereUniqueInput;
  };

  /**
   * project updateMany
   */
  export type projectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>;
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput;
  };

  /**
   * project upsert
   */
  export type projectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * The filter to search for the project to update in case it exists.
     */
    where: projectWhereUniqueInput;
    /**
     * In case the project found by the `where` argument doesn't exist, create a new project with this data.
     */
    create: XOR<projectCreateInput, projectUncheckedCreateInput>;
    /**
     * In case the project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectUpdateInput, projectUncheckedUpdateInput>;
  };

  /**
   * project delete
   */
  export type projectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    /**
     * Filter which project to delete.
     */
    where: projectWhereUniqueInput;
  };

  /**
   * project deleteMany
   */
  export type projectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectWhereInput;
  };

  /**
   * project.collaboration
   */
  export type project$collaborationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collaboration
     */
    select?: collaborationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collaborationInclude<ExtArgs> | null;
    where?: collaborationWhereInput;
    orderBy?: collaborationOrderByWithRelationInput | collaborationOrderByWithRelationInput[];
    cursor?: collaborationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CollaborationScalarFieldEnum | CollaborationScalarFieldEnum[];
  };

  /**
   * project without action
   */
  export type projectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
  };

  /**
   * Model publication
   */

  export type AggregatePublication = {
    _count: PublicationCountAggregateOutputType | null;
    _min: PublicationMinAggregateOutputType | null;
    _max: PublicationMaxAggregateOutputType | null;
  };

  export type PublicationMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    publication_date: Date | null;
    publisher: string | null;
    user_id: string | null;
    research_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PublicationMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    publication_date: Date | null;
    publisher: string | null;
    user_id: string | null;
    research_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PublicationCountAggregateOutputType = {
    id: number;
    title: number;
    publication_date: number;
    publisher: number;
    user_id: number;
    research_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type PublicationMinAggregateInputType = {
    id?: true;
    title?: true;
    publication_date?: true;
    publisher?: true;
    user_id?: true;
    research_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PublicationMaxAggregateInputType = {
    id?: true;
    title?: true;
    publication_date?: true;
    publisher?: true;
    user_id?: true;
    research_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PublicationCountAggregateInputType = {
    id?: true;
    title?: true;
    publication_date?: true;
    publisher?: true;
    user_id?: true;
    research_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type PublicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which publication to aggregate.
     */
    where?: publicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of publications to fetch.
     */
    orderBy?: publicationOrderByWithRelationInput | publicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: publicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` publications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` publications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned publications
     **/
    _count?: true | PublicationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PublicationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PublicationMaxAggregateInputType;
  };

  export type GetPublicationAggregateType<T extends PublicationAggregateArgs> = {
    [P in keyof T & keyof AggregatePublication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublication[P]>
      : GetScalarType<T[P], AggregatePublication[P]>;
  };

  export type publicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: publicationWhereInput;
    orderBy?: publicationOrderByWithAggregationInput | publicationOrderByWithAggregationInput[];
    by: PublicationScalarFieldEnum[] | PublicationScalarFieldEnum;
    having?: publicationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PublicationCountAggregateInputType | true;
    _min?: PublicationMinAggregateInputType;
    _max?: PublicationMaxAggregateInputType;
  };

  export type PublicationGroupByOutputType = {
    id: string;
    title: string;
    publication_date: Date | null;
    publisher: string;
    user_id: string;
    research_id: string;
    created_at: Date;
    updated_at: Date;
    _count: PublicationCountAggregateOutputType | null;
    _min: PublicationMinAggregateOutputType | null;
    _max: PublicationMaxAggregateOutputType | null;
  };

  type GetPublicationGroupByPayload<T extends publicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PublicationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PublicationGroupByOutputType[P]>
          : GetScalarType<T[P], PublicationGroupByOutputType[P]>;
      }
    >
  >;

  export type publicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        title?: boolean;
        publication_date?: boolean;
        publisher?: boolean;
        user_id?: boolean;
        research_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        research?: boolean | researchDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['publication']
    >;

  export type publicationSelectScalar = {
    id?: boolean;
    title?: boolean;
    publication_date?: boolean;
    publisher?: boolean;
    user_id?: boolean;
    research_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type publicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    research?: boolean | researchDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $publicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'publication';
    objects: {
      research: Prisma.$researchPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        publication_date: Date | null;
        publisher: string;
        user_id: string;
        research_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['publication']
    >;
    composites: {};
  };

  type publicationGetPayload<S extends boolean | null | undefined | publicationDefaultArgs> = $Result.GetResult<
    Prisma.$publicationPayload,
    S
  >;

  type publicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    publicationFindManyArgs,
    'select' | 'include'
  > & {
    select?: PublicationCountAggregateInputType | true;
  };

  export interface publicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['publication']; meta: { name: 'publication' } };
    /**
     * Find zero or one Publication that matches the filter.
     * @param {publicationFindUniqueArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends publicationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, publicationFindUniqueArgs<ExtArgs>>,
    ): Prisma__publicationClient<
      $Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Publication that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {publicationFindUniqueOrThrowArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends publicationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, publicationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__publicationClient<
      $Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Publication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicationFindFirstArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends publicationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, publicationFindFirstArgs<ExtArgs>>,
    ): Prisma__publicationClient<
      $Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Publication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicationFindFirstOrThrowArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends publicationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, publicationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__publicationClient<
      $Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Publications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publications
     * const publications = await prisma.publication.findMany()
     *
     * // Get first 10 Publications
     * const publications = await prisma.publication.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const publicationWithIdOnly = await prisma.publication.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends publicationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, publicationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Publication.
     * @param {publicationCreateArgs} args - Arguments to create a Publication.
     * @example
     * // Create one Publication
     * const Publication = await prisma.publication.create({
     *   data: {
     *     // ... data to create a Publication
     *   }
     * })
     *
     **/
    create<T extends publicationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, publicationCreateArgs<ExtArgs>>,
    ): Prisma__publicationClient<$Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Publications.
     *     @param {publicationCreateManyArgs} args - Arguments to create many Publications.
     *     @example
     *     // Create many Publications
     *     const publication = await prisma.publication.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends publicationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, publicationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Publication.
     * @param {publicationDeleteArgs} args - Arguments to delete one Publication.
     * @example
     * // Delete one Publication
     * const Publication = await prisma.publication.delete({
     *   where: {
     *     // ... filter to delete one Publication
     *   }
     * })
     *
     **/
    delete<T extends publicationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, publicationDeleteArgs<ExtArgs>>,
    ): Prisma__publicationClient<$Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Publication.
     * @param {publicationUpdateArgs} args - Arguments to update one Publication.
     * @example
     * // Update one Publication
     * const publication = await prisma.publication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends publicationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, publicationUpdateArgs<ExtArgs>>,
    ): Prisma__publicationClient<$Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Publications.
     * @param {publicationDeleteManyArgs} args - Arguments to filter Publications to delete.
     * @example
     * // Delete a few Publications
     * const { count } = await prisma.publication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends publicationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, publicationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publications
     * const publication = await prisma.publication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends publicationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, publicationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Publication.
     * @param {publicationUpsertArgs} args - Arguments to update or create a Publication.
     * @example
     * // Update or create a Publication
     * const publication = await prisma.publication.upsert({
     *   create: {
     *     // ... data to create a Publication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publication we want to update
     *   }
     * })
     **/
    upsert<T extends publicationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, publicationUpsertArgs<ExtArgs>>,
    ): Prisma__publicationClient<$Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicationCountArgs} args - Arguments to filter Publications to count.
     * @example
     * // Count the number of Publications
     * const count = await prisma.publication.count({
     *   where: {
     *     // ... the filter for the Publications we want to count
     *   }
     * })
     **/
    count<T extends publicationCountArgs>(
      args?: Subset<T, publicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Publication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PublicationAggregateArgs>(
      args: Subset<T, PublicationAggregateArgs>,
    ): Prisma.PrismaPromise<GetPublicationAggregateType<T>>;

    /**
     * Group by Publication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publicationGroupByArgs} args - Group by arguments.
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
      T extends publicationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: publicationGroupByArgs['orderBy'] }
        : { orderBy?: publicationGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, publicationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPublicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the publication model
     */
    readonly fields: publicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for publication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__publicationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    research<T extends researchDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, researchDefaultArgs<ExtArgs>>,
    ): Prisma__researchClient<
      $Result.GetResult<Prisma.$researchPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the publication model
   */
  interface publicationFieldRefs {
    readonly id: FieldRef<'publication', 'String'>;
    readonly title: FieldRef<'publication', 'String'>;
    readonly publication_date: FieldRef<'publication', 'DateTime'>;
    readonly publisher: FieldRef<'publication', 'String'>;
    readonly user_id: FieldRef<'publication', 'String'>;
    readonly research_id: FieldRef<'publication', 'String'>;
    readonly created_at: FieldRef<'publication', 'DateTime'>;
    readonly updated_at: FieldRef<'publication', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * publication findUnique
   */
  export type publicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publicationInclude<ExtArgs> | null;
    /**
     * Filter, which publication to fetch.
     */
    where: publicationWhereUniqueInput;
  };

  /**
   * publication findUniqueOrThrow
   */
  export type publicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publicationInclude<ExtArgs> | null;
    /**
     * Filter, which publication to fetch.
     */
    where: publicationWhereUniqueInput;
  };

  /**
   * publication findFirst
   */
  export type publicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publicationInclude<ExtArgs> | null;
    /**
     * Filter, which publication to fetch.
     */
    where?: publicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of publications to fetch.
     */
    orderBy?: publicationOrderByWithRelationInput | publicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for publications.
     */
    cursor?: publicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` publications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` publications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of publications.
     */
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[];
  };

  /**
   * publication findFirstOrThrow
   */
  export type publicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publicationInclude<ExtArgs> | null;
    /**
     * Filter, which publication to fetch.
     */
    where?: publicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of publications to fetch.
     */
    orderBy?: publicationOrderByWithRelationInput | publicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for publications.
     */
    cursor?: publicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` publications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` publications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of publications.
     */
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[];
  };

  /**
   * publication findMany
   */
  export type publicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publicationInclude<ExtArgs> | null;
    /**
     * Filter, which publications to fetch.
     */
    where?: publicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of publications to fetch.
     */
    orderBy?: publicationOrderByWithRelationInput | publicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing publications.
     */
    cursor?: publicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` publications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` publications.
     */
    skip?: number;
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[];
  };

  /**
   * publication create
   */
  export type publicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publicationInclude<ExtArgs> | null;
    /**
     * The data needed to create a publication.
     */
    data: XOR<publicationCreateInput, publicationUncheckedCreateInput>;
  };

  /**
   * publication createMany
   */
  export type publicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many publications.
     */
    data: publicationCreateManyInput | publicationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * publication update
   */
  export type publicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publicationInclude<ExtArgs> | null;
    /**
     * The data needed to update a publication.
     */
    data: XOR<publicationUpdateInput, publicationUncheckedUpdateInput>;
    /**
     * Choose, which publication to update.
     */
    where: publicationWhereUniqueInput;
  };

  /**
   * publication updateMany
   */
  export type publicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update publications.
     */
    data: XOR<publicationUpdateManyMutationInput, publicationUncheckedUpdateManyInput>;
    /**
     * Filter which publications to update
     */
    where?: publicationWhereInput;
  };

  /**
   * publication upsert
   */
  export type publicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publicationInclude<ExtArgs> | null;
    /**
     * The filter to search for the publication to update in case it exists.
     */
    where: publicationWhereUniqueInput;
    /**
     * In case the publication found by the `where` argument doesn't exist, create a new publication with this data.
     */
    create: XOR<publicationCreateInput, publicationUncheckedCreateInput>;
    /**
     * In case the publication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<publicationUpdateInput, publicationUncheckedUpdateInput>;
  };

  /**
   * publication delete
   */
  export type publicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publicationInclude<ExtArgs> | null;
    /**
     * Filter which publication to delete.
     */
    where: publicationWhereUniqueInput;
  };

  /**
   * publication deleteMany
   */
  export type publicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which publications to delete
     */
    where?: publicationWhereInput;
  };

  /**
   * publication without action
   */
  export type publicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publicationInclude<ExtArgs> | null;
  };

  /**
   * Model research
   */

  export type AggregateResearch = {
    _count: ResearchCountAggregateOutputType | null;
    _min: ResearchMinAggregateOutputType | null;
    _max: ResearchMaxAggregateOutputType | null;
  };

  export type ResearchMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    abstract: string | null;
    publication_date: Date | null;
    user_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ResearchMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    abstract: string | null;
    publication_date: Date | null;
    user_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ResearchCountAggregateOutputType = {
    id: number;
    title: number;
    abstract: number;
    publication_date: number;
    user_id: number;
    organization_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ResearchMinAggregateInputType = {
    id?: true;
    title?: true;
    abstract?: true;
    publication_date?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ResearchMaxAggregateInputType = {
    id?: true;
    title?: true;
    abstract?: true;
    publication_date?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ResearchCountAggregateInputType = {
    id?: true;
    title?: true;
    abstract?: true;
    publication_date?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ResearchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which research to aggregate.
     */
    where?: researchWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of research to fetch.
     */
    orderBy?: researchOrderByWithRelationInput | researchOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: researchWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` research from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` research.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned research
     **/
    _count?: true | ResearchCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ResearchMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ResearchMaxAggregateInputType;
  };

  export type GetResearchAggregateType<T extends ResearchAggregateArgs> = {
    [P in keyof T & keyof AggregateResearch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResearch[P]>
      : GetScalarType<T[P], AggregateResearch[P]>;
  };

  export type researchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: researchWhereInput;
    orderBy?: researchOrderByWithAggregationInput | researchOrderByWithAggregationInput[];
    by: ResearchScalarFieldEnum[] | ResearchScalarFieldEnum;
    having?: researchScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ResearchCountAggregateInputType | true;
    _min?: ResearchMinAggregateInputType;
    _max?: ResearchMaxAggregateInputType;
  };

  export type ResearchGroupByOutputType = {
    id: string;
    title: string;
    abstract: string;
    publication_date: Date | null;
    user_id: string;
    organization_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ResearchCountAggregateOutputType | null;
    _min: ResearchMinAggregateOutputType | null;
    _max: ResearchMaxAggregateOutputType | null;
  };

  type GetResearchGroupByPayload<T extends researchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResearchGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ResearchGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ResearchGroupByOutputType[P]>
          : GetScalarType<T[P], ResearchGroupByOutputType[P]>;
      }
    >
  >;

  export type researchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        title?: boolean;
        abstract?: boolean;
        publication_date?: boolean;
        user_id?: boolean;
        organization_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        publication?: boolean | research$publicationArgs<ExtArgs>;
        organization?: boolean | organizationDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        _count?: boolean | ResearchCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['research']
    >;

  export type researchSelectScalar = {
    id?: boolean;
    title?: boolean;
    abstract?: boolean;
    publication_date?: boolean;
    user_id?: boolean;
    organization_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type researchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publication?: boolean | research$publicationArgs<ExtArgs>;
    organization?: boolean | organizationDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | ResearchCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $researchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'research';
    objects: {
      publication: Prisma.$publicationPayload<ExtArgs>[];
      organization: Prisma.$organizationPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        abstract: string;
        publication_date: Date | null;
        user_id: string;
        organization_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['research']
    >;
    composites: {};
  };

  type researchGetPayload<S extends boolean | null | undefined | researchDefaultArgs> = $Result.GetResult<
    Prisma.$researchPayload,
    S
  >;

  type researchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    researchFindManyArgs,
    'select' | 'include'
  > & {
    select?: ResearchCountAggregateInputType | true;
  };

  export interface researchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['research']; meta: { name: 'research' } };
    /**
     * Find zero or one Research that matches the filter.
     * @param {researchFindUniqueArgs} args - Arguments to find a Research
     * @example
     * // Get one Research
     * const research = await prisma.research.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends researchFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, researchFindUniqueArgs<ExtArgs>>,
    ): Prisma__researchClient<
      $Result.GetResult<Prisma.$researchPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Research that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {researchFindUniqueOrThrowArgs} args - Arguments to find a Research
     * @example
     * // Get one Research
     * const research = await prisma.research.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends researchFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, researchFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__researchClient<
      $Result.GetResult<Prisma.$researchPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Research that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {researchFindFirstArgs} args - Arguments to find a Research
     * @example
     * // Get one Research
     * const research = await prisma.research.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends researchFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, researchFindFirstArgs<ExtArgs>>,
    ): Prisma__researchClient<
      $Result.GetResult<Prisma.$researchPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Research that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {researchFindFirstOrThrowArgs} args - Arguments to find a Research
     * @example
     * // Get one Research
     * const research = await prisma.research.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends researchFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, researchFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__researchClient<
      $Result.GetResult<Prisma.$researchPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Research that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {researchFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Research
     * const research = await prisma.research.findMany()
     *
     * // Get first 10 Research
     * const research = await prisma.research.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const researchWithIdOnly = await prisma.research.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends researchFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, researchFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$researchPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Research.
     * @param {researchCreateArgs} args - Arguments to create a Research.
     * @example
     * // Create one Research
     * const Research = await prisma.research.create({
     *   data: {
     *     // ... data to create a Research
     *   }
     * })
     *
     **/
    create<T extends researchCreateArgs<ExtArgs>>(
      args: SelectSubset<T, researchCreateArgs<ExtArgs>>,
    ): Prisma__researchClient<$Result.GetResult<Prisma.$researchPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Research.
     *     @param {researchCreateManyArgs} args - Arguments to create many Research.
     *     @example
     *     // Create many Research
     *     const research = await prisma.research.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends researchCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, researchCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Research.
     * @param {researchDeleteArgs} args - Arguments to delete one Research.
     * @example
     * // Delete one Research
     * const Research = await prisma.research.delete({
     *   where: {
     *     // ... filter to delete one Research
     *   }
     * })
     *
     **/
    delete<T extends researchDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, researchDeleteArgs<ExtArgs>>,
    ): Prisma__researchClient<$Result.GetResult<Prisma.$researchPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Research.
     * @param {researchUpdateArgs} args - Arguments to update one Research.
     * @example
     * // Update one Research
     * const research = await prisma.research.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends researchUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, researchUpdateArgs<ExtArgs>>,
    ): Prisma__researchClient<$Result.GetResult<Prisma.$researchPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Research.
     * @param {researchDeleteManyArgs} args - Arguments to filter Research to delete.
     * @example
     * // Delete a few Research
     * const { count } = await prisma.research.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends researchDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, researchDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Research.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {researchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Research
     * const research = await prisma.research.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends researchUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, researchUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Research.
     * @param {researchUpsertArgs} args - Arguments to update or create a Research.
     * @example
     * // Update or create a Research
     * const research = await prisma.research.upsert({
     *   create: {
     *     // ... data to create a Research
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Research we want to update
     *   }
     * })
     **/
    upsert<T extends researchUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, researchUpsertArgs<ExtArgs>>,
    ): Prisma__researchClient<$Result.GetResult<Prisma.$researchPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Research.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {researchCountArgs} args - Arguments to filter Research to count.
     * @example
     * // Count the number of Research
     * const count = await prisma.research.count({
     *   where: {
     *     // ... the filter for the Research we want to count
     *   }
     * })
     **/
    count<T extends researchCountArgs>(
      args?: Subset<T, researchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResearchCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Research.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResearchAggregateArgs>(
      args: Subset<T, ResearchAggregateArgs>,
    ): Prisma.PrismaPromise<GetResearchAggregateType<T>>;

    /**
     * Group by Research.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {researchGroupByArgs} args - Group by arguments.
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
      T extends researchGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: researchGroupByArgs['orderBy'] }
        : { orderBy?: researchGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, researchGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetResearchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the research model
     */
    readonly fields: researchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for research.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__researchClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    publication<T extends research$publicationArgs<ExtArgs> = {}>(
      args?: Subset<T, research$publicationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    organization<T extends organizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, organizationDefaultArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the research model
   */
  interface researchFieldRefs {
    readonly id: FieldRef<'research', 'String'>;
    readonly title: FieldRef<'research', 'String'>;
    readonly abstract: FieldRef<'research', 'String'>;
    readonly publication_date: FieldRef<'research', 'DateTime'>;
    readonly user_id: FieldRef<'research', 'String'>;
    readonly organization_id: FieldRef<'research', 'String'>;
    readonly created_at: FieldRef<'research', 'DateTime'>;
    readonly updated_at: FieldRef<'research', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * research findUnique
   */
  export type researchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research
     */
    select?: researchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: researchInclude<ExtArgs> | null;
    /**
     * Filter, which research to fetch.
     */
    where: researchWhereUniqueInput;
  };

  /**
   * research findUniqueOrThrow
   */
  export type researchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research
     */
    select?: researchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: researchInclude<ExtArgs> | null;
    /**
     * Filter, which research to fetch.
     */
    where: researchWhereUniqueInput;
  };

  /**
   * research findFirst
   */
  export type researchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research
     */
    select?: researchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: researchInclude<ExtArgs> | null;
    /**
     * Filter, which research to fetch.
     */
    where?: researchWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of research to fetch.
     */
    orderBy?: researchOrderByWithRelationInput | researchOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for research.
     */
    cursor?: researchWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` research from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` research.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of research.
     */
    distinct?: ResearchScalarFieldEnum | ResearchScalarFieldEnum[];
  };

  /**
   * research findFirstOrThrow
   */
  export type researchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research
     */
    select?: researchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: researchInclude<ExtArgs> | null;
    /**
     * Filter, which research to fetch.
     */
    where?: researchWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of research to fetch.
     */
    orderBy?: researchOrderByWithRelationInput | researchOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for research.
     */
    cursor?: researchWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` research from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` research.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of research.
     */
    distinct?: ResearchScalarFieldEnum | ResearchScalarFieldEnum[];
  };

  /**
   * research findMany
   */
  export type researchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research
     */
    select?: researchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: researchInclude<ExtArgs> | null;
    /**
     * Filter, which research to fetch.
     */
    where?: researchWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of research to fetch.
     */
    orderBy?: researchOrderByWithRelationInput | researchOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing research.
     */
    cursor?: researchWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` research from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` research.
     */
    skip?: number;
    distinct?: ResearchScalarFieldEnum | ResearchScalarFieldEnum[];
  };

  /**
   * research create
   */
  export type researchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research
     */
    select?: researchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: researchInclude<ExtArgs> | null;
    /**
     * The data needed to create a research.
     */
    data: XOR<researchCreateInput, researchUncheckedCreateInput>;
  };

  /**
   * research createMany
   */
  export type researchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many research.
     */
    data: researchCreateManyInput | researchCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * research update
   */
  export type researchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research
     */
    select?: researchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: researchInclude<ExtArgs> | null;
    /**
     * The data needed to update a research.
     */
    data: XOR<researchUpdateInput, researchUncheckedUpdateInput>;
    /**
     * Choose, which research to update.
     */
    where: researchWhereUniqueInput;
  };

  /**
   * research updateMany
   */
  export type researchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update research.
     */
    data: XOR<researchUpdateManyMutationInput, researchUncheckedUpdateManyInput>;
    /**
     * Filter which research to update
     */
    where?: researchWhereInput;
  };

  /**
   * research upsert
   */
  export type researchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research
     */
    select?: researchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: researchInclude<ExtArgs> | null;
    /**
     * The filter to search for the research to update in case it exists.
     */
    where: researchWhereUniqueInput;
    /**
     * In case the research found by the `where` argument doesn't exist, create a new research with this data.
     */
    create: XOR<researchCreateInput, researchUncheckedCreateInput>;
    /**
     * In case the research was found with the provided `where` argument, update it with this data.
     */
    update: XOR<researchUpdateInput, researchUncheckedUpdateInput>;
  };

  /**
   * research delete
   */
  export type researchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research
     */
    select?: researchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: researchInclude<ExtArgs> | null;
    /**
     * Filter which research to delete.
     */
    where: researchWhereUniqueInput;
  };

  /**
   * research deleteMany
   */
  export type researchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which research to delete
     */
    where?: researchWhereInput;
  };

  /**
   * research.publication
   */
  export type research$publicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publicationInclude<ExtArgs> | null;
    where?: publicationWhereInput;
    orderBy?: publicationOrderByWithRelationInput | publicationOrderByWithRelationInput[];
    cursor?: publicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[];
  };

  /**
   * research without action
   */
  export type researchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research
     */
    select?: researchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: researchInclude<ExtArgs> | null;
  };

  /**
   * Model research_interest
   */

  export type AggregateResearch_interest = {
    _count: Research_interestCountAggregateOutputType | null;
    _min: Research_interestMinAggregateOutputType | null;
    _max: Research_interestMaxAggregateOutputType | null;
  };

  export type Research_interestMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Research_interestMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Research_interestCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Research_interestMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Research_interestMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Research_interestCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Research_interestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which research_interest to aggregate.
     */
    where?: research_interestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of research_interests to fetch.
     */
    orderBy?: research_interestOrderByWithRelationInput | research_interestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: research_interestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` research_interests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` research_interests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned research_interests
     **/
    _count?: true | Research_interestCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Research_interestMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Research_interestMaxAggregateInputType;
  };

  export type GetResearch_interestAggregateType<T extends Research_interestAggregateArgs> = {
    [P in keyof T & keyof AggregateResearch_interest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResearch_interest[P]>
      : GetScalarType<T[P], AggregateResearch_interest[P]>;
  };

  export type research_interestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: research_interestWhereInput;
    orderBy?: research_interestOrderByWithAggregationInput | research_interestOrderByWithAggregationInput[];
    by: Research_interestScalarFieldEnum[] | Research_interestScalarFieldEnum;
    having?: research_interestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Research_interestCountAggregateInputType | true;
    _min?: Research_interestMinAggregateInputType;
    _max?: Research_interestMaxAggregateInputType;
  };

  export type Research_interestGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: Research_interestCountAggregateOutputType | null;
    _min: Research_interestMinAggregateOutputType | null;
    _max: Research_interestMaxAggregateOutputType | null;
  };

  type GetResearch_interestGroupByPayload<T extends research_interestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Research_interestGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Research_interestGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Research_interestGroupByOutputType[P]>
          : GetScalarType<T[P], Research_interestGroupByOutputType[P]>;
      }
    >
  >;

  export type research_interestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['research_interest']
    >;

  export type research_interestSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $research_interestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'research_interest';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['research_interest']
    >;
    composites: {};
  };

  type research_interestGetPayload<S extends boolean | null | undefined | research_interestDefaultArgs> =
    $Result.GetResult<Prisma.$research_interestPayload, S>;

  type research_interestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    research_interestFindManyArgs,
    'select' | 'include'
  > & {
    select?: Research_interestCountAggregateInputType | true;
  };

  export interface research_interestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['research_interest']; meta: { name: 'research_interest' } };
    /**
     * Find zero or one Research_interest that matches the filter.
     * @param {research_interestFindUniqueArgs} args - Arguments to find a Research_interest
     * @example
     * // Get one Research_interest
     * const research_interest = await prisma.research_interest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends research_interestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, research_interestFindUniqueArgs<ExtArgs>>,
    ): Prisma__research_interestClient<
      $Result.GetResult<Prisma.$research_interestPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Research_interest that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {research_interestFindUniqueOrThrowArgs} args - Arguments to find a Research_interest
     * @example
     * // Get one Research_interest
     * const research_interest = await prisma.research_interest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends research_interestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, research_interestFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__research_interestClient<
      $Result.GetResult<Prisma.$research_interestPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Research_interest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {research_interestFindFirstArgs} args - Arguments to find a Research_interest
     * @example
     * // Get one Research_interest
     * const research_interest = await prisma.research_interest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends research_interestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, research_interestFindFirstArgs<ExtArgs>>,
    ): Prisma__research_interestClient<
      $Result.GetResult<Prisma.$research_interestPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Research_interest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {research_interestFindFirstOrThrowArgs} args - Arguments to find a Research_interest
     * @example
     * // Get one Research_interest
     * const research_interest = await prisma.research_interest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends research_interestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, research_interestFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__research_interestClient<
      $Result.GetResult<Prisma.$research_interestPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Research_interests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {research_interestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Research_interests
     * const research_interests = await prisma.research_interest.findMany()
     *
     * // Get first 10 Research_interests
     * const research_interests = await prisma.research_interest.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const research_interestWithIdOnly = await prisma.research_interest.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends research_interestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, research_interestFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$research_interestPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Research_interest.
     * @param {research_interestCreateArgs} args - Arguments to create a Research_interest.
     * @example
     * // Create one Research_interest
     * const Research_interest = await prisma.research_interest.create({
     *   data: {
     *     // ... data to create a Research_interest
     *   }
     * })
     *
     **/
    create<T extends research_interestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, research_interestCreateArgs<ExtArgs>>,
    ): Prisma__research_interestClient<
      $Result.GetResult<Prisma.$research_interestPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Research_interests.
     *     @param {research_interestCreateManyArgs} args - Arguments to create many Research_interests.
     *     @example
     *     // Create many Research_interests
     *     const research_interest = await prisma.research_interest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends research_interestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, research_interestCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Research_interest.
     * @param {research_interestDeleteArgs} args - Arguments to delete one Research_interest.
     * @example
     * // Delete one Research_interest
     * const Research_interest = await prisma.research_interest.delete({
     *   where: {
     *     // ... filter to delete one Research_interest
     *   }
     * })
     *
     **/
    delete<T extends research_interestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, research_interestDeleteArgs<ExtArgs>>,
    ): Prisma__research_interestClient<
      $Result.GetResult<Prisma.$research_interestPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Research_interest.
     * @param {research_interestUpdateArgs} args - Arguments to update one Research_interest.
     * @example
     * // Update one Research_interest
     * const research_interest = await prisma.research_interest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends research_interestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, research_interestUpdateArgs<ExtArgs>>,
    ): Prisma__research_interestClient<
      $Result.GetResult<Prisma.$research_interestPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Research_interests.
     * @param {research_interestDeleteManyArgs} args - Arguments to filter Research_interests to delete.
     * @example
     * // Delete a few Research_interests
     * const { count } = await prisma.research_interest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends research_interestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, research_interestDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Research_interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {research_interestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Research_interests
     * const research_interest = await prisma.research_interest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends research_interestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, research_interestUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Research_interest.
     * @param {research_interestUpsertArgs} args - Arguments to update or create a Research_interest.
     * @example
     * // Update or create a Research_interest
     * const research_interest = await prisma.research_interest.upsert({
     *   create: {
     *     // ... data to create a Research_interest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Research_interest we want to update
     *   }
     * })
     **/
    upsert<T extends research_interestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, research_interestUpsertArgs<ExtArgs>>,
    ): Prisma__research_interestClient<
      $Result.GetResult<Prisma.$research_interestPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Research_interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {research_interestCountArgs} args - Arguments to filter Research_interests to count.
     * @example
     * // Count the number of Research_interests
     * const count = await prisma.research_interest.count({
     *   where: {
     *     // ... the filter for the Research_interests we want to count
     *   }
     * })
     **/
    count<T extends research_interestCountArgs>(
      args?: Subset<T, research_interestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Research_interestCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Research_interest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Research_interestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Research_interestAggregateArgs>(
      args: Subset<T, Research_interestAggregateArgs>,
    ): Prisma.PrismaPromise<GetResearch_interestAggregateType<T>>;

    /**
     * Group by Research_interest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {research_interestGroupByArgs} args - Group by arguments.
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
      T extends research_interestGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: research_interestGroupByArgs['orderBy'] }
        : { orderBy?: research_interestGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, research_interestGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetResearch_interestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the research_interest model
     */
    readonly fields: research_interestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for research_interest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__research_interestClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the research_interest model
   */
  interface research_interestFieldRefs {
    readonly id: FieldRef<'research_interest', 'String'>;
    readonly created_at: FieldRef<'research_interest', 'DateTime'>;
    readonly updated_at: FieldRef<'research_interest', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * research_interest findUnique
   */
  export type research_interestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research_interest
     */
    select?: research_interestSelect<ExtArgs> | null;
    /**
     * Filter, which research_interest to fetch.
     */
    where: research_interestWhereUniqueInput;
  };

  /**
   * research_interest findUniqueOrThrow
   */
  export type research_interestFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the research_interest
     */
    select?: research_interestSelect<ExtArgs> | null;
    /**
     * Filter, which research_interest to fetch.
     */
    where: research_interestWhereUniqueInput;
  };

  /**
   * research_interest findFirst
   */
  export type research_interestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research_interest
     */
    select?: research_interestSelect<ExtArgs> | null;
    /**
     * Filter, which research_interest to fetch.
     */
    where?: research_interestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of research_interests to fetch.
     */
    orderBy?: research_interestOrderByWithRelationInput | research_interestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for research_interests.
     */
    cursor?: research_interestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` research_interests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` research_interests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of research_interests.
     */
    distinct?: Research_interestScalarFieldEnum | Research_interestScalarFieldEnum[];
  };

  /**
   * research_interest findFirstOrThrow
   */
  export type research_interestFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the research_interest
     */
    select?: research_interestSelect<ExtArgs> | null;
    /**
     * Filter, which research_interest to fetch.
     */
    where?: research_interestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of research_interests to fetch.
     */
    orderBy?: research_interestOrderByWithRelationInput | research_interestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for research_interests.
     */
    cursor?: research_interestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` research_interests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` research_interests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of research_interests.
     */
    distinct?: Research_interestScalarFieldEnum | Research_interestScalarFieldEnum[];
  };

  /**
   * research_interest findMany
   */
  export type research_interestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research_interest
     */
    select?: research_interestSelect<ExtArgs> | null;
    /**
     * Filter, which research_interests to fetch.
     */
    where?: research_interestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of research_interests to fetch.
     */
    orderBy?: research_interestOrderByWithRelationInput | research_interestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing research_interests.
     */
    cursor?: research_interestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` research_interests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` research_interests.
     */
    skip?: number;
    distinct?: Research_interestScalarFieldEnum | Research_interestScalarFieldEnum[];
  };

  /**
   * research_interest create
   */
  export type research_interestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research_interest
     */
    select?: research_interestSelect<ExtArgs> | null;
    /**
     * The data needed to create a research_interest.
     */
    data?: XOR<research_interestCreateInput, research_interestUncheckedCreateInput>;
  };

  /**
   * research_interest createMany
   */
  export type research_interestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many research_interests.
     */
    data: research_interestCreateManyInput | research_interestCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * research_interest update
   */
  export type research_interestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research_interest
     */
    select?: research_interestSelect<ExtArgs> | null;
    /**
     * The data needed to update a research_interest.
     */
    data: XOR<research_interestUpdateInput, research_interestUncheckedUpdateInput>;
    /**
     * Choose, which research_interest to update.
     */
    where: research_interestWhereUniqueInput;
  };

  /**
   * research_interest updateMany
   */
  export type research_interestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update research_interests.
     */
    data: XOR<research_interestUpdateManyMutationInput, research_interestUncheckedUpdateManyInput>;
    /**
     * Filter which research_interests to update
     */
    where?: research_interestWhereInput;
  };

  /**
   * research_interest upsert
   */
  export type research_interestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research_interest
     */
    select?: research_interestSelect<ExtArgs> | null;
    /**
     * The filter to search for the research_interest to update in case it exists.
     */
    where: research_interestWhereUniqueInput;
    /**
     * In case the research_interest found by the `where` argument doesn't exist, create a new research_interest with this data.
     */
    create: XOR<research_interestCreateInput, research_interestUncheckedCreateInput>;
    /**
     * In case the research_interest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<research_interestUpdateInput, research_interestUncheckedUpdateInput>;
  };

  /**
   * research_interest delete
   */
  export type research_interestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research_interest
     */
    select?: research_interestSelect<ExtArgs> | null;
    /**
     * Filter which research_interest to delete.
     */
    where: research_interestWhereUniqueInput;
  };

  /**
   * research_interest deleteMany
   */
  export type research_interestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which research_interests to delete
     */
    where?: research_interestWhereInput;
  };

  /**
   * research_interest without action
   */
  export type research_interestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research_interest
     */
    select?: research_interestSelect<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      collaboration?: boolean | user$collaborationArgs<ExtArgs>;
      organization?: boolean | user$organizationArgs<ExtArgs>;
      project?: boolean | user$projectArgs<ExtArgs>;
      publication?: boolean | user$publicationArgs<ExtArgs>;
      research?: boolean | user$researchArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collaboration?: boolean | user$collaborationArgs<ExtArgs>;
    organization?: boolean | user$organizationArgs<ExtArgs>;
    project?: boolean | user$projectArgs<ExtArgs>;
    publication?: boolean | user$publicationArgs<ExtArgs>;
    research?: boolean | user$researchArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      collaboration: Prisma.$collaborationPayload<ExtArgs>[];
      organization: Prisma.$organizationPayload<ExtArgs>[];
      project: Prisma.$projectPayload<ExtArgs>[];
      publication: Prisma.$publicationPayload<ExtArgs>[];
      research: Prisma.$researchPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
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
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    collaboration<T extends user$collaborationArgs<ExtArgs> = {}>(
      args?: Subset<T, user$collaborationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$collaborationPayload<ExtArgs>, T, 'findMany'> | Null>;

    organization<T extends user$organizationArgs<ExtArgs> = {}>(
      args?: Subset<T, user$organizationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'> | Null>;

    project<T extends user$projectArgs<ExtArgs> = {}>(
      args?: Subset<T, user$projectArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, 'findMany'> | Null>;

    publication<T extends user$publicationArgs<ExtArgs> = {}>(
      args?: Subset<T, user$publicationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$publicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    research<T extends user$researchArgs<ExtArgs> = {}>(
      args?: Subset<T, user$researchArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$researchPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.collaboration
   */
  export type user$collaborationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collaboration
     */
    select?: collaborationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collaborationInclude<ExtArgs> | null;
    where?: collaborationWhereInput;
    orderBy?: collaborationOrderByWithRelationInput | collaborationOrderByWithRelationInput[];
    cursor?: collaborationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CollaborationScalarFieldEnum | CollaborationScalarFieldEnum[];
  };

  /**
   * user.organization
   */
  export type user$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    cursor?: organizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * user.project
   */
  export type user$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: projectInclude<ExtArgs> | null;
    where?: projectWhereInput;
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[];
    cursor?: projectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[];
  };

  /**
   * user.publication
   */
  export type user$publicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publication
     */
    select?: publicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publicationInclude<ExtArgs> | null;
    where?: publicationWhereInput;
    orderBy?: publicationOrderByWithRelationInput | publicationOrderByWithRelationInput[];
    cursor?: publicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[];
  };

  /**
   * user.research
   */
  export type user$researchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the research
     */
    select?: researchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: researchInclude<ExtArgs> | null;
    where?: researchWhereInput;
    orderBy?: researchOrderByWithRelationInput | researchOrderByWithRelationInput[];
    cursor?: researchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ResearchScalarFieldEnum | ResearchScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Model workshop
   */

  export type AggregateWorkshop = {
    _count: WorkshopCountAggregateOutputType | null;
    _min: WorkshopMinAggregateOutputType | null;
    _max: WorkshopMaxAggregateOutputType | null;
  };

  export type WorkshopMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type WorkshopMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type WorkshopCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type WorkshopMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type WorkshopMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type WorkshopCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type WorkshopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workshop to aggregate.
     */
    where?: workshopWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of workshops to fetch.
     */
    orderBy?: workshopOrderByWithRelationInput | workshopOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: workshopWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` workshops from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` workshops.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned workshops
     **/
    _count?: true | WorkshopCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: WorkshopMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: WorkshopMaxAggregateInputType;
  };

  export type GetWorkshopAggregateType<T extends WorkshopAggregateArgs> = {
    [P in keyof T & keyof AggregateWorkshop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkshop[P]>
      : GetScalarType<T[P], AggregateWorkshop[P]>;
  };

  export type workshopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workshopWhereInput;
    orderBy?: workshopOrderByWithAggregationInput | workshopOrderByWithAggregationInput[];
    by: WorkshopScalarFieldEnum[] | WorkshopScalarFieldEnum;
    having?: workshopScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WorkshopCountAggregateInputType | true;
    _min?: WorkshopMinAggregateInputType;
    _max?: WorkshopMaxAggregateInputType;
  };

  export type WorkshopGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: WorkshopCountAggregateOutputType | null;
    _min: WorkshopMinAggregateOutputType | null;
    _max: WorkshopMaxAggregateOutputType | null;
  };

  type GetWorkshopGroupByPayload<T extends workshopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkshopGroupByOutputType, T['by']> & {
        [P in keyof T & keyof WorkshopGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], WorkshopGroupByOutputType[P]>
          : GetScalarType<T[P], WorkshopGroupByOutputType[P]>;
      }
    >
  >;

  export type workshopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['workshop']
    >;

  export type workshopSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $workshopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'workshop';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['workshop']
    >;
    composites: {};
  };

  type workshopGetPayload<S extends boolean | null | undefined | workshopDefaultArgs> = $Result.GetResult<
    Prisma.$workshopPayload,
    S
  >;

  type workshopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    workshopFindManyArgs,
    'select' | 'include'
  > & {
    select?: WorkshopCountAggregateInputType | true;
  };

  export interface workshopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workshop']; meta: { name: 'workshop' } };
    /**
     * Find zero or one Workshop that matches the filter.
     * @param {workshopFindUniqueArgs} args - Arguments to find a Workshop
     * @example
     * // Get one Workshop
     * const workshop = await prisma.workshop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends workshopFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, workshopFindUniqueArgs<ExtArgs>>,
    ): Prisma__workshopClient<
      $Result.GetResult<Prisma.$workshopPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Workshop that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {workshopFindUniqueOrThrowArgs} args - Arguments to find a Workshop
     * @example
     * // Get one Workshop
     * const workshop = await prisma.workshop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends workshopFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, workshopFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__workshopClient<
      $Result.GetResult<Prisma.$workshopPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Workshop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workshopFindFirstArgs} args - Arguments to find a Workshop
     * @example
     * // Get one Workshop
     * const workshop = await prisma.workshop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends workshopFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, workshopFindFirstArgs<ExtArgs>>,
    ): Prisma__workshopClient<
      $Result.GetResult<Prisma.$workshopPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Workshop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workshopFindFirstOrThrowArgs} args - Arguments to find a Workshop
     * @example
     * // Get one Workshop
     * const workshop = await prisma.workshop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends workshopFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, workshopFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__workshopClient<
      $Result.GetResult<Prisma.$workshopPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Workshops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workshopFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workshops
     * const workshops = await prisma.workshop.findMany()
     *
     * // Get first 10 Workshops
     * const workshops = await prisma.workshop.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const workshopWithIdOnly = await prisma.workshop.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends workshopFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, workshopFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workshopPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Workshop.
     * @param {workshopCreateArgs} args - Arguments to create a Workshop.
     * @example
     * // Create one Workshop
     * const Workshop = await prisma.workshop.create({
     *   data: {
     *     // ... data to create a Workshop
     *   }
     * })
     *
     **/
    create<T extends workshopCreateArgs<ExtArgs>>(
      args: SelectSubset<T, workshopCreateArgs<ExtArgs>>,
    ): Prisma__workshopClient<$Result.GetResult<Prisma.$workshopPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Workshops.
     *     @param {workshopCreateManyArgs} args - Arguments to create many Workshops.
     *     @example
     *     // Create many Workshops
     *     const workshop = await prisma.workshop.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends workshopCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, workshopCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Workshop.
     * @param {workshopDeleteArgs} args - Arguments to delete one Workshop.
     * @example
     * // Delete one Workshop
     * const Workshop = await prisma.workshop.delete({
     *   where: {
     *     // ... filter to delete one Workshop
     *   }
     * })
     *
     **/
    delete<T extends workshopDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, workshopDeleteArgs<ExtArgs>>,
    ): Prisma__workshopClient<$Result.GetResult<Prisma.$workshopPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Workshop.
     * @param {workshopUpdateArgs} args - Arguments to update one Workshop.
     * @example
     * // Update one Workshop
     * const workshop = await prisma.workshop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends workshopUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, workshopUpdateArgs<ExtArgs>>,
    ): Prisma__workshopClient<$Result.GetResult<Prisma.$workshopPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Workshops.
     * @param {workshopDeleteManyArgs} args - Arguments to filter Workshops to delete.
     * @example
     * // Delete a few Workshops
     * const { count } = await prisma.workshop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends workshopDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, workshopDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Workshops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workshopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workshops
     * const workshop = await prisma.workshop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends workshopUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, workshopUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Workshop.
     * @param {workshopUpsertArgs} args - Arguments to update or create a Workshop.
     * @example
     * // Update or create a Workshop
     * const workshop = await prisma.workshop.upsert({
     *   create: {
     *     // ... data to create a Workshop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workshop we want to update
     *   }
     * })
     **/
    upsert<T extends workshopUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, workshopUpsertArgs<ExtArgs>>,
    ): Prisma__workshopClient<$Result.GetResult<Prisma.$workshopPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Workshops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workshopCountArgs} args - Arguments to filter Workshops to count.
     * @example
     * // Count the number of Workshops
     * const count = await prisma.workshop.count({
     *   where: {
     *     // ... the filter for the Workshops we want to count
     *   }
     * })
     **/
    count<T extends workshopCountArgs>(
      args?: Subset<T, workshopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkshopCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Workshop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkshopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkshopAggregateArgs>(
      args: Subset<T, WorkshopAggregateArgs>,
    ): Prisma.PrismaPromise<GetWorkshopAggregateType<T>>;

    /**
     * Group by Workshop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workshopGroupByArgs} args - Group by arguments.
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
      T extends workshopGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workshopGroupByArgs['orderBy'] }
        : { orderBy?: workshopGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, workshopGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetWorkshopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the workshop model
     */
    readonly fields: workshopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workshop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workshopClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the workshop model
   */
  interface workshopFieldRefs {
    readonly id: FieldRef<'workshop', 'String'>;
    readonly created_at: FieldRef<'workshop', 'DateTime'>;
    readonly updated_at: FieldRef<'workshop', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * workshop findUnique
   */
  export type workshopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workshop
     */
    select?: workshopSelect<ExtArgs> | null;
    /**
     * Filter, which workshop to fetch.
     */
    where: workshopWhereUniqueInput;
  };

  /**
   * workshop findUniqueOrThrow
   */
  export type workshopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workshop
     */
    select?: workshopSelect<ExtArgs> | null;
    /**
     * Filter, which workshop to fetch.
     */
    where: workshopWhereUniqueInput;
  };

  /**
   * workshop findFirst
   */
  export type workshopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workshop
     */
    select?: workshopSelect<ExtArgs> | null;
    /**
     * Filter, which workshop to fetch.
     */
    where?: workshopWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of workshops to fetch.
     */
    orderBy?: workshopOrderByWithRelationInput | workshopOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for workshops.
     */
    cursor?: workshopWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` workshops from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` workshops.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of workshops.
     */
    distinct?: WorkshopScalarFieldEnum | WorkshopScalarFieldEnum[];
  };

  /**
   * workshop findFirstOrThrow
   */
  export type workshopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workshop
     */
    select?: workshopSelect<ExtArgs> | null;
    /**
     * Filter, which workshop to fetch.
     */
    where?: workshopWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of workshops to fetch.
     */
    orderBy?: workshopOrderByWithRelationInput | workshopOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for workshops.
     */
    cursor?: workshopWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` workshops from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` workshops.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of workshops.
     */
    distinct?: WorkshopScalarFieldEnum | WorkshopScalarFieldEnum[];
  };

  /**
   * workshop findMany
   */
  export type workshopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workshop
     */
    select?: workshopSelect<ExtArgs> | null;
    /**
     * Filter, which workshops to fetch.
     */
    where?: workshopWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of workshops to fetch.
     */
    orderBy?: workshopOrderByWithRelationInput | workshopOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing workshops.
     */
    cursor?: workshopWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` workshops from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` workshops.
     */
    skip?: number;
    distinct?: WorkshopScalarFieldEnum | WorkshopScalarFieldEnum[];
  };

  /**
   * workshop create
   */
  export type workshopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workshop
     */
    select?: workshopSelect<ExtArgs> | null;
    /**
     * The data needed to create a workshop.
     */
    data?: XOR<workshopCreateInput, workshopUncheckedCreateInput>;
  };

  /**
   * workshop createMany
   */
  export type workshopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workshops.
     */
    data: workshopCreateManyInput | workshopCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * workshop update
   */
  export type workshopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workshop
     */
    select?: workshopSelect<ExtArgs> | null;
    /**
     * The data needed to update a workshop.
     */
    data: XOR<workshopUpdateInput, workshopUncheckedUpdateInput>;
    /**
     * Choose, which workshop to update.
     */
    where: workshopWhereUniqueInput;
  };

  /**
   * workshop updateMany
   */
  export type workshopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workshops.
     */
    data: XOR<workshopUpdateManyMutationInput, workshopUncheckedUpdateManyInput>;
    /**
     * Filter which workshops to update
     */
    where?: workshopWhereInput;
  };

  /**
   * workshop upsert
   */
  export type workshopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workshop
     */
    select?: workshopSelect<ExtArgs> | null;
    /**
     * The filter to search for the workshop to update in case it exists.
     */
    where: workshopWhereUniqueInput;
    /**
     * In case the workshop found by the `where` argument doesn't exist, create a new workshop with this data.
     */
    create: XOR<workshopCreateInput, workshopUncheckedCreateInput>;
    /**
     * In case the workshop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workshopUpdateInput, workshopUncheckedUpdateInput>;
  };

  /**
   * workshop delete
   */
  export type workshopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workshop
     */
    select?: workshopSelect<ExtArgs> | null;
    /**
     * Filter which workshop to delete.
     */
    where: workshopWhereUniqueInput;
  };

  /**
   * workshop deleteMany
   */
  export type workshopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workshops to delete
     */
    where?: workshopWhereInput;
  };

  /**
   * workshop without action
   */
  export type workshopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workshop
     */
    select?: workshopSelect<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CitationScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CitationScalarFieldEnum = (typeof CitationScalarFieldEnum)[keyof typeof CitationScalarFieldEnum];

  export const CollaborationScalarFieldEnum: {
    id: 'id';
    collaborator_id: 'collaborator_id';
    project_id: 'project_id';
    role: 'role';
    start_date: 'start_date';
    end_date: 'end_date';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CollaborationScalarFieldEnum =
    (typeof CollaborationScalarFieldEnum)[keyof typeof CollaborationScalarFieldEnum];

  export const ConferenceScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ConferenceScalarFieldEnum = (typeof ConferenceScalarFieldEnum)[keyof typeof ConferenceScalarFieldEnum];

  export const OrganizationScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type OrganizationScalarFieldEnum =
    (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];

  export const PatentScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type PatentScalarFieldEnum = (typeof PatentScalarFieldEnum)[keyof typeof PatentScalarFieldEnum];

  export const ProjectScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    start_date: 'start_date';
    end_date: 'end_date';
    user_id: 'user_id';
    organization_id: 'organization_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum];

  export const PublicationScalarFieldEnum: {
    id: 'id';
    title: 'title';
    publication_date: 'publication_date';
    publisher: 'publisher';
    user_id: 'user_id';
    research_id: 'research_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type PublicationScalarFieldEnum = (typeof PublicationScalarFieldEnum)[keyof typeof PublicationScalarFieldEnum];

  export const ResearchScalarFieldEnum: {
    id: 'id';
    title: 'title';
    abstract: 'abstract';
    publication_date: 'publication_date';
    user_id: 'user_id';
    organization_id: 'organization_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ResearchScalarFieldEnum = (typeof ResearchScalarFieldEnum)[keyof typeof ResearchScalarFieldEnum];

  export const Research_interestScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Research_interestScalarFieldEnum =
    (typeof Research_interestScalarFieldEnum)[keyof typeof Research_interestScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const WorkshopScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type WorkshopScalarFieldEnum = (typeof WorkshopScalarFieldEnum)[keyof typeof WorkshopScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Deep Input Types
   */

  export type citationWhereInput = {
    AND?: citationWhereInput | citationWhereInput[];
    OR?: citationWhereInput[];
    NOT?: citationWhereInput | citationWhereInput[];
    id?: UuidFilter<'citation'> | string;
    created_at?: DateTimeFilter<'citation'> | Date | string;
    updated_at?: DateTimeFilter<'citation'> | Date | string;
  };

  export type citationOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type citationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: citationWhereInput | citationWhereInput[];
      OR?: citationWhereInput[];
      NOT?: citationWhereInput | citationWhereInput[];
      created_at?: DateTimeFilter<'citation'> | Date | string;
      updated_at?: DateTimeFilter<'citation'> | Date | string;
    },
    'id'
  >;

  export type citationOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: citationCountOrderByAggregateInput;
    _max?: citationMaxOrderByAggregateInput;
    _min?: citationMinOrderByAggregateInput;
  };

  export type citationScalarWhereWithAggregatesInput = {
    AND?: citationScalarWhereWithAggregatesInput | citationScalarWhereWithAggregatesInput[];
    OR?: citationScalarWhereWithAggregatesInput[];
    NOT?: citationScalarWhereWithAggregatesInput | citationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'citation'> | string;
    created_at?: DateTimeWithAggregatesFilter<'citation'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'citation'> | Date | string;
  };

  export type collaborationWhereInput = {
    AND?: collaborationWhereInput | collaborationWhereInput[];
    OR?: collaborationWhereInput[];
    NOT?: collaborationWhereInput | collaborationWhereInput[];
    id?: UuidFilter<'collaboration'> | string;
    collaborator_id?: UuidFilter<'collaboration'> | string;
    project_id?: UuidFilter<'collaboration'> | string;
    role?: StringNullableFilter<'collaboration'> | string | null;
    start_date?: DateTimeNullableFilter<'collaboration'> | Date | string | null;
    end_date?: DateTimeNullableFilter<'collaboration'> | Date | string | null;
    created_at?: DateTimeFilter<'collaboration'> | Date | string;
    updated_at?: DateTimeFilter<'collaboration'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    project?: XOR<ProjectRelationFilter, projectWhereInput>;
  };

  export type collaborationOrderByWithRelationInput = {
    id?: SortOrder;
    collaborator_id?: SortOrder;
    project_id?: SortOrder;
    role?: SortOrderInput | SortOrder;
    start_date?: SortOrderInput | SortOrder;
    end_date?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
    project?: projectOrderByWithRelationInput;
  };

  export type collaborationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: collaborationWhereInput | collaborationWhereInput[];
      OR?: collaborationWhereInput[];
      NOT?: collaborationWhereInput | collaborationWhereInput[];
      collaborator_id?: UuidFilter<'collaboration'> | string;
      project_id?: UuidFilter<'collaboration'> | string;
      role?: StringNullableFilter<'collaboration'> | string | null;
      start_date?: DateTimeNullableFilter<'collaboration'> | Date | string | null;
      end_date?: DateTimeNullableFilter<'collaboration'> | Date | string | null;
      created_at?: DateTimeFilter<'collaboration'> | Date | string;
      updated_at?: DateTimeFilter<'collaboration'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      project?: XOR<ProjectRelationFilter, projectWhereInput>;
    },
    'id'
  >;

  export type collaborationOrderByWithAggregationInput = {
    id?: SortOrder;
    collaborator_id?: SortOrder;
    project_id?: SortOrder;
    role?: SortOrderInput | SortOrder;
    start_date?: SortOrderInput | SortOrder;
    end_date?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: collaborationCountOrderByAggregateInput;
    _max?: collaborationMaxOrderByAggregateInput;
    _min?: collaborationMinOrderByAggregateInput;
  };

  export type collaborationScalarWhereWithAggregatesInput = {
    AND?: collaborationScalarWhereWithAggregatesInput | collaborationScalarWhereWithAggregatesInput[];
    OR?: collaborationScalarWhereWithAggregatesInput[];
    NOT?: collaborationScalarWhereWithAggregatesInput | collaborationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'collaboration'> | string;
    collaborator_id?: UuidWithAggregatesFilter<'collaboration'> | string;
    project_id?: UuidWithAggregatesFilter<'collaboration'> | string;
    role?: StringNullableWithAggregatesFilter<'collaboration'> | string | null;
    start_date?: DateTimeNullableWithAggregatesFilter<'collaboration'> | Date | string | null;
    end_date?: DateTimeNullableWithAggregatesFilter<'collaboration'> | Date | string | null;
    created_at?: DateTimeWithAggregatesFilter<'collaboration'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'collaboration'> | Date | string;
  };

  export type conferenceWhereInput = {
    AND?: conferenceWhereInput | conferenceWhereInput[];
    OR?: conferenceWhereInput[];
    NOT?: conferenceWhereInput | conferenceWhereInput[];
    id?: UuidFilter<'conference'> | string;
    created_at?: DateTimeFilter<'conference'> | Date | string;
    updated_at?: DateTimeFilter<'conference'> | Date | string;
  };

  export type conferenceOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type conferenceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: conferenceWhereInput | conferenceWhereInput[];
      OR?: conferenceWhereInput[];
      NOT?: conferenceWhereInput | conferenceWhereInput[];
      created_at?: DateTimeFilter<'conference'> | Date | string;
      updated_at?: DateTimeFilter<'conference'> | Date | string;
    },
    'id'
  >;

  export type conferenceOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: conferenceCountOrderByAggregateInput;
    _max?: conferenceMaxOrderByAggregateInput;
    _min?: conferenceMinOrderByAggregateInput;
  };

  export type conferenceScalarWhereWithAggregatesInput = {
    AND?: conferenceScalarWhereWithAggregatesInput | conferenceScalarWhereWithAggregatesInput[];
    OR?: conferenceScalarWhereWithAggregatesInput[];
    NOT?: conferenceScalarWhereWithAggregatesInput | conferenceScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'conference'> | string;
    created_at?: DateTimeWithAggregatesFilter<'conference'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'conference'> | Date | string;
  };

  export type organizationWhereInput = {
    AND?: organizationWhereInput | organizationWhereInput[];
    OR?: organizationWhereInput[];
    NOT?: organizationWhereInput | organizationWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user_id?: UuidFilter<'organization'> | string;
    tenant_id?: StringFilter<'organization'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    project?: ProjectListRelationFilter;
    research?: ResearchListRelationFilter;
  };

  export type organizationOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
    project?: projectOrderByRelationAggregateInput;
    research?: researchOrderByRelationAggregateInput;
  };

  export type organizationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: organizationWhereInput | organizationWhereInput[];
      OR?: organizationWhereInput[];
      NOT?: organizationWhereInput | organizationWhereInput[];
      description?: StringNullableFilter<'organization'> | string | null;
      name?: StringFilter<'organization'> | string;
      created_at?: DateTimeFilter<'organization'> | Date | string;
      updated_at?: DateTimeFilter<'organization'> | Date | string;
      user_id?: UuidFilter<'organization'> | string;
      tenant_id?: StringFilter<'organization'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      project?: ProjectListRelationFilter;
      research?: ResearchListRelationFilter;
    },
    'id'
  >;

  export type organizationOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: organizationCountOrderByAggregateInput;
    _max?: organizationMaxOrderByAggregateInput;
    _min?: organizationMinOrderByAggregateInput;
  };

  export type organizationScalarWhereWithAggregatesInput = {
    AND?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    OR?: organizationScalarWhereWithAggregatesInput[];
    NOT?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'organization'> | string;
    description?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    name?: StringWithAggregatesFilter<'organization'> | string;
    created_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'organization'> | string;
    tenant_id?: StringWithAggregatesFilter<'organization'> | string;
  };

  export type patentWhereInput = {
    AND?: patentWhereInput | patentWhereInput[];
    OR?: patentWhereInput[];
    NOT?: patentWhereInput | patentWhereInput[];
    id?: UuidFilter<'patent'> | string;
    created_at?: DateTimeFilter<'patent'> | Date | string;
    updated_at?: DateTimeFilter<'patent'> | Date | string;
  };

  export type patentOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type patentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: patentWhereInput | patentWhereInput[];
      OR?: patentWhereInput[];
      NOT?: patentWhereInput | patentWhereInput[];
      created_at?: DateTimeFilter<'patent'> | Date | string;
      updated_at?: DateTimeFilter<'patent'> | Date | string;
    },
    'id'
  >;

  export type patentOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: patentCountOrderByAggregateInput;
    _max?: patentMaxOrderByAggregateInput;
    _min?: patentMinOrderByAggregateInput;
  };

  export type patentScalarWhereWithAggregatesInput = {
    AND?: patentScalarWhereWithAggregatesInput | patentScalarWhereWithAggregatesInput[];
    OR?: patentScalarWhereWithAggregatesInput[];
    NOT?: patentScalarWhereWithAggregatesInput | patentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'patent'> | string;
    created_at?: DateTimeWithAggregatesFilter<'patent'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'patent'> | Date | string;
  };

  export type projectWhereInput = {
    AND?: projectWhereInput | projectWhereInput[];
    OR?: projectWhereInput[];
    NOT?: projectWhereInput | projectWhereInput[];
    id?: UuidFilter<'project'> | string;
    name?: StringFilter<'project'> | string;
    description?: StringNullableFilter<'project'> | string | null;
    start_date?: DateTimeNullableFilter<'project'> | Date | string | null;
    end_date?: DateTimeNullableFilter<'project'> | Date | string | null;
    user_id?: UuidFilter<'project'> | string;
    organization_id?: UuidFilter<'project'> | string;
    created_at?: DateTimeFilter<'project'> | Date | string;
    updated_at?: DateTimeFilter<'project'> | Date | string;
    collaboration?: CollaborationListRelationFilter;
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type projectOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    start_date?: SortOrderInput | SortOrder;
    end_date?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    collaboration?: collaborationOrderByRelationAggregateInput;
    organization?: organizationOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type projectWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: projectWhereInput | projectWhereInput[];
      OR?: projectWhereInput[];
      NOT?: projectWhereInput | projectWhereInput[];
      name?: StringFilter<'project'> | string;
      description?: StringNullableFilter<'project'> | string | null;
      start_date?: DateTimeNullableFilter<'project'> | Date | string | null;
      end_date?: DateTimeNullableFilter<'project'> | Date | string | null;
      user_id?: UuidFilter<'project'> | string;
      organization_id?: UuidFilter<'project'> | string;
      created_at?: DateTimeFilter<'project'> | Date | string;
      updated_at?: DateTimeFilter<'project'> | Date | string;
      collaboration?: CollaborationListRelationFilter;
      organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type projectOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    start_date?: SortOrderInput | SortOrder;
    end_date?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: projectCountOrderByAggregateInput;
    _max?: projectMaxOrderByAggregateInput;
    _min?: projectMinOrderByAggregateInput;
  };

  export type projectScalarWhereWithAggregatesInput = {
    AND?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[];
    OR?: projectScalarWhereWithAggregatesInput[];
    NOT?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'project'> | string;
    name?: StringWithAggregatesFilter<'project'> | string;
    description?: StringNullableWithAggregatesFilter<'project'> | string | null;
    start_date?: DateTimeNullableWithAggregatesFilter<'project'> | Date | string | null;
    end_date?: DateTimeNullableWithAggregatesFilter<'project'> | Date | string | null;
    user_id?: UuidWithAggregatesFilter<'project'> | string;
    organization_id?: UuidWithAggregatesFilter<'project'> | string;
    created_at?: DateTimeWithAggregatesFilter<'project'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'project'> | Date | string;
  };

  export type publicationWhereInput = {
    AND?: publicationWhereInput | publicationWhereInput[];
    OR?: publicationWhereInput[];
    NOT?: publicationWhereInput | publicationWhereInput[];
    id?: UuidFilter<'publication'> | string;
    title?: StringFilter<'publication'> | string;
    publication_date?: DateTimeNullableFilter<'publication'> | Date | string | null;
    publisher?: StringFilter<'publication'> | string;
    user_id?: UuidFilter<'publication'> | string;
    research_id?: UuidFilter<'publication'> | string;
    created_at?: DateTimeFilter<'publication'> | Date | string;
    updated_at?: DateTimeFilter<'publication'> | Date | string;
    research?: XOR<ResearchRelationFilter, researchWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type publicationOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    publication_date?: SortOrderInput | SortOrder;
    publisher?: SortOrder;
    user_id?: SortOrder;
    research_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    research?: researchOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type publicationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: publicationWhereInput | publicationWhereInput[];
      OR?: publicationWhereInput[];
      NOT?: publicationWhereInput | publicationWhereInput[];
      title?: StringFilter<'publication'> | string;
      publication_date?: DateTimeNullableFilter<'publication'> | Date | string | null;
      publisher?: StringFilter<'publication'> | string;
      user_id?: UuidFilter<'publication'> | string;
      research_id?: UuidFilter<'publication'> | string;
      created_at?: DateTimeFilter<'publication'> | Date | string;
      updated_at?: DateTimeFilter<'publication'> | Date | string;
      research?: XOR<ResearchRelationFilter, researchWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type publicationOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    publication_date?: SortOrderInput | SortOrder;
    publisher?: SortOrder;
    user_id?: SortOrder;
    research_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: publicationCountOrderByAggregateInput;
    _max?: publicationMaxOrderByAggregateInput;
    _min?: publicationMinOrderByAggregateInput;
  };

  export type publicationScalarWhereWithAggregatesInput = {
    AND?: publicationScalarWhereWithAggregatesInput | publicationScalarWhereWithAggregatesInput[];
    OR?: publicationScalarWhereWithAggregatesInput[];
    NOT?: publicationScalarWhereWithAggregatesInput | publicationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'publication'> | string;
    title?: StringWithAggregatesFilter<'publication'> | string;
    publication_date?: DateTimeNullableWithAggregatesFilter<'publication'> | Date | string | null;
    publisher?: StringWithAggregatesFilter<'publication'> | string;
    user_id?: UuidWithAggregatesFilter<'publication'> | string;
    research_id?: UuidWithAggregatesFilter<'publication'> | string;
    created_at?: DateTimeWithAggregatesFilter<'publication'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'publication'> | Date | string;
  };

  export type researchWhereInput = {
    AND?: researchWhereInput | researchWhereInput[];
    OR?: researchWhereInput[];
    NOT?: researchWhereInput | researchWhereInput[];
    id?: UuidFilter<'research'> | string;
    title?: StringFilter<'research'> | string;
    abstract?: StringFilter<'research'> | string;
    publication_date?: DateTimeNullableFilter<'research'> | Date | string | null;
    user_id?: UuidFilter<'research'> | string;
    organization_id?: UuidFilter<'research'> | string;
    created_at?: DateTimeFilter<'research'> | Date | string;
    updated_at?: DateTimeFilter<'research'> | Date | string;
    publication?: PublicationListRelationFilter;
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type researchOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    abstract?: SortOrder;
    publication_date?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    publication?: publicationOrderByRelationAggregateInput;
    organization?: organizationOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type researchWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: researchWhereInput | researchWhereInput[];
      OR?: researchWhereInput[];
      NOT?: researchWhereInput | researchWhereInput[];
      title?: StringFilter<'research'> | string;
      abstract?: StringFilter<'research'> | string;
      publication_date?: DateTimeNullableFilter<'research'> | Date | string | null;
      user_id?: UuidFilter<'research'> | string;
      organization_id?: UuidFilter<'research'> | string;
      created_at?: DateTimeFilter<'research'> | Date | string;
      updated_at?: DateTimeFilter<'research'> | Date | string;
      publication?: PublicationListRelationFilter;
      organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type researchOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    abstract?: SortOrder;
    publication_date?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: researchCountOrderByAggregateInput;
    _max?: researchMaxOrderByAggregateInput;
    _min?: researchMinOrderByAggregateInput;
  };

  export type researchScalarWhereWithAggregatesInput = {
    AND?: researchScalarWhereWithAggregatesInput | researchScalarWhereWithAggregatesInput[];
    OR?: researchScalarWhereWithAggregatesInput[];
    NOT?: researchScalarWhereWithAggregatesInput | researchScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'research'> | string;
    title?: StringWithAggregatesFilter<'research'> | string;
    abstract?: StringWithAggregatesFilter<'research'> | string;
    publication_date?: DateTimeNullableWithAggregatesFilter<'research'> | Date | string | null;
    user_id?: UuidWithAggregatesFilter<'research'> | string;
    organization_id?: UuidWithAggregatesFilter<'research'> | string;
    created_at?: DateTimeWithAggregatesFilter<'research'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'research'> | Date | string;
  };

  export type research_interestWhereInput = {
    AND?: research_interestWhereInput | research_interestWhereInput[];
    OR?: research_interestWhereInput[];
    NOT?: research_interestWhereInput | research_interestWhereInput[];
    id?: UuidFilter<'research_interest'> | string;
    created_at?: DateTimeFilter<'research_interest'> | Date | string;
    updated_at?: DateTimeFilter<'research_interest'> | Date | string;
  };

  export type research_interestOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type research_interestWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: research_interestWhereInput | research_interestWhereInput[];
      OR?: research_interestWhereInput[];
      NOT?: research_interestWhereInput | research_interestWhereInput[];
      created_at?: DateTimeFilter<'research_interest'> | Date | string;
      updated_at?: DateTimeFilter<'research_interest'> | Date | string;
    },
    'id'
  >;

  export type research_interestOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: research_interestCountOrderByAggregateInput;
    _max?: research_interestMaxOrderByAggregateInput;
    _min?: research_interestMinOrderByAggregateInput;
  };

  export type research_interestScalarWhereWithAggregatesInput = {
    AND?: research_interestScalarWhereWithAggregatesInput | research_interestScalarWhereWithAggregatesInput[];
    OR?: research_interestScalarWhereWithAggregatesInput[];
    NOT?: research_interestScalarWhereWithAggregatesInput | research_interestScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'research_interest'> | string;
    created_at?: DateTimeWithAggregatesFilter<'research_interest'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'research_interest'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    collaboration?: CollaborationListRelationFilter;
    organization?: OrganizationListRelationFilter;
    project?: ProjectListRelationFilter;
    publication?: PublicationListRelationFilter;
    research?: ResearchListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    collaboration?: collaborationOrderByRelationAggregateInput;
    organization?: organizationOrderByRelationAggregateInput;
    project?: projectOrderByRelationAggregateInput;
    publication?: publicationOrderByRelationAggregateInput;
    research?: researchOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      collaboration?: CollaborationListRelationFilter;
      organization?: OrganizationListRelationFilter;
      project?: ProjectListRelationFilter;
      publication?: PublicationListRelationFilter;
      research?: ResearchListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type workshopWhereInput = {
    AND?: workshopWhereInput | workshopWhereInput[];
    OR?: workshopWhereInput[];
    NOT?: workshopWhereInput | workshopWhereInput[];
    id?: UuidFilter<'workshop'> | string;
    created_at?: DateTimeFilter<'workshop'> | Date | string;
    updated_at?: DateTimeFilter<'workshop'> | Date | string;
  };

  export type workshopOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type workshopWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: workshopWhereInput | workshopWhereInput[];
      OR?: workshopWhereInput[];
      NOT?: workshopWhereInput | workshopWhereInput[];
      created_at?: DateTimeFilter<'workshop'> | Date | string;
      updated_at?: DateTimeFilter<'workshop'> | Date | string;
    },
    'id'
  >;

  export type workshopOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: workshopCountOrderByAggregateInput;
    _max?: workshopMaxOrderByAggregateInput;
    _min?: workshopMinOrderByAggregateInput;
  };

  export type workshopScalarWhereWithAggregatesInput = {
    AND?: workshopScalarWhereWithAggregatesInput | workshopScalarWhereWithAggregatesInput[];
    OR?: workshopScalarWhereWithAggregatesInput[];
    NOT?: workshopScalarWhereWithAggregatesInput | workshopScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'workshop'> | string;
    created_at?: DateTimeWithAggregatesFilter<'workshop'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'workshop'> | Date | string;
  };

  export type citationCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type citationUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type citationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type citationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type citationCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type citationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type citationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type collaborationCreateInput = {
    id?: string;
    role?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutCollaborationInput;
    project: projectCreateNestedOneWithoutCollaborationInput;
  };

  export type collaborationUncheckedCreateInput = {
    id?: string;
    collaborator_id: string;
    project_id: string;
    role?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type collaborationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutCollaborationNestedInput;
    project?: projectUpdateOneRequiredWithoutCollaborationNestedInput;
  };

  export type collaborationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    collaborator_id?: StringFieldUpdateOperationsInput | string;
    project_id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type collaborationCreateManyInput = {
    id?: string;
    collaborator_id: string;
    project_id: string;
    role?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type collaborationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type collaborationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    collaborator_id?: StringFieldUpdateOperationsInput | string;
    project_id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type conferenceCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type conferenceUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type conferenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type conferenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type conferenceCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type conferenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type conferenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutOrganizationInput;
    project?: projectCreateNestedManyWithoutOrganizationInput;
    research?: researchCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    project?: projectUncheckedCreateNestedManyWithoutOrganizationInput;
    research?: researchUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
    project?: projectUpdateManyWithoutOrganizationNestedInput;
    research?: researchUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    project?: projectUncheckedUpdateManyWithoutOrganizationNestedInput;
    research?: researchUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type organizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type organizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type patentCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type patentUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type patentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type patentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type patentCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type patentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type patentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type projectCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collaboration?: collaborationCreateNestedManyWithoutProjectInput;
    organization: organizationCreateNestedOneWithoutProjectInput;
    user: userCreateNestedOneWithoutProjectInput;
  };

  export type projectUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    collaboration?: collaborationUncheckedCreateNestedManyWithoutProjectInput;
  };

  export type projectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collaboration?: collaborationUpdateManyWithoutProjectNestedInput;
    organization?: organizationUpdateOneRequiredWithoutProjectNestedInput;
    user?: userUpdateOneRequiredWithoutProjectNestedInput;
  };

  export type projectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collaboration?: collaborationUncheckedUpdateManyWithoutProjectNestedInput;
  };

  export type projectCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type projectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type projectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type publicationCreateInput = {
    id?: string;
    title: string;
    publication_date?: Date | string | null;
    publisher: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    research: researchCreateNestedOneWithoutPublicationInput;
    user: userCreateNestedOneWithoutPublicationInput;
  };

  export type publicationUncheckedCreateInput = {
    id?: string;
    title: string;
    publication_date?: Date | string | null;
    publisher: string;
    user_id: string;
    research_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type publicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publisher?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    research?: researchUpdateOneRequiredWithoutPublicationNestedInput;
    user?: userUpdateOneRequiredWithoutPublicationNestedInput;
  };

  export type publicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publisher?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    research_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type publicationCreateManyInput = {
    id?: string;
    title: string;
    publication_date?: Date | string | null;
    publisher: string;
    user_id: string;
    research_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type publicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publisher?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type publicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publisher?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    research_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type researchCreateInput = {
    id?: string;
    title: string;
    abstract: string;
    publication_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    publication?: publicationCreateNestedManyWithoutResearchInput;
    organization: organizationCreateNestedOneWithoutResearchInput;
    user: userCreateNestedOneWithoutResearchInput;
  };

  export type researchUncheckedCreateInput = {
    id?: string;
    title: string;
    abstract: string;
    publication_date?: Date | string | null;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    publication?: publicationUncheckedCreateNestedManyWithoutResearchInput;
  };

  export type researchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: StringFieldUpdateOperationsInput | string;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    publication?: publicationUpdateManyWithoutResearchNestedInput;
    organization?: organizationUpdateOneRequiredWithoutResearchNestedInput;
    user?: userUpdateOneRequiredWithoutResearchNestedInput;
  };

  export type researchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: StringFieldUpdateOperationsInput | string;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    publication?: publicationUncheckedUpdateManyWithoutResearchNestedInput;
  };

  export type researchCreateManyInput = {
    id?: string;
    title: string;
    abstract: string;
    publication_date?: Date | string | null;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type researchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: StringFieldUpdateOperationsInput | string;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type researchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: StringFieldUpdateOperationsInput | string;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type research_interestCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type research_interestUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type research_interestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type research_interestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type research_interestCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type research_interestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type research_interestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    collaboration?: collaborationCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    project?: projectCreateNestedManyWithoutUserInput;
    publication?: publicationCreateNestedManyWithoutUserInput;
    research?: researchCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    collaboration?: collaborationUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    project?: projectUncheckedCreateNestedManyWithoutUserInput;
    publication?: publicationUncheckedCreateNestedManyWithoutUserInput;
    research?: researchUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collaboration?: collaborationUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    project?: projectUpdateManyWithoutUserNestedInput;
    publication?: publicationUpdateManyWithoutUserNestedInput;
    research?: researchUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collaboration?: collaborationUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    project?: projectUncheckedUpdateManyWithoutUserNestedInput;
    publication?: publicationUncheckedUpdateManyWithoutUserNestedInput;
    research?: researchUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type workshopCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type workshopUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type workshopUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type workshopUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type workshopCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type workshopUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type workshopUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type citationCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type citationMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type citationMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type ProjectRelationFilter = {
    is?: projectWhereInput;
    isNot?: projectWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type collaborationCountOrderByAggregateInput = {
    id?: SortOrder;
    collaborator_id?: SortOrder;
    project_id?: SortOrder;
    role?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type collaborationMaxOrderByAggregateInput = {
    id?: SortOrder;
    collaborator_id?: SortOrder;
    project_id?: SortOrder;
    role?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type collaborationMinOrderByAggregateInput = {
    id?: SortOrder;
    collaborator_id?: SortOrder;
    project_id?: SortOrder;
    role?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type conferenceCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type conferenceMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type conferenceMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type ProjectListRelationFilter = {
    every?: projectWhereInput;
    some?: projectWhereInput;
    none?: projectWhereInput;
  };

  export type ResearchListRelationFilter = {
    every?: researchWhereInput;
    some?: researchWhereInput;
    none?: researchWhereInput;
  };

  export type projectOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type researchOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type organizationCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type patentCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type patentMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type patentMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type CollaborationListRelationFilter = {
    every?: collaborationWhereInput;
    some?: collaborationWhereInput;
    none?: collaborationWhereInput;
  };

  export type OrganizationRelationFilter = {
    is?: organizationWhereInput;
    isNot?: organizationWhereInput;
  };

  export type collaborationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type projectCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type projectMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type projectMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ResearchRelationFilter = {
    is?: researchWhereInput;
    isNot?: researchWhereInput;
  };

  export type publicationCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    publication_date?: SortOrder;
    publisher?: SortOrder;
    user_id?: SortOrder;
    research_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type publicationMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    publication_date?: SortOrder;
    publisher?: SortOrder;
    user_id?: SortOrder;
    research_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type publicationMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    publication_date?: SortOrder;
    publisher?: SortOrder;
    user_id?: SortOrder;
    research_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type PublicationListRelationFilter = {
    every?: publicationWhereInput;
    some?: publicationWhereInput;
    none?: publicationWhereInput;
  };

  export type publicationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type researchCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    abstract?: SortOrder;
    publication_date?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type researchMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    abstract?: SortOrder;
    publication_date?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type researchMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    abstract?: SortOrder;
    publication_date?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type research_interestCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type research_interestMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type research_interestMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type OrganizationListRelationFilter = {
    every?: organizationWhereInput;
    some?: organizationWhereInput;
    none?: organizationWhereInput;
  };

  export type organizationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type workshopCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type workshopMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type workshopMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userCreateNestedOneWithoutCollaborationInput = {
    create?: XOR<userCreateWithoutCollaborationInput, userUncheckedCreateWithoutCollaborationInput>;
    connectOrCreate?: userCreateOrConnectWithoutCollaborationInput;
    connect?: userWhereUniqueInput;
  };

  export type projectCreateNestedOneWithoutCollaborationInput = {
    create?: XOR<projectCreateWithoutCollaborationInput, projectUncheckedCreateWithoutCollaborationInput>;
    connectOrCreate?: projectCreateOrConnectWithoutCollaborationInput;
    connect?: projectWhereUniqueInput;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type userUpdateOneRequiredWithoutCollaborationNestedInput = {
    create?: XOR<userCreateWithoutCollaborationInput, userUncheckedCreateWithoutCollaborationInput>;
    connectOrCreate?: userCreateOrConnectWithoutCollaborationInput;
    upsert?: userUpsertWithoutCollaborationInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCollaborationInput, userUpdateWithoutCollaborationInput>,
      userUncheckedUpdateWithoutCollaborationInput
    >;
  };

  export type projectUpdateOneRequiredWithoutCollaborationNestedInput = {
    create?: XOR<projectCreateWithoutCollaborationInput, projectUncheckedCreateWithoutCollaborationInput>;
    connectOrCreate?: projectCreateOrConnectWithoutCollaborationInput;
    upsert?: projectUpsertWithoutCollaborationInput;
    connect?: projectWhereUniqueInput;
    update?: XOR<
      XOR<projectUpdateToOneWithWhereWithoutCollaborationInput, projectUpdateWithoutCollaborationInput>,
      projectUncheckedUpdateWithoutCollaborationInput
    >;
  };

  export type userCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput;
    connect?: userWhereUniqueInput;
  };

  export type projectCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<projectCreateWithoutOrganizationInput, projectUncheckedCreateWithoutOrganizationInput>
      | projectCreateWithoutOrganizationInput[]
      | projectUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: projectCreateOrConnectWithoutOrganizationInput | projectCreateOrConnectWithoutOrganizationInput[];
    createMany?: projectCreateManyOrganizationInputEnvelope;
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
  };

  export type researchCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<researchCreateWithoutOrganizationInput, researchUncheckedCreateWithoutOrganizationInput>
      | researchCreateWithoutOrganizationInput[]
      | researchUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | researchCreateOrConnectWithoutOrganizationInput
      | researchCreateOrConnectWithoutOrganizationInput[];
    createMany?: researchCreateManyOrganizationInputEnvelope;
    connect?: researchWhereUniqueInput | researchWhereUniqueInput[];
  };

  export type projectUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<projectCreateWithoutOrganizationInput, projectUncheckedCreateWithoutOrganizationInput>
      | projectCreateWithoutOrganizationInput[]
      | projectUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: projectCreateOrConnectWithoutOrganizationInput | projectCreateOrConnectWithoutOrganizationInput[];
    createMany?: projectCreateManyOrganizationInputEnvelope;
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
  };

  export type researchUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<researchCreateWithoutOrganizationInput, researchUncheckedCreateWithoutOrganizationInput>
      | researchCreateWithoutOrganizationInput[]
      | researchUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | researchCreateOrConnectWithoutOrganizationInput
      | researchCreateOrConnectWithoutOrganizationInput[];
    createMany?: researchCreateManyOrganizationInputEnvelope;
    connect?: researchWhereUniqueInput | researchWhereUniqueInput[];
  };

  export type userUpdateOneRequiredWithoutOrganizationNestedInput = {
    create?: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput;
    upsert?: userUpsertWithoutOrganizationInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutOrganizationInput, userUpdateWithoutOrganizationInput>,
      userUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type projectUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<projectCreateWithoutOrganizationInput, projectUncheckedCreateWithoutOrganizationInput>
      | projectCreateWithoutOrganizationInput[]
      | projectUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: projectCreateOrConnectWithoutOrganizationInput | projectCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | projectUpsertWithWhereUniqueWithoutOrganizationInput
      | projectUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: projectCreateManyOrganizationInputEnvelope;
    set?: projectWhereUniqueInput | projectWhereUniqueInput[];
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[];
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    update?:
      | projectUpdateWithWhereUniqueWithoutOrganizationInput
      | projectUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | projectUpdateManyWithWhereWithoutOrganizationInput
      | projectUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[];
  };

  export type researchUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<researchCreateWithoutOrganizationInput, researchUncheckedCreateWithoutOrganizationInput>
      | researchCreateWithoutOrganizationInput[]
      | researchUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | researchCreateOrConnectWithoutOrganizationInput
      | researchCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | researchUpsertWithWhereUniqueWithoutOrganizationInput
      | researchUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: researchCreateManyOrganizationInputEnvelope;
    set?: researchWhereUniqueInput | researchWhereUniqueInput[];
    disconnect?: researchWhereUniqueInput | researchWhereUniqueInput[];
    delete?: researchWhereUniqueInput | researchWhereUniqueInput[];
    connect?: researchWhereUniqueInput | researchWhereUniqueInput[];
    update?:
      | researchUpdateWithWhereUniqueWithoutOrganizationInput
      | researchUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | researchUpdateManyWithWhereWithoutOrganizationInput
      | researchUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: researchScalarWhereInput | researchScalarWhereInput[];
  };

  export type projectUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<projectCreateWithoutOrganizationInput, projectUncheckedCreateWithoutOrganizationInput>
      | projectCreateWithoutOrganizationInput[]
      | projectUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: projectCreateOrConnectWithoutOrganizationInput | projectCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | projectUpsertWithWhereUniqueWithoutOrganizationInput
      | projectUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: projectCreateManyOrganizationInputEnvelope;
    set?: projectWhereUniqueInput | projectWhereUniqueInput[];
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[];
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    update?:
      | projectUpdateWithWhereUniqueWithoutOrganizationInput
      | projectUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | projectUpdateManyWithWhereWithoutOrganizationInput
      | projectUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[];
  };

  export type researchUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<researchCreateWithoutOrganizationInput, researchUncheckedCreateWithoutOrganizationInput>
      | researchCreateWithoutOrganizationInput[]
      | researchUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | researchCreateOrConnectWithoutOrganizationInput
      | researchCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | researchUpsertWithWhereUniqueWithoutOrganizationInput
      | researchUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: researchCreateManyOrganizationInputEnvelope;
    set?: researchWhereUniqueInput | researchWhereUniqueInput[];
    disconnect?: researchWhereUniqueInput | researchWhereUniqueInput[];
    delete?: researchWhereUniqueInput | researchWhereUniqueInput[];
    connect?: researchWhereUniqueInput | researchWhereUniqueInput[];
    update?:
      | researchUpdateWithWhereUniqueWithoutOrganizationInput
      | researchUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | researchUpdateManyWithWhereWithoutOrganizationInput
      | researchUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: researchScalarWhereInput | researchScalarWhereInput[];
  };

  export type collaborationCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<collaborationCreateWithoutProjectInput, collaborationUncheckedCreateWithoutProjectInput>
      | collaborationCreateWithoutProjectInput[]
      | collaborationUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | collaborationCreateOrConnectWithoutProjectInput
      | collaborationCreateOrConnectWithoutProjectInput[];
    createMany?: collaborationCreateManyProjectInputEnvelope;
    connect?: collaborationWhereUniqueInput | collaborationWhereUniqueInput[];
  };

  export type organizationCreateNestedOneWithoutProjectInput = {
    create?: XOR<organizationCreateWithoutProjectInput, organizationUncheckedCreateWithoutProjectInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutProjectInput;
    connect?: organizationWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutProjectInput = {
    create?: XOR<userCreateWithoutProjectInput, userUncheckedCreateWithoutProjectInput>;
    connectOrCreate?: userCreateOrConnectWithoutProjectInput;
    connect?: userWhereUniqueInput;
  };

  export type collaborationUncheckedCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<collaborationCreateWithoutProjectInput, collaborationUncheckedCreateWithoutProjectInput>
      | collaborationCreateWithoutProjectInput[]
      | collaborationUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | collaborationCreateOrConnectWithoutProjectInput
      | collaborationCreateOrConnectWithoutProjectInput[];
    createMany?: collaborationCreateManyProjectInputEnvelope;
    connect?: collaborationWhereUniqueInput | collaborationWhereUniqueInput[];
  };

  export type collaborationUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<collaborationCreateWithoutProjectInput, collaborationUncheckedCreateWithoutProjectInput>
      | collaborationCreateWithoutProjectInput[]
      | collaborationUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | collaborationCreateOrConnectWithoutProjectInput
      | collaborationCreateOrConnectWithoutProjectInput[];
    upsert?:
      | collaborationUpsertWithWhereUniqueWithoutProjectInput
      | collaborationUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: collaborationCreateManyProjectInputEnvelope;
    set?: collaborationWhereUniqueInput | collaborationWhereUniqueInput[];
    disconnect?: collaborationWhereUniqueInput | collaborationWhereUniqueInput[];
    delete?: collaborationWhereUniqueInput | collaborationWhereUniqueInput[];
    connect?: collaborationWhereUniqueInput | collaborationWhereUniqueInput[];
    update?:
      | collaborationUpdateWithWhereUniqueWithoutProjectInput
      | collaborationUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?:
      | collaborationUpdateManyWithWhereWithoutProjectInput
      | collaborationUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: collaborationScalarWhereInput | collaborationScalarWhereInput[];
  };

  export type organizationUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<organizationCreateWithoutProjectInput, organizationUncheckedCreateWithoutProjectInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutProjectInput;
    upsert?: organizationUpsertWithoutProjectInput;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutProjectInput, organizationUpdateWithoutProjectInput>,
      organizationUncheckedUpdateWithoutProjectInput
    >;
  };

  export type userUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<userCreateWithoutProjectInput, userUncheckedCreateWithoutProjectInput>;
    connectOrCreate?: userCreateOrConnectWithoutProjectInput;
    upsert?: userUpsertWithoutProjectInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutProjectInput, userUpdateWithoutProjectInput>,
      userUncheckedUpdateWithoutProjectInput
    >;
  };

  export type collaborationUncheckedUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<collaborationCreateWithoutProjectInput, collaborationUncheckedCreateWithoutProjectInput>
      | collaborationCreateWithoutProjectInput[]
      | collaborationUncheckedCreateWithoutProjectInput[];
    connectOrCreate?:
      | collaborationCreateOrConnectWithoutProjectInput
      | collaborationCreateOrConnectWithoutProjectInput[];
    upsert?:
      | collaborationUpsertWithWhereUniqueWithoutProjectInput
      | collaborationUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: collaborationCreateManyProjectInputEnvelope;
    set?: collaborationWhereUniqueInput | collaborationWhereUniqueInput[];
    disconnect?: collaborationWhereUniqueInput | collaborationWhereUniqueInput[];
    delete?: collaborationWhereUniqueInput | collaborationWhereUniqueInput[];
    connect?: collaborationWhereUniqueInput | collaborationWhereUniqueInput[];
    update?:
      | collaborationUpdateWithWhereUniqueWithoutProjectInput
      | collaborationUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?:
      | collaborationUpdateManyWithWhereWithoutProjectInput
      | collaborationUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: collaborationScalarWhereInput | collaborationScalarWhereInput[];
  };

  export type researchCreateNestedOneWithoutPublicationInput = {
    create?: XOR<researchCreateWithoutPublicationInput, researchUncheckedCreateWithoutPublicationInput>;
    connectOrCreate?: researchCreateOrConnectWithoutPublicationInput;
    connect?: researchWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutPublicationInput = {
    create?: XOR<userCreateWithoutPublicationInput, userUncheckedCreateWithoutPublicationInput>;
    connectOrCreate?: userCreateOrConnectWithoutPublicationInput;
    connect?: userWhereUniqueInput;
  };

  export type researchUpdateOneRequiredWithoutPublicationNestedInput = {
    create?: XOR<researchCreateWithoutPublicationInput, researchUncheckedCreateWithoutPublicationInput>;
    connectOrCreate?: researchCreateOrConnectWithoutPublicationInput;
    upsert?: researchUpsertWithoutPublicationInput;
    connect?: researchWhereUniqueInput;
    update?: XOR<
      XOR<researchUpdateToOneWithWhereWithoutPublicationInput, researchUpdateWithoutPublicationInput>,
      researchUncheckedUpdateWithoutPublicationInput
    >;
  };

  export type userUpdateOneRequiredWithoutPublicationNestedInput = {
    create?: XOR<userCreateWithoutPublicationInput, userUncheckedCreateWithoutPublicationInput>;
    connectOrCreate?: userCreateOrConnectWithoutPublicationInput;
    upsert?: userUpsertWithoutPublicationInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutPublicationInput, userUpdateWithoutPublicationInput>,
      userUncheckedUpdateWithoutPublicationInput
    >;
  };

  export type publicationCreateNestedManyWithoutResearchInput = {
    create?:
      | XOR<publicationCreateWithoutResearchInput, publicationUncheckedCreateWithoutResearchInput>
      | publicationCreateWithoutResearchInput[]
      | publicationUncheckedCreateWithoutResearchInput[];
    connectOrCreate?: publicationCreateOrConnectWithoutResearchInput | publicationCreateOrConnectWithoutResearchInput[];
    createMany?: publicationCreateManyResearchInputEnvelope;
    connect?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
  };

  export type organizationCreateNestedOneWithoutResearchInput = {
    create?: XOR<organizationCreateWithoutResearchInput, organizationUncheckedCreateWithoutResearchInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutResearchInput;
    connect?: organizationWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutResearchInput = {
    create?: XOR<userCreateWithoutResearchInput, userUncheckedCreateWithoutResearchInput>;
    connectOrCreate?: userCreateOrConnectWithoutResearchInput;
    connect?: userWhereUniqueInput;
  };

  export type publicationUncheckedCreateNestedManyWithoutResearchInput = {
    create?:
      | XOR<publicationCreateWithoutResearchInput, publicationUncheckedCreateWithoutResearchInput>
      | publicationCreateWithoutResearchInput[]
      | publicationUncheckedCreateWithoutResearchInput[];
    connectOrCreate?: publicationCreateOrConnectWithoutResearchInput | publicationCreateOrConnectWithoutResearchInput[];
    createMany?: publicationCreateManyResearchInputEnvelope;
    connect?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
  };

  export type publicationUpdateManyWithoutResearchNestedInput = {
    create?:
      | XOR<publicationCreateWithoutResearchInput, publicationUncheckedCreateWithoutResearchInput>
      | publicationCreateWithoutResearchInput[]
      | publicationUncheckedCreateWithoutResearchInput[];
    connectOrCreate?: publicationCreateOrConnectWithoutResearchInput | publicationCreateOrConnectWithoutResearchInput[];
    upsert?:
      | publicationUpsertWithWhereUniqueWithoutResearchInput
      | publicationUpsertWithWhereUniqueWithoutResearchInput[];
    createMany?: publicationCreateManyResearchInputEnvelope;
    set?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    disconnect?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    delete?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    connect?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    update?:
      | publicationUpdateWithWhereUniqueWithoutResearchInput
      | publicationUpdateWithWhereUniqueWithoutResearchInput[];
    updateMany?:
      | publicationUpdateManyWithWhereWithoutResearchInput
      | publicationUpdateManyWithWhereWithoutResearchInput[];
    deleteMany?: publicationScalarWhereInput | publicationScalarWhereInput[];
  };

  export type organizationUpdateOneRequiredWithoutResearchNestedInput = {
    create?: XOR<organizationCreateWithoutResearchInput, organizationUncheckedCreateWithoutResearchInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutResearchInput;
    upsert?: organizationUpsertWithoutResearchInput;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutResearchInput, organizationUpdateWithoutResearchInput>,
      organizationUncheckedUpdateWithoutResearchInput
    >;
  };

  export type userUpdateOneRequiredWithoutResearchNestedInput = {
    create?: XOR<userCreateWithoutResearchInput, userUncheckedCreateWithoutResearchInput>;
    connectOrCreate?: userCreateOrConnectWithoutResearchInput;
    upsert?: userUpsertWithoutResearchInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutResearchInput, userUpdateWithoutResearchInput>,
      userUncheckedUpdateWithoutResearchInput
    >;
  };

  export type publicationUncheckedUpdateManyWithoutResearchNestedInput = {
    create?:
      | XOR<publicationCreateWithoutResearchInput, publicationUncheckedCreateWithoutResearchInput>
      | publicationCreateWithoutResearchInput[]
      | publicationUncheckedCreateWithoutResearchInput[];
    connectOrCreate?: publicationCreateOrConnectWithoutResearchInput | publicationCreateOrConnectWithoutResearchInput[];
    upsert?:
      | publicationUpsertWithWhereUniqueWithoutResearchInput
      | publicationUpsertWithWhereUniqueWithoutResearchInput[];
    createMany?: publicationCreateManyResearchInputEnvelope;
    set?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    disconnect?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    delete?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    connect?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    update?:
      | publicationUpdateWithWhereUniqueWithoutResearchInput
      | publicationUpdateWithWhereUniqueWithoutResearchInput[];
    updateMany?:
      | publicationUpdateManyWithWhereWithoutResearchInput
      | publicationUpdateManyWithWhereWithoutResearchInput[];
    deleteMany?: publicationScalarWhereInput | publicationScalarWhereInput[];
  };

  export type collaborationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<collaborationCreateWithoutUserInput, collaborationUncheckedCreateWithoutUserInput>
      | collaborationCreateWithoutUserInput[]
      | collaborationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: collaborationCreateOrConnectWithoutUserInput | collaborationCreateOrConnectWithoutUserInput[];
    createMany?: collaborationCreateManyUserInputEnvelope;
    connect?: collaborationWhereUniqueInput | collaborationWhereUniqueInput[];
  };

  export type organizationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
  };

  export type projectCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput>
      | projectCreateWithoutUserInput[]
      | projectUncheckedCreateWithoutUserInput[];
    connectOrCreate?: projectCreateOrConnectWithoutUserInput | projectCreateOrConnectWithoutUserInput[];
    createMany?: projectCreateManyUserInputEnvelope;
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
  };

  export type publicationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<publicationCreateWithoutUserInput, publicationUncheckedCreateWithoutUserInput>
      | publicationCreateWithoutUserInput[]
      | publicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: publicationCreateOrConnectWithoutUserInput | publicationCreateOrConnectWithoutUserInput[];
    createMany?: publicationCreateManyUserInputEnvelope;
    connect?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
  };

  export type researchCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<researchCreateWithoutUserInput, researchUncheckedCreateWithoutUserInput>
      | researchCreateWithoutUserInput[]
      | researchUncheckedCreateWithoutUserInput[];
    connectOrCreate?: researchCreateOrConnectWithoutUserInput | researchCreateOrConnectWithoutUserInput[];
    createMany?: researchCreateManyUserInputEnvelope;
    connect?: researchWhereUniqueInput | researchWhereUniqueInput[];
  };

  export type collaborationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<collaborationCreateWithoutUserInput, collaborationUncheckedCreateWithoutUserInput>
      | collaborationCreateWithoutUserInput[]
      | collaborationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: collaborationCreateOrConnectWithoutUserInput | collaborationCreateOrConnectWithoutUserInput[];
    createMany?: collaborationCreateManyUserInputEnvelope;
    connect?: collaborationWhereUniqueInput | collaborationWhereUniqueInput[];
  };

  export type organizationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
  };

  export type projectUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput>
      | projectCreateWithoutUserInput[]
      | projectUncheckedCreateWithoutUserInput[];
    connectOrCreate?: projectCreateOrConnectWithoutUserInput | projectCreateOrConnectWithoutUserInput[];
    createMany?: projectCreateManyUserInputEnvelope;
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
  };

  export type publicationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<publicationCreateWithoutUserInput, publicationUncheckedCreateWithoutUserInput>
      | publicationCreateWithoutUserInput[]
      | publicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: publicationCreateOrConnectWithoutUserInput | publicationCreateOrConnectWithoutUserInput[];
    createMany?: publicationCreateManyUserInputEnvelope;
    connect?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
  };

  export type researchUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<researchCreateWithoutUserInput, researchUncheckedCreateWithoutUserInput>
      | researchCreateWithoutUserInput[]
      | researchUncheckedCreateWithoutUserInput[];
    connectOrCreate?: researchCreateOrConnectWithoutUserInput | researchCreateOrConnectWithoutUserInput[];
    createMany?: researchCreateManyUserInputEnvelope;
    connect?: researchWhereUniqueInput | researchWhereUniqueInput[];
  };

  export type collaborationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<collaborationCreateWithoutUserInput, collaborationUncheckedCreateWithoutUserInput>
      | collaborationCreateWithoutUserInput[]
      | collaborationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: collaborationCreateOrConnectWithoutUserInput | collaborationCreateOrConnectWithoutUserInput[];
    upsert?: collaborationUpsertWithWhereUniqueWithoutUserInput | collaborationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: collaborationCreateManyUserInputEnvelope;
    set?: collaborationWhereUniqueInput | collaborationWhereUniqueInput[];
    disconnect?: collaborationWhereUniqueInput | collaborationWhereUniqueInput[];
    delete?: collaborationWhereUniqueInput | collaborationWhereUniqueInput[];
    connect?: collaborationWhereUniqueInput | collaborationWhereUniqueInput[];
    update?: collaborationUpdateWithWhereUniqueWithoutUserInput | collaborationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: collaborationUpdateManyWithWhereWithoutUserInput | collaborationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: collaborationScalarWhereInput | collaborationScalarWhereInput[];
  };

  export type organizationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    upsert?: organizationUpsertWithWhereUniqueWithoutUserInput | organizationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    update?: organizationUpdateWithWhereUniqueWithoutUserInput | organizationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: organizationUpdateManyWithWhereWithoutUserInput | organizationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[];
  };

  export type projectUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput>
      | projectCreateWithoutUserInput[]
      | projectUncheckedCreateWithoutUserInput[];
    connectOrCreate?: projectCreateOrConnectWithoutUserInput | projectCreateOrConnectWithoutUserInput[];
    upsert?: projectUpsertWithWhereUniqueWithoutUserInput | projectUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: projectCreateManyUserInputEnvelope;
    set?: projectWhereUniqueInput | projectWhereUniqueInput[];
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[];
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    update?: projectUpdateWithWhereUniqueWithoutUserInput | projectUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: projectUpdateManyWithWhereWithoutUserInput | projectUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[];
  };

  export type publicationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<publicationCreateWithoutUserInput, publicationUncheckedCreateWithoutUserInput>
      | publicationCreateWithoutUserInput[]
      | publicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: publicationCreateOrConnectWithoutUserInput | publicationCreateOrConnectWithoutUserInput[];
    upsert?: publicationUpsertWithWhereUniqueWithoutUserInput | publicationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: publicationCreateManyUserInputEnvelope;
    set?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    disconnect?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    delete?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    connect?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    update?: publicationUpdateWithWhereUniqueWithoutUserInput | publicationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: publicationUpdateManyWithWhereWithoutUserInput | publicationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: publicationScalarWhereInput | publicationScalarWhereInput[];
  };

  export type researchUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<researchCreateWithoutUserInput, researchUncheckedCreateWithoutUserInput>
      | researchCreateWithoutUserInput[]
      | researchUncheckedCreateWithoutUserInput[];
    connectOrCreate?: researchCreateOrConnectWithoutUserInput | researchCreateOrConnectWithoutUserInput[];
    upsert?: researchUpsertWithWhereUniqueWithoutUserInput | researchUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: researchCreateManyUserInputEnvelope;
    set?: researchWhereUniqueInput | researchWhereUniqueInput[];
    disconnect?: researchWhereUniqueInput | researchWhereUniqueInput[];
    delete?: researchWhereUniqueInput | researchWhereUniqueInput[];
    connect?: researchWhereUniqueInput | researchWhereUniqueInput[];
    update?: researchUpdateWithWhereUniqueWithoutUserInput | researchUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: researchUpdateManyWithWhereWithoutUserInput | researchUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: researchScalarWhereInput | researchScalarWhereInput[];
  };

  export type collaborationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<collaborationCreateWithoutUserInput, collaborationUncheckedCreateWithoutUserInput>
      | collaborationCreateWithoutUserInput[]
      | collaborationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: collaborationCreateOrConnectWithoutUserInput | collaborationCreateOrConnectWithoutUserInput[];
    upsert?: collaborationUpsertWithWhereUniqueWithoutUserInput | collaborationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: collaborationCreateManyUserInputEnvelope;
    set?: collaborationWhereUniqueInput | collaborationWhereUniqueInput[];
    disconnect?: collaborationWhereUniqueInput | collaborationWhereUniqueInput[];
    delete?: collaborationWhereUniqueInput | collaborationWhereUniqueInput[];
    connect?: collaborationWhereUniqueInput | collaborationWhereUniqueInput[];
    update?: collaborationUpdateWithWhereUniqueWithoutUserInput | collaborationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: collaborationUpdateManyWithWhereWithoutUserInput | collaborationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: collaborationScalarWhereInput | collaborationScalarWhereInput[];
  };

  export type organizationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    upsert?: organizationUpsertWithWhereUniqueWithoutUserInput | organizationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    update?: organizationUpdateWithWhereUniqueWithoutUserInput | organizationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: organizationUpdateManyWithWhereWithoutUserInput | organizationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[];
  };

  export type projectUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput>
      | projectCreateWithoutUserInput[]
      | projectUncheckedCreateWithoutUserInput[];
    connectOrCreate?: projectCreateOrConnectWithoutUserInput | projectCreateOrConnectWithoutUserInput[];
    upsert?: projectUpsertWithWhereUniqueWithoutUserInput | projectUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: projectCreateManyUserInputEnvelope;
    set?: projectWhereUniqueInput | projectWhereUniqueInput[];
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[];
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[];
    update?: projectUpdateWithWhereUniqueWithoutUserInput | projectUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: projectUpdateManyWithWhereWithoutUserInput | projectUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[];
  };

  export type publicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<publicationCreateWithoutUserInput, publicationUncheckedCreateWithoutUserInput>
      | publicationCreateWithoutUserInput[]
      | publicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: publicationCreateOrConnectWithoutUserInput | publicationCreateOrConnectWithoutUserInput[];
    upsert?: publicationUpsertWithWhereUniqueWithoutUserInput | publicationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: publicationCreateManyUserInputEnvelope;
    set?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    disconnect?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    delete?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    connect?: publicationWhereUniqueInput | publicationWhereUniqueInput[];
    update?: publicationUpdateWithWhereUniqueWithoutUserInput | publicationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: publicationUpdateManyWithWhereWithoutUserInput | publicationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: publicationScalarWhereInput | publicationScalarWhereInput[];
  };

  export type researchUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<researchCreateWithoutUserInput, researchUncheckedCreateWithoutUserInput>
      | researchCreateWithoutUserInput[]
      | researchUncheckedCreateWithoutUserInput[];
    connectOrCreate?: researchCreateOrConnectWithoutUserInput | researchCreateOrConnectWithoutUserInput[];
    upsert?: researchUpsertWithWhereUniqueWithoutUserInput | researchUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: researchCreateManyUserInputEnvelope;
    set?: researchWhereUniqueInput | researchWhereUniqueInput[];
    disconnect?: researchWhereUniqueInput | researchWhereUniqueInput[];
    delete?: researchWhereUniqueInput | researchWhereUniqueInput[];
    connect?: researchWhereUniqueInput | researchWhereUniqueInput[];
    update?: researchUpdateWithWhereUniqueWithoutUserInput | researchUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: researchUpdateManyWithWhereWithoutUserInput | researchUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: researchScalarWhereInput | researchScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type userCreateWithoutCollaborationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization?: organizationCreateNestedManyWithoutUserInput;
    project?: projectCreateNestedManyWithoutUserInput;
    publication?: publicationCreateNestedManyWithoutUserInput;
    research?: researchCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCollaborationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    project?: projectUncheckedCreateNestedManyWithoutUserInput;
    publication?: publicationUncheckedCreateNestedManyWithoutUserInput;
    research?: researchUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCollaborationInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCollaborationInput, userUncheckedCreateWithoutCollaborationInput>;
  };

  export type projectCreateWithoutCollaborationInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutProjectInput;
    user: userCreateNestedOneWithoutProjectInput;
  };

  export type projectUncheckedCreateWithoutCollaborationInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type projectCreateOrConnectWithoutCollaborationInput = {
    where: projectWhereUniqueInput;
    create: XOR<projectCreateWithoutCollaborationInput, projectUncheckedCreateWithoutCollaborationInput>;
  };

  export type userUpsertWithoutCollaborationInput = {
    update: XOR<userUpdateWithoutCollaborationInput, userUncheckedUpdateWithoutCollaborationInput>;
    create: XOR<userCreateWithoutCollaborationInput, userUncheckedCreateWithoutCollaborationInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCollaborationInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCollaborationInput, userUncheckedUpdateWithoutCollaborationInput>;
  };

  export type userUpdateWithoutCollaborationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    project?: projectUpdateManyWithoutUserNestedInput;
    publication?: publicationUpdateManyWithoutUserNestedInput;
    research?: researchUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCollaborationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    project?: projectUncheckedUpdateManyWithoutUserNestedInput;
    publication?: publicationUncheckedUpdateManyWithoutUserNestedInput;
    research?: researchUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type projectUpsertWithoutCollaborationInput = {
    update: XOR<projectUpdateWithoutCollaborationInput, projectUncheckedUpdateWithoutCollaborationInput>;
    create: XOR<projectCreateWithoutCollaborationInput, projectUncheckedCreateWithoutCollaborationInput>;
    where?: projectWhereInput;
  };

  export type projectUpdateToOneWithWhereWithoutCollaborationInput = {
    where?: projectWhereInput;
    data: XOR<projectUpdateWithoutCollaborationInput, projectUncheckedUpdateWithoutCollaborationInput>;
  };

  export type projectUpdateWithoutCollaborationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutProjectNestedInput;
    user?: userUpdateOneRequiredWithoutProjectNestedInput;
  };

  export type projectUncheckedUpdateWithoutCollaborationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    collaboration?: collaborationCreateNestedManyWithoutUserInput;
    project?: projectCreateNestedManyWithoutUserInput;
    publication?: publicationCreateNestedManyWithoutUserInput;
    research?: researchCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    collaboration?: collaborationUncheckedCreateNestedManyWithoutUserInput;
    project?: projectUncheckedCreateNestedManyWithoutUserInput;
    publication?: publicationUncheckedCreateNestedManyWithoutUserInput;
    research?: researchUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutOrganizationInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
  };

  export type projectCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collaboration?: collaborationCreateNestedManyWithoutProjectInput;
    user: userCreateNestedOneWithoutProjectInput;
  };

  export type projectUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    collaboration?: collaborationUncheckedCreateNestedManyWithoutProjectInput;
  };

  export type projectCreateOrConnectWithoutOrganizationInput = {
    where: projectWhereUniqueInput;
    create: XOR<projectCreateWithoutOrganizationInput, projectUncheckedCreateWithoutOrganizationInput>;
  };

  export type projectCreateManyOrganizationInputEnvelope = {
    data: projectCreateManyOrganizationInput | projectCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type researchCreateWithoutOrganizationInput = {
    id?: string;
    title: string;
    abstract: string;
    publication_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    publication?: publicationCreateNestedManyWithoutResearchInput;
    user: userCreateNestedOneWithoutResearchInput;
  };

  export type researchUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    title: string;
    abstract: string;
    publication_date?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    publication?: publicationUncheckedCreateNestedManyWithoutResearchInput;
  };

  export type researchCreateOrConnectWithoutOrganizationInput = {
    where: researchWhereUniqueInput;
    create: XOR<researchCreateWithoutOrganizationInput, researchUncheckedCreateWithoutOrganizationInput>;
  };

  export type researchCreateManyOrganizationInputEnvelope = {
    data: researchCreateManyOrganizationInput | researchCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutOrganizationInput = {
    update: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutOrganizationInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
  };

  export type userUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collaboration?: collaborationUpdateManyWithoutUserNestedInput;
    project?: projectUpdateManyWithoutUserNestedInput;
    publication?: publicationUpdateManyWithoutUserNestedInput;
    research?: researchUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collaboration?: collaborationUncheckedUpdateManyWithoutUserNestedInput;
    project?: projectUncheckedUpdateManyWithoutUserNestedInput;
    publication?: publicationUncheckedUpdateManyWithoutUserNestedInput;
    research?: researchUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type projectUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: projectWhereUniqueInput;
    update: XOR<projectUpdateWithoutOrganizationInput, projectUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<projectCreateWithoutOrganizationInput, projectUncheckedCreateWithoutOrganizationInput>;
  };

  export type projectUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: projectWhereUniqueInput;
    data: XOR<projectUpdateWithoutOrganizationInput, projectUncheckedUpdateWithoutOrganizationInput>;
  };

  export type projectUpdateManyWithWhereWithoutOrganizationInput = {
    where: projectScalarWhereInput;
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type projectScalarWhereInput = {
    AND?: projectScalarWhereInput | projectScalarWhereInput[];
    OR?: projectScalarWhereInput[];
    NOT?: projectScalarWhereInput | projectScalarWhereInput[];
    id?: UuidFilter<'project'> | string;
    name?: StringFilter<'project'> | string;
    description?: StringNullableFilter<'project'> | string | null;
    start_date?: DateTimeNullableFilter<'project'> | Date | string | null;
    end_date?: DateTimeNullableFilter<'project'> | Date | string | null;
    user_id?: UuidFilter<'project'> | string;
    organization_id?: UuidFilter<'project'> | string;
    created_at?: DateTimeFilter<'project'> | Date | string;
    updated_at?: DateTimeFilter<'project'> | Date | string;
  };

  export type researchUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: researchWhereUniqueInput;
    update: XOR<researchUpdateWithoutOrganizationInput, researchUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<researchCreateWithoutOrganizationInput, researchUncheckedCreateWithoutOrganizationInput>;
  };

  export type researchUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: researchWhereUniqueInput;
    data: XOR<researchUpdateWithoutOrganizationInput, researchUncheckedUpdateWithoutOrganizationInput>;
  };

  export type researchUpdateManyWithWhereWithoutOrganizationInput = {
    where: researchScalarWhereInput;
    data: XOR<researchUpdateManyMutationInput, researchUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type researchScalarWhereInput = {
    AND?: researchScalarWhereInput | researchScalarWhereInput[];
    OR?: researchScalarWhereInput[];
    NOT?: researchScalarWhereInput | researchScalarWhereInput[];
    id?: UuidFilter<'research'> | string;
    title?: StringFilter<'research'> | string;
    abstract?: StringFilter<'research'> | string;
    publication_date?: DateTimeNullableFilter<'research'> | Date | string | null;
    user_id?: UuidFilter<'research'> | string;
    organization_id?: UuidFilter<'research'> | string;
    created_at?: DateTimeFilter<'research'> | Date | string;
    updated_at?: DateTimeFilter<'research'> | Date | string;
  };

  export type collaborationCreateWithoutProjectInput = {
    id?: string;
    role?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutCollaborationInput;
  };

  export type collaborationUncheckedCreateWithoutProjectInput = {
    id?: string;
    collaborator_id: string;
    role?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type collaborationCreateOrConnectWithoutProjectInput = {
    where: collaborationWhereUniqueInput;
    create: XOR<collaborationCreateWithoutProjectInput, collaborationUncheckedCreateWithoutProjectInput>;
  };

  export type collaborationCreateManyProjectInputEnvelope = {
    data: collaborationCreateManyProjectInput | collaborationCreateManyProjectInput[];
    skipDuplicates?: boolean;
  };

  export type organizationCreateWithoutProjectInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutOrganizationInput;
    research?: researchCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutProjectInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    research?: researchUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutProjectInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutProjectInput, organizationUncheckedCreateWithoutProjectInput>;
  };

  export type userCreateWithoutProjectInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    collaboration?: collaborationCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    publication?: publicationCreateNestedManyWithoutUserInput;
    research?: researchCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutProjectInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    collaboration?: collaborationUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    publication?: publicationUncheckedCreateNestedManyWithoutUserInput;
    research?: researchUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutProjectInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutProjectInput, userUncheckedCreateWithoutProjectInput>;
  };

  export type collaborationUpsertWithWhereUniqueWithoutProjectInput = {
    where: collaborationWhereUniqueInput;
    update: XOR<collaborationUpdateWithoutProjectInput, collaborationUncheckedUpdateWithoutProjectInput>;
    create: XOR<collaborationCreateWithoutProjectInput, collaborationUncheckedCreateWithoutProjectInput>;
  };

  export type collaborationUpdateWithWhereUniqueWithoutProjectInput = {
    where: collaborationWhereUniqueInput;
    data: XOR<collaborationUpdateWithoutProjectInput, collaborationUncheckedUpdateWithoutProjectInput>;
  };

  export type collaborationUpdateManyWithWhereWithoutProjectInput = {
    where: collaborationScalarWhereInput;
    data: XOR<collaborationUpdateManyMutationInput, collaborationUncheckedUpdateManyWithoutProjectInput>;
  };

  export type collaborationScalarWhereInput = {
    AND?: collaborationScalarWhereInput | collaborationScalarWhereInput[];
    OR?: collaborationScalarWhereInput[];
    NOT?: collaborationScalarWhereInput | collaborationScalarWhereInput[];
    id?: UuidFilter<'collaboration'> | string;
    collaborator_id?: UuidFilter<'collaboration'> | string;
    project_id?: UuidFilter<'collaboration'> | string;
    role?: StringNullableFilter<'collaboration'> | string | null;
    start_date?: DateTimeNullableFilter<'collaboration'> | Date | string | null;
    end_date?: DateTimeNullableFilter<'collaboration'> | Date | string | null;
    created_at?: DateTimeFilter<'collaboration'> | Date | string;
    updated_at?: DateTimeFilter<'collaboration'> | Date | string;
  };

  export type organizationUpsertWithoutProjectInput = {
    update: XOR<organizationUpdateWithoutProjectInput, organizationUncheckedUpdateWithoutProjectInput>;
    create: XOR<organizationCreateWithoutProjectInput, organizationUncheckedCreateWithoutProjectInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutProjectInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutProjectInput, organizationUncheckedUpdateWithoutProjectInput>;
  };

  export type organizationUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
    research?: researchUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    research?: researchUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type userUpsertWithoutProjectInput = {
    update: XOR<userUpdateWithoutProjectInput, userUncheckedUpdateWithoutProjectInput>;
    create: XOR<userCreateWithoutProjectInput, userUncheckedCreateWithoutProjectInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutProjectInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutProjectInput, userUncheckedUpdateWithoutProjectInput>;
  };

  export type userUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collaboration?: collaborationUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    publication?: publicationUpdateManyWithoutUserNestedInput;
    research?: researchUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collaboration?: collaborationUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    publication?: publicationUncheckedUpdateManyWithoutUserNestedInput;
    research?: researchUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type researchCreateWithoutPublicationInput = {
    id?: string;
    title: string;
    abstract: string;
    publication_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutResearchInput;
    user: userCreateNestedOneWithoutResearchInput;
  };

  export type researchUncheckedCreateWithoutPublicationInput = {
    id?: string;
    title: string;
    abstract: string;
    publication_date?: Date | string | null;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type researchCreateOrConnectWithoutPublicationInput = {
    where: researchWhereUniqueInput;
    create: XOR<researchCreateWithoutPublicationInput, researchUncheckedCreateWithoutPublicationInput>;
  };

  export type userCreateWithoutPublicationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    collaboration?: collaborationCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    project?: projectCreateNestedManyWithoutUserInput;
    research?: researchCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutPublicationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    collaboration?: collaborationUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    project?: projectUncheckedCreateNestedManyWithoutUserInput;
    research?: researchUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutPublicationInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutPublicationInput, userUncheckedCreateWithoutPublicationInput>;
  };

  export type researchUpsertWithoutPublicationInput = {
    update: XOR<researchUpdateWithoutPublicationInput, researchUncheckedUpdateWithoutPublicationInput>;
    create: XOR<researchCreateWithoutPublicationInput, researchUncheckedCreateWithoutPublicationInput>;
    where?: researchWhereInput;
  };

  export type researchUpdateToOneWithWhereWithoutPublicationInput = {
    where?: researchWhereInput;
    data: XOR<researchUpdateWithoutPublicationInput, researchUncheckedUpdateWithoutPublicationInput>;
  };

  export type researchUpdateWithoutPublicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: StringFieldUpdateOperationsInput | string;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutResearchNestedInput;
    user?: userUpdateOneRequiredWithoutResearchNestedInput;
  };

  export type researchUncheckedUpdateWithoutPublicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: StringFieldUpdateOperationsInput | string;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutPublicationInput = {
    update: XOR<userUpdateWithoutPublicationInput, userUncheckedUpdateWithoutPublicationInput>;
    create: XOR<userCreateWithoutPublicationInput, userUncheckedCreateWithoutPublicationInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutPublicationInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutPublicationInput, userUncheckedUpdateWithoutPublicationInput>;
  };

  export type userUpdateWithoutPublicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collaboration?: collaborationUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    project?: projectUpdateManyWithoutUserNestedInput;
    research?: researchUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutPublicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collaboration?: collaborationUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    project?: projectUncheckedUpdateManyWithoutUserNestedInput;
    research?: researchUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type publicationCreateWithoutResearchInput = {
    id?: string;
    title: string;
    publication_date?: Date | string | null;
    publisher: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutPublicationInput;
  };

  export type publicationUncheckedCreateWithoutResearchInput = {
    id?: string;
    title: string;
    publication_date?: Date | string | null;
    publisher: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type publicationCreateOrConnectWithoutResearchInput = {
    where: publicationWhereUniqueInput;
    create: XOR<publicationCreateWithoutResearchInput, publicationUncheckedCreateWithoutResearchInput>;
  };

  export type publicationCreateManyResearchInputEnvelope = {
    data: publicationCreateManyResearchInput | publicationCreateManyResearchInput[];
    skipDuplicates?: boolean;
  };

  export type organizationCreateWithoutResearchInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutOrganizationInput;
    project?: projectCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutResearchInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    project?: projectUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutResearchInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutResearchInput, organizationUncheckedCreateWithoutResearchInput>;
  };

  export type userCreateWithoutResearchInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    collaboration?: collaborationCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    project?: projectCreateNestedManyWithoutUserInput;
    publication?: publicationCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutResearchInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    collaboration?: collaborationUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    project?: projectUncheckedCreateNestedManyWithoutUserInput;
    publication?: publicationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutResearchInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutResearchInput, userUncheckedCreateWithoutResearchInput>;
  };

  export type publicationUpsertWithWhereUniqueWithoutResearchInput = {
    where: publicationWhereUniqueInput;
    update: XOR<publicationUpdateWithoutResearchInput, publicationUncheckedUpdateWithoutResearchInput>;
    create: XOR<publicationCreateWithoutResearchInput, publicationUncheckedCreateWithoutResearchInput>;
  };

  export type publicationUpdateWithWhereUniqueWithoutResearchInput = {
    where: publicationWhereUniqueInput;
    data: XOR<publicationUpdateWithoutResearchInput, publicationUncheckedUpdateWithoutResearchInput>;
  };

  export type publicationUpdateManyWithWhereWithoutResearchInput = {
    where: publicationScalarWhereInput;
    data: XOR<publicationUpdateManyMutationInput, publicationUncheckedUpdateManyWithoutResearchInput>;
  };

  export type publicationScalarWhereInput = {
    AND?: publicationScalarWhereInput | publicationScalarWhereInput[];
    OR?: publicationScalarWhereInput[];
    NOT?: publicationScalarWhereInput | publicationScalarWhereInput[];
    id?: UuidFilter<'publication'> | string;
    title?: StringFilter<'publication'> | string;
    publication_date?: DateTimeNullableFilter<'publication'> | Date | string | null;
    publisher?: StringFilter<'publication'> | string;
    user_id?: UuidFilter<'publication'> | string;
    research_id?: UuidFilter<'publication'> | string;
    created_at?: DateTimeFilter<'publication'> | Date | string;
    updated_at?: DateTimeFilter<'publication'> | Date | string;
  };

  export type organizationUpsertWithoutResearchInput = {
    update: XOR<organizationUpdateWithoutResearchInput, organizationUncheckedUpdateWithoutResearchInput>;
    create: XOR<organizationCreateWithoutResearchInput, organizationUncheckedCreateWithoutResearchInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutResearchInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutResearchInput, organizationUncheckedUpdateWithoutResearchInput>;
  };

  export type organizationUpdateWithoutResearchInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
    project?: projectUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutResearchInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    project?: projectUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type userUpsertWithoutResearchInput = {
    update: XOR<userUpdateWithoutResearchInput, userUncheckedUpdateWithoutResearchInput>;
    create: XOR<userCreateWithoutResearchInput, userUncheckedCreateWithoutResearchInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutResearchInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutResearchInput, userUncheckedUpdateWithoutResearchInput>;
  };

  export type userUpdateWithoutResearchInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collaboration?: collaborationUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    project?: projectUpdateManyWithoutUserNestedInput;
    publication?: publicationUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutResearchInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collaboration?: collaborationUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    project?: projectUncheckedUpdateManyWithoutUserNestedInput;
    publication?: publicationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type collaborationCreateWithoutUserInput = {
    id?: string;
    role?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    project: projectCreateNestedOneWithoutCollaborationInput;
  };

  export type collaborationUncheckedCreateWithoutUserInput = {
    id?: string;
    project_id: string;
    role?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type collaborationCreateOrConnectWithoutUserInput = {
    where: collaborationWhereUniqueInput;
    create: XOR<collaborationCreateWithoutUserInput, collaborationUncheckedCreateWithoutUserInput>;
  };

  export type collaborationCreateManyUserInputEnvelope = {
    data: collaborationCreateManyUserInput | collaborationCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type organizationCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    project?: projectCreateNestedManyWithoutOrganizationInput;
    research?: researchCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    project?: projectUncheckedCreateNestedManyWithoutOrganizationInput;
    research?: researchUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutUserInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type organizationCreateManyUserInputEnvelope = {
    data: organizationCreateManyUserInput | organizationCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type projectCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collaboration?: collaborationCreateNestedManyWithoutProjectInput;
    organization: organizationCreateNestedOneWithoutProjectInput;
  };

  export type projectUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    collaboration?: collaborationUncheckedCreateNestedManyWithoutProjectInput;
  };

  export type projectCreateOrConnectWithoutUserInput = {
    where: projectWhereUniqueInput;
    create: XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput>;
  };

  export type projectCreateManyUserInputEnvelope = {
    data: projectCreateManyUserInput | projectCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type publicationCreateWithoutUserInput = {
    id?: string;
    title: string;
    publication_date?: Date | string | null;
    publisher: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    research: researchCreateNestedOneWithoutPublicationInput;
  };

  export type publicationUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    publication_date?: Date | string | null;
    publisher: string;
    research_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type publicationCreateOrConnectWithoutUserInput = {
    where: publicationWhereUniqueInput;
    create: XOR<publicationCreateWithoutUserInput, publicationUncheckedCreateWithoutUserInput>;
  };

  export type publicationCreateManyUserInputEnvelope = {
    data: publicationCreateManyUserInput | publicationCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type researchCreateWithoutUserInput = {
    id?: string;
    title: string;
    abstract: string;
    publication_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    publication?: publicationCreateNestedManyWithoutResearchInput;
    organization: organizationCreateNestedOneWithoutResearchInput;
  };

  export type researchUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    abstract: string;
    publication_date?: Date | string | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    publication?: publicationUncheckedCreateNestedManyWithoutResearchInput;
  };

  export type researchCreateOrConnectWithoutUserInput = {
    where: researchWhereUniqueInput;
    create: XOR<researchCreateWithoutUserInput, researchUncheckedCreateWithoutUserInput>;
  };

  export type researchCreateManyUserInputEnvelope = {
    data: researchCreateManyUserInput | researchCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type collaborationUpsertWithWhereUniqueWithoutUserInput = {
    where: collaborationWhereUniqueInput;
    update: XOR<collaborationUpdateWithoutUserInput, collaborationUncheckedUpdateWithoutUserInput>;
    create: XOR<collaborationCreateWithoutUserInput, collaborationUncheckedCreateWithoutUserInput>;
  };

  export type collaborationUpdateWithWhereUniqueWithoutUserInput = {
    where: collaborationWhereUniqueInput;
    data: XOR<collaborationUpdateWithoutUserInput, collaborationUncheckedUpdateWithoutUserInput>;
  };

  export type collaborationUpdateManyWithWhereWithoutUserInput = {
    where: collaborationScalarWhereInput;
    data: XOR<collaborationUpdateManyMutationInput, collaborationUncheckedUpdateManyWithoutUserInput>;
  };

  export type organizationUpsertWithWhereUniqueWithoutUserInput = {
    where: organizationWhereUniqueInput;
    update: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type organizationUpdateWithWhereUniqueWithoutUserInput = {
    where: organizationWhereUniqueInput;
    data: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
  };

  export type organizationUpdateManyWithWhereWithoutUserInput = {
    where: organizationScalarWhereInput;
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyWithoutUserInput>;
  };

  export type organizationScalarWhereInput = {
    AND?: organizationScalarWhereInput | organizationScalarWhereInput[];
    OR?: organizationScalarWhereInput[];
    NOT?: organizationScalarWhereInput | organizationScalarWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user_id?: UuidFilter<'organization'> | string;
    tenant_id?: StringFilter<'organization'> | string;
  };

  export type projectUpsertWithWhereUniqueWithoutUserInput = {
    where: projectWhereUniqueInput;
    update: XOR<projectUpdateWithoutUserInput, projectUncheckedUpdateWithoutUserInput>;
    create: XOR<projectCreateWithoutUserInput, projectUncheckedCreateWithoutUserInput>;
  };

  export type projectUpdateWithWhereUniqueWithoutUserInput = {
    where: projectWhereUniqueInput;
    data: XOR<projectUpdateWithoutUserInput, projectUncheckedUpdateWithoutUserInput>;
  };

  export type projectUpdateManyWithWhereWithoutUserInput = {
    where: projectScalarWhereInput;
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyWithoutUserInput>;
  };

  export type publicationUpsertWithWhereUniqueWithoutUserInput = {
    where: publicationWhereUniqueInput;
    update: XOR<publicationUpdateWithoutUserInput, publicationUncheckedUpdateWithoutUserInput>;
    create: XOR<publicationCreateWithoutUserInput, publicationUncheckedCreateWithoutUserInput>;
  };

  export type publicationUpdateWithWhereUniqueWithoutUserInput = {
    where: publicationWhereUniqueInput;
    data: XOR<publicationUpdateWithoutUserInput, publicationUncheckedUpdateWithoutUserInput>;
  };

  export type publicationUpdateManyWithWhereWithoutUserInput = {
    where: publicationScalarWhereInput;
    data: XOR<publicationUpdateManyMutationInput, publicationUncheckedUpdateManyWithoutUserInput>;
  };

  export type researchUpsertWithWhereUniqueWithoutUserInput = {
    where: researchWhereUniqueInput;
    update: XOR<researchUpdateWithoutUserInput, researchUncheckedUpdateWithoutUserInput>;
    create: XOR<researchCreateWithoutUserInput, researchUncheckedCreateWithoutUserInput>;
  };

  export type researchUpdateWithWhereUniqueWithoutUserInput = {
    where: researchWhereUniqueInput;
    data: XOR<researchUpdateWithoutUserInput, researchUncheckedUpdateWithoutUserInput>;
  };

  export type researchUpdateManyWithWhereWithoutUserInput = {
    where: researchScalarWhereInput;
    data: XOR<researchUpdateManyMutationInput, researchUncheckedUpdateManyWithoutUserInput>;
  };

  export type projectCreateManyOrganizationInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type researchCreateManyOrganizationInput = {
    id?: string;
    title: string;
    abstract: string;
    publication_date?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type projectUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collaboration?: collaborationUpdateManyWithoutProjectNestedInput;
    user?: userUpdateOneRequiredWithoutProjectNestedInput;
  };

  export type projectUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collaboration?: collaborationUncheckedUpdateManyWithoutProjectNestedInput;
  };

  export type projectUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type researchUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: StringFieldUpdateOperationsInput | string;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    publication?: publicationUpdateManyWithoutResearchNestedInput;
    user?: userUpdateOneRequiredWithoutResearchNestedInput;
  };

  export type researchUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: StringFieldUpdateOperationsInput | string;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    publication?: publicationUncheckedUpdateManyWithoutResearchNestedInput;
  };

  export type researchUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: StringFieldUpdateOperationsInput | string;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type collaborationCreateManyProjectInput = {
    id?: string;
    collaborator_id: string;
    role?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type collaborationUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutCollaborationNestedInput;
  };

  export type collaborationUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    collaborator_id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type collaborationUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string;
    collaborator_id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type publicationCreateManyResearchInput = {
    id?: string;
    title: string;
    publication_date?: Date | string | null;
    publisher: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type publicationUpdateWithoutResearchInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publisher?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutPublicationNestedInput;
  };

  export type publicationUncheckedUpdateWithoutResearchInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publisher?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type publicationUncheckedUpdateManyWithoutResearchInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publisher?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type collaborationCreateManyUserInput = {
    id?: string;
    project_id: string;
    role?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type organizationCreateManyUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type projectCreateManyUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date?: Date | string | null;
    end_date?: Date | string | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type publicationCreateManyUserInput = {
    id?: string;
    title: string;
    publication_date?: Date | string | null;
    publisher: string;
    research_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type researchCreateManyUserInput = {
    id?: string;
    title: string;
    abstract: string;
    publication_date?: Date | string | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type collaborationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    project?: projectUpdateOneRequiredWithoutCollaborationNestedInput;
  };

  export type collaborationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    project_id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type collaborationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    project_id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    project?: projectUpdateManyWithoutOrganizationNestedInput;
    research?: researchUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    project?: projectUncheckedUpdateManyWithoutOrganizationNestedInput;
    research?: researchUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type projectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collaboration?: collaborationUpdateManyWithoutProjectNestedInput;
    organization?: organizationUpdateOneRequiredWithoutProjectNestedInput;
  };

  export type projectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collaboration?: collaborationUncheckedUpdateManyWithoutProjectNestedInput;
  };

  export type projectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type publicationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publisher?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    research?: researchUpdateOneRequiredWithoutPublicationNestedInput;
  };

  export type publicationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publisher?: StringFieldUpdateOperationsInput | string;
    research_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type publicationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publisher?: StringFieldUpdateOperationsInput | string;
    research_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type researchUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: StringFieldUpdateOperationsInput | string;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    publication?: publicationUpdateManyWithoutResearchNestedInput;
    organization?: organizationUpdateOneRequiredWithoutResearchNestedInput;
  };

  export type researchUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: StringFieldUpdateOperationsInput | string;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    publication?: publicationUncheckedUpdateManyWithoutResearchNestedInput;
  };

  export type researchUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    abstract?: StringFieldUpdateOperationsInput | string;
    publication_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
   */
  export type OrganizationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
   */
  export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ProjectCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ResearchCountOutputTypeDefaultArgs instead
   */
  export type ResearchCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ResearchCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use citationDefaultArgs instead
   */
  export type citationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    citationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use collaborationDefaultArgs instead
   */
  export type collaborationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    collaborationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use conferenceDefaultArgs instead
   */
  export type conferenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    conferenceDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use organizationDefaultArgs instead
   */
  export type organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    organizationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use patentDefaultArgs instead
   */
  export type patentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    patentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use projectDefaultArgs instead
   */
  export type projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    projectDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use publicationDefaultArgs instead
   */
  export type publicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    publicationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use researchDefaultArgs instead
   */
  export type researchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    researchDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use research_interestDefaultArgs instead
   */
  export type research_interestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    research_interestDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use workshopDefaultArgs instead
   */
  export type workshopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    workshopDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
