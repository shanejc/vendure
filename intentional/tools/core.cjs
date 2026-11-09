"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/core-cli.ts
var core_cli_exports = {};
__export(core_cli_exports, {
  readCoreBundle: () => readCoreBundle
});
module.exports = __toCommonJS(core_cli_exports);

// node_modules/zod/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});

// node_modules/zod/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};

// node_modules/zod/v3/locales/en.js
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var en_default = errorMap;

// node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}

// node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

// node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {
      } else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base2 = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base2))
          return INVALID;
        const result = effect.transform(base2.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base2) => {
          if (!isValid(base2))
            return INVALID;
          return Promise.resolve(effect.transform(base2.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = /* @__PURE__ */ Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new _ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: ((arg) => ZodString.create({ ...arg, coerce: true })),
  number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
  boolean: ((arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  })),
  bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
  date: ((arg) => ZodDate.create({ ...arg, coerce: true }))
};
var NEVER = INVALID;

// src/outcomes.ts
function encodeValue(value, seen = /* @__PURE__ */ new Set(), depth = 0) {
  if (depth > 80) throw new Error("Observable value nesting limit exceeded");
  if (value === void 0) return { tag: "undefined" };
  if (value === null) return { tag: "null" };
  if (typeof value === "number") return { tag: "number", value: Number.isNaN(value) ? "NaN" : value === Infinity ? "+Infinity" : value === -Infinity ? "-Infinity" : Object.is(value, -0) ? "-0" : value };
  if (typeof value === "string" || typeof value === "boolean") return { tag: typeof value, value };
  if (typeof value !== "object") throw new Error("Unsupported observable value: " + typeof value);
  if (seen.has(value)) throw new Error("Cyclic observable value");
  seen.add(value);
  try {
    const list = Array.isArray(value), prototype = Object.getPrototypeOf(value), constructor = prototype && Object.getOwnPropertyDescriptor(prototype, "constructor");
    if (!constructor || !("value" in constructor) || typeof constructor.value !== "function" || Function.prototype.toString.call(constructor.value) !== Function.prototype.toString.call(list ? Array : Object) || Object.getOwnPropertyDescriptor(constructor.value, "prototype")?.value !== prototype) throw new Error("Unsupported observable object prototype");
    const descriptors = Object.getOwnPropertyDescriptors(value), keys = Reflect.ownKeys(descriptors);
    if (keys.some((k) => typeof k !== "string")) throw new Error("Unsupported observable symbol fields");
    if (list) {
      const length = descriptors.length.value;
      if (length > 1e4) throw new Error("Observable list limit exceeded");
      for (const key of keys) {
        if (key === "length") continue;
        if (!/^(0|[1-9]\d*)$/.test(key) || Number(key) >= length) throw new Error("Unsupported observable extra list fields");
        const d = descriptors[key];
        if (!("value" in d) || !d.enumerable) throw new Error("Unsupported observable non-data list item");
      }
      return { tag: "array", value: Array.from({ length }, (_, i) => Object.hasOwn(descriptors, i) ? encodeValue(descriptors[i].value, seen, depth + 1) : { tag: "missing" }) };
    }
    if (keys.length > 1e4) throw new Error("Observable record limit exceeded");
    for (const key of keys) {
      const d = descriptors[key];
      if (!("value" in d) || !d.enumerable) throw new Error("Unsupported observable non-data record field");
    }
    return { tag: "object", value: keys.sort().map((k) => [k, encodeValue(descriptors[k].value, seen, depth + 1)]) };
  } finally {
    seen.delete(value);
  }
}
function capture(run) {
  let value;
  try {
    value = run();
  } catch (error) {
    return { version: 1, kind: "threw", error: { name: String(error?.name ?? "Error"), message: String(error?.message ?? error) } };
  }
  return { version: 1, kind: "returned", value: encodeValue(value) };
}
function stableJson(value) {
  return JSON.stringify(value, (_key, item) => item && typeof item === "object" && !Array.isArray(item) ? Object.fromEntries(Object.keys(item).sort().map((key) => [key, item[key]])) : item);
}
function sameOutcome(a, b) {
  return stableJson(a) === stableJson(b);
}
function decodeValue(encoded) {
  switch (encoded.tag) {
    case "undefined":
      return void 0;
    case "null":
      return null;
    case "string":
    case "boolean":
      return encoded.value;
    case "number":
      return encoded.value === "NaN" ? NaN : encoded.value === "+Infinity" ? Infinity : encoded.value === "-Infinity" ? -Infinity : encoded.value === "-0" ? -0 : encoded.value;
    case "array": {
      const a = new Array(encoded.value.length);
      encoded.value.forEach((v, i) => {
        if (v.tag !== "missing") a[i] = decodeValue(v);
      });
      return a;
    }
    case "object":
      return Object.fromEntries(encoded.value.map(([k, v]) => [k, decodeValue(v)]));
    default:
      throw new Error("Unsupported encoded value: " + encoded.tag);
  }
}

// src/artifact-data.ts
var MAX_ARTIFACT_DEPTH = 192;
var MAX_ARTIFACT_NODES = 5e5;
function inspectArtifactData(input, limits = { maxDepth: MAX_ARTIFACT_DEPTH, maxNodes: MAX_ARTIFACT_NODES }) {
  const stack = [{ value: input, path: "$", depth: 0 }], active = /* @__PURE__ */ new WeakSet();
  let nodes = 0, depth = 0;
  const fail = (message, path) => ({ errors: [message + " at " + path], nodes, depth });
  while (stack.length) {
    const step = stack.pop(), value = step.value;
    if (step.leave) {
      active.delete(value);
      continue;
    }
    nodes++;
    depth = Math.max(depth, step.depth);
    if (nodes > limits.maxNodes) return fail("Artifact node limit exceeded (" + limits.maxNodes + ")", step.path);
    if (step.depth > limits.maxDepth) return fail("Artifact depth limit exceeded (" + limits.maxDepth + ")", step.path);
    if (value === null || typeof value !== "object") {
      if (["function", "symbol", "bigint"].includes(typeof value)) return fail("Unsupported artifact value: " + typeof value, step.path);
      continue;
    }
    if (active.has(value)) return fail("Artifact contains a cycle", step.path);
    try {
      const list = Array.isArray(value), prototype = Object.getPrototypeOf(value), ctor = prototype && Object.getOwnPropertyDescriptor(prototype, "constructor");
      if (!(prototype === null && !list) && (!ctor || !("value" in ctor) || typeof ctor.value !== "function" || Function.prototype.toString.call(ctor.value) !== Function.prototype.toString.call(list ? Array : Object) || Object.getOwnPropertyDescriptor(ctor.value, "prototype")?.value !== prototype)) return fail("Unsupported artifact object prototype", step.path);
      const descriptors = Object.getOwnPropertyDescriptors(value), keys = Reflect.ownKeys(descriptors);
      if (keys.some((k) => typeof k !== "string")) return fail("Unsupported artifact symbol field", step.path);
      const children = keys.filter((k) => !list || k !== "length");
      if (nodes + children.length > limits.maxNodes) return fail("Artifact node limit exceeded (" + limits.maxNodes + ")", step.path);
      for (const key of children) {
        const d = descriptors[key], path = (step.path + (list ? "[" + key + "]" : "." + key.slice(0, 60))).slice(-240);
        if (!("value" in d) || !d.enumerable) return fail("Unsupported artifact accessor or hidden field", path);
        if (list && (!/^(0|[1-9]\d*)$/.test(key) || Number(key) >= descriptors.length.value)) return fail("Unsupported artifact extra list field", path);
      }
      active.add(value);
      stack.push({ ...step, leave: true });
      for (let i = children.length - 1; i >= 0; i--) {
        const key = children[i];
        stack.push({ value: descriptors[key].value, path: (step.path + (list ? "[" + key + "]" : "." + key.slice(0, 60))).slice(-240), depth: step.depth + 1 });
      }
    } catch {
      return fail("Artifact data could not be inspected", step.path);
    }
  }
  return { errors: [], nodes, depth };
}
function assertArtifactData(input) {
  const result = inspectArtifactData(input);
  if (result.errors.length) throw new Error(result.errors.join("\n"));
}
function guardedArtifactSchema(schema) {
  return external_exports.unknown().superRefine((input, ctx) => {
    for (const message of inspectArtifactData(input).errors) ctx.addIssue({ code: "custom", message });
  }).pipe(schema);
}

// src/outcome-schema.ts
var encodedDataSchema = external_exports.lazy(() => external_exports.union([
  external_exports.object({ tag: external_exports.literal("undefined") }).strict(),
  external_exports.object({ tag: external_exports.literal("null") }).strict(),
  external_exports.object({ tag: external_exports.literal("string"), value: external_exports.string() }).strict(),
  external_exports.object({ tag: external_exports.literal("boolean"), value: external_exports.boolean() }).strict(),
  external_exports.object({ tag: external_exports.literal("number"), value: external_exports.union([external_exports.number().finite().refine((n) => !Object.is(n, -0)), external_exports.enum(["NaN", "+Infinity", "-Infinity", "-0"])]) }).strict(),
  external_exports.object({ tag: external_exports.literal("array"), value: external_exports.array(external_exports.union([encodedDataSchema, external_exports.object({ tag: external_exports.literal("missing") }).strict()])).max(1e4) }).strict(),
  external_exports.object({ tag: external_exports.literal("object"), value: external_exports.array(external_exports.tuple([external_exports.string(), encodedDataSchema])).max(1e4).refine((pairs) => new Set(pairs.map(([key]) => key)).size === pairs.length, "Duplicate observation fields") }).strict()
]));
var encodedValueSchema = guardedArtifactSchema(encodedDataSchema);
var executionResultSchema = external_exports.discriminatedUnion("kind", [
  external_exports.object({ version: external_exports.literal(1), kind: external_exports.literal("returned"), value: encodedValueSchema }).strict(),
  external_exports.object({ version: external_exports.literal(1), kind: external_exports.literal("threw"), error: external_exports.object({ name: external_exports.string(), message: external_exports.string() }).strict() }).strict()
]);
function canonicalOutcome(value) {
  const result = executionResultSchema.parse(value);
  return result.kind === "threw" ? result : capture(() => decodeValue(result.value));
}

// src/execution-observer.ts
var snapshotSchema = external_exports.union([external_exports.object({ value: encodedValueSchema }).strict(), external_exports.object({ unavailable: external_exports.string() }).strict()]);
var base = { id: external_exports.number().int().nonnegative(), parent: external_exports.number().int().nonnegative().optional(), node: external_exports.string().optional() };
var executionEventSchema = external_exports.discriminatedUnion("kind", [
  external_exports.object({ ...base, kind: external_exports.literal("call"), name: external_exports.string(), params: external_exports.array(external_exports.string()), args: snapshotSchema, result: external_exports.union([external_exports.object({ outcome: executionResultSchema }).strict(), external_exports.object({ unavailable: external_exports.string() }).strict()]) }).strict(),
  external_exports.object({ ...base, kind: external_exports.literal("read"), snapshot: snapshotSchema }).strict(),
  external_exports.object({ ...base, kind: external_exports.literal("branch"), operator: external_exports.enum(["if", "and", "or", "coalesce"]), choice: external_exports.enum(["then", "otherwise", "left", "right"]), target: external_exports.string().optional(), skipped: external_exports.string().optional(), reason: external_exports.string() }).strict(),
  external_exports.object({ ...base, kind: external_exports.literal("rule"), choice: external_exports.enum(["matched", "not-matched", "fallback"]) }).strict(),
  external_exports.object({ ...base, kind: external_exports.literal("transition"), from: snapshotSchema, to: snapshotSchema, choice: external_exports.enum(["allowed", "denied", "retained-required"]) }).strict()
]);
var executionExplanationSchema = external_exports.object({ version: external_exports.literal(1), limit: external_exports.number().int().min(1).max(1e3), dropped: external_exports.number().int().nonnegative(), events: external_exports.array(executionEventSchema).max(1e3) }).strict().superRefine((r, ctx) => {
  const calls = /* @__PURE__ */ new Set();
  let previous = -1;
  for (const e of r.events) {
    if (e.id <= previous || e.parent !== void 0 && !calls.has(e.parent)) ctx.addIssue({ code: "custom", message: "Execution events require ordered identities and earlier call parents" });
    previous = e.id;
    if (e.kind === "call") calls.add(e.id);
  }
  if (r.events.length > r.limit) ctx.addIssue({ code: "custom", message: "Execution event limit exceeded" });
});
function snapshot(value) {
  try {
    const encoded = encodeValue(value);
    return JSON.stringify(encoded).length <= 2e3 ? { value: encoded } : { unavailable: "Value exceeds the explanation snapshot limit" };
  } catch {
    return { unavailable: "Value is outside the supported observation format" };
  }
}
function executionRecorder(limit = 500) {
  if (!Number.isInteger(limit) || limit < 1 || limit > 1e3) throw new Error("Choose an execution explanation limit from 1 to 1000");
  const report = { version: 1, limit, dropped: 0, events: [] }, stack = [];
  let next = 0;
  const append = (event) => {
    const id = next++;
    if (report.events.length >= limit) {
      report.dropped++;
      return;
    }
    const parent = [...stack].reverse().find((id2) => id2 !== void 0);
    const row = { ...event, id, ...parent !== void 0 ? { parent } : {} };
    report.events.push(row);
    return id;
  };
  const observer = {
    begin(node, name, params, args) {
      const id = append({ kind: "call", node, name, params: [...params], args: snapshot(args), result: { unavailable: "Call has not completed" } });
      stack.push(id);
      return id;
    },
    end(id, run) {
      stack.pop();
      if (id === void 0) return;
      const row = report.events.find((e) => e.id === id);
      if (row?.kind !== "call") return;
      try {
        const result = capture(run);
        row.result = JSON.stringify(result).length <= 2200 ? { outcome: result } : { unavailable: "Result exceeds the explanation snapshot limit" };
      } catch {
        row.result = { unavailable: "Result is outside the supported observation format" };
      }
    },
    read(node, value) {
      append({ kind: "read", node, snapshot: snapshot(value) });
    },
    branch(node, operator, choice, target, skipped, reason) {
      append({ kind: "branch", node, operator, choice, target, skipped, reason });
    },
    rule(node, choice) {
      append({ kind: "rule", node, choice });
    },
    transition(node, from, to, choice) {
      append({ kind: "transition", node, from: snapshot(from), to: snapshot(to), choice });
    }
  };
  return { observer, report };
}

// src/generated-map.ts
function expressionLocations(code, nodes) {
  const result = {}, starts = /* @__PURE__ */ new Map(), lineStarts = [0];
  for (let i = 0; i < code.length; i++) if (code[i] === "\n") lineStarts.push(i + 1);
  function position(offset) {
    let lo = 0, hi = lineStarts.length;
    while (lo + 1 < hi) {
      const mid = lo + hi >> 1;
      if (lineStarts[mid] <= offset) lo = mid;
      else hi = mid;
    }
    return { line: lo + 1, column: offset - lineStarts[lo] + 1 };
  }
  for (let i = 0; i < code.length; ) {
    const c = code[i];
    if (c === '"' || c === "'" || c === "`") {
      const quote = c;
      i++;
      while (i < code.length) {
        if (code[i] === "\\") {
          i += 2;
          continue;
        }
        if (code[i++] === quote) break;
      }
      continue;
    }
    if (c === "/" && code[i + 1] === "/") {
      const end = code.indexOf("\n", i + 2);
      i = end < 0 ? code.length : end + 1;
      continue;
    }
    if (c === "/" && code[i + 1] === "*") {
      const end = code.indexOf("*/", i + 2);
      if (end < 0) throw new Error("Unterminated generated comment");
      const m = /^\/\*@i:(\d+):(start|end)\*\/$/.exec(code.slice(i, end + 2));
      if (m) {
        const n = Number(m[1]);
        if (m[2] === "start") starts.set(n, end + 2);
        else {
          const from = starts.get(n), id = nodes[n];
          if (from === void 0 || !id) throw new Error("Invalid generated expression markers");
          const start = position(from), finish = position(i);
          result[id] = { start: start.line, end: finish.line, column: start.column, endColumn: finish.column, offsetStart: from, offsetEnd: i, precision: "expression" };
          starts.delete(n);
        }
      }
      i = end + 2;
      continue;
    }
    i++;
  }
  if (starts.size) throw new Error("Unclosed generated expression markers");
  return result;
}

// src/projection-registry.ts
var projectionRegistry = { table: { targets: ["decision"], edits: ["set_expression", "move_rule", "insert_rule", "duplicate_rule", "remove_rule", "compose_condition", "wrap_conditional"] }, form: { targets: ["function", "decision"], edits: ["set_expression", "compose_condition", "wrap_conditional"] }, state: { targets: ["machine"], edits: ["set_expression", "set_transition", "add_state", "add_transition", "compose_condition", "wrap_conditional"] } };
function projectionTargets(bundle) {
  return [
    ...[...bundle.program.functions, ...bundle.language.operations].map((f) => ({ id: f.id, name: f.name, kind: "function" })),
    ...bundle.program.decisions.map((d) => ({ id: d.id, name: d.id, kind: "decision" })),
    ...bundle.program.machines.map((m) => ({ id: m.id, name: m.id, kind: "machine" }))
  ];
}
function validateProjections(bundle, errors) {
  const targets = projectionTargets(bundle), seen = /* @__PURE__ */ new Set();
  for (const view of bundle.projection.views) {
    const registry = projectionRegistry[view.kind], kind = targets.find((t) => t.id === view.target)?.kind;
    if (!registry || !kind || !registry.targets.includes(kind)) errors.push("Projection renderer does not support target: " + view.target);
    const key = view.kind + ":" + view.target;
    if (seen.has(key)) errors.push("Duplicate projection: " + key);
    seen.add(key);
    if (view.edits?.some((edit) => !registry.edits.includes(edit))) errors.push("Unsupported projection edit: " + view.target);
    if (view.edits && new Set(view.edits).size !== view.edits.length) errors.push("Duplicate projection edit: " + view.target);
  }
}

// src/source-origin.ts
var sourceOriginSchema = external_exports.object({ sourceId: external_exports.string(), start: external_exports.number().int().nonnegative(), end: external_exports.number().int().positive(), precision: external_exports.enum(["syntax", "lowering", "boundary"]), modelHash: external_exports.string().regex(/^[a-f0-9]{64}$/).optional() }).strict().superRefine((o, ctx) => {
  if (o.precision !== "boundary" && !o.modelHash) ctx.addIssue({ code: "custom", message: "Precise source origins require the recovered node fingerprint" });
});

// src/semantic-nodes.ts
function semanticNodes(b) {
  const out = [];
  const add = (id, node) => {
    if (id) out.push({ id, ...node });
  };
  const expr = (e, owner) => {
    add(e.id, { kind: "expression", owner, value: e, origin: e.origin });
    e.args?.forEach((a) => expr(a, owner));
  };
  for (const f of [...b.language.operations, ...b.program.functions]) {
    add(f.id, { kind: "function", name: f.name, value: f, sourceId: f.sourceId });
    expr(f.body, f.id);
  }
  for (const d of b.program.decisions) {
    add(d.id, { kind: "decision", value: d, sourceId: d.sourceId });
    for (const r of d.rules) {
      add(r.id, { kind: "rule", owner: d.id, value: r });
      expr(r.when, d.id);
      expr(r.result, d.id);
    }
    expr(d.otherwise, d.id);
  }
  for (const m of b.program.machines) {
    add(m.id, { kind: "machine", value: m, sourceId: m.sourceId });
    for (const name of m.states) add(m.stateIds?.[name], { kind: "state", owner: m.id, name, value: name, origin: m.stateOrigins?.[name] });
    for (const t of m.transitions) {
      add(t.id, { kind: "transition", owner: m.id, value: t, origin: t.origin });
      if (t.guard) expr(t.guard, m.id);
    }
  }
  for (const [name, t] of Object.entries(b.language.types)) {
    add(t.id, { kind: "type", name, value: t });
    for (const [field, type] of Object.entries(t.fields ?? {})) add(t.fieldIds?.[field], { kind: "field", owner: t.id, name: field, value: { name: field, type } });
  }
  for (const r of b.recovery?.retained ?? []) {
    add(r.id, { kind: "retained", value: r });
    for (const name of r.operations) add(r.operationIds?.[name], { kind: "retained-operation", owner: r.id, name, value: name });
  }
  return out;
}
function validateIdentities(b, errors) {
  const nodes = semanticNodes(b), ids = /* @__PURE__ */ new Set();
  for (const n of nodes) {
    if (ids.has(n.id)) errors.push("Duplicate canonical identity: " + n.id);
    ids.add(n.id);
    if (n.origin) {
      const e = b.evidence.find((e2) => e2.id === n.origin.sourceId);
      if (!e || n.origin.start >= n.origin.end || n.origin.end > e.source.length) errors.push("Invalid source origin: " + n.id);
    }
  }
  for (const m of b.program.machines) {
    if (m.stateIds && Object.keys(m.stateIds).some((k) => !m.states.includes(k))) errors.push("Identity for unknown state: " + m.id);
    if (m.stateOrigins && Object.keys(m.stateOrigins).some((k) => !m.states.includes(k) || !Object.hasOwn(m.stateIds ?? {}, k))) errors.push("Origin for unknown state: " + m.id);
  }
  for (const [name, t] of Object.entries(b.language.types)) if (t.fieldIds && (t.kind !== "record" || Object.keys(t.fieldIds).some((k) => !Object.hasOwn(t.fields ?? {}, k)))) errors.push("Identity for unknown field: " + name);
  for (const r of b.recovery?.retained ?? []) if (r.operationIds && Object.keys(r.operationIds).some((k) => !r.operations.includes(k))) errors.push("Identity for unknown retained operation: " + r.id);
  if (b.identityVersion === 1) {
    for (const node of nodes) if (!/^[A-Za-z_$][\w$]*$/.test(node.id) || node.id.length > 200) errors.push("Invalid canonical identity: " + node.id);
    const expression = (e) => {
      if (!e.id) errors.push("Missing expression identity");
      e.args?.forEach(expression);
    };
    [...b.language.operations, ...b.program.functions].forEach((f) => expression(f.body));
    b.program.decisions.forEach((d) => {
      d.rules.forEach((r) => {
        expression(r.when);
        expression(r.result);
      });
      expression(d.otherwise);
    });
    for (const m of b.program.machines) {
      for (const s of m.states) if (!Object.hasOwn(m.stateIds ?? {}, s)) errors.push("Missing state identity: " + s);
      m.transitions.forEach((t) => {
        if (t.guard) expression(t.guard);
        if (t.retained.some((id) => !b.recovery?.retained.some((r) => r.id === id))) errors.push("Dangling transition retained dependency: " + t.id);
      });
    }
    for (const [name, t] of Object.entries(b.language.types)) {
      if (!t.id) errors.push("Missing type identity: " + name);
      for (const f of Object.keys(t.fields ?? {})) if (!Object.hasOwn(t.fieldIds ?? {}, f)) errors.push("Missing field identity: " + name + "." + f);
    }
    for (const r of b.recovery?.retained ?? []) for (const op of r.operations) if (!Object.hasOwn(r.operationIds ?? {}, op)) errors.push("Missing retained operation identity: " + r.id);
  }
}

// src/behavior.ts
var behaviorApprovalSchema = external_exports.object({ version: external_exports.literal(1), id: external_exports.string(), caseId: external_exports.string(), caseHash: external_exports.string().regex(/^[a-f0-9]{64}$/), sourceCommit: external_exports.string(), adapterId: external_exports.string(), baseline: executionResultSchema, expected: executionResultSchema, domainCaseHash: external_exports.string().optional(), domainExpected: executionResultSchema.optional(), reason: external_exports.string().trim().min(8).max(2e3), actor: external_exports.string(), approvedAt: external_exports.string(), fromJob: external_exports.string() }).strict();
var behaviorSchema = external_exports.object({ version: external_exports.literal(1), approvals: external_exports.array(behaviorApprovalSchema).max(5e3) }).strict();
var expectationSchema = external_exports.discriminatedUnion("kind", [
  external_exports.object({ kind: external_exports.literal("return"), value: external_exports.unknown() }).strict(),
  external_exports.object({ kind: external_exports.literal("undefined") }).strict(),
  external_exports.object({ kind: external_exports.literal("throw"), name: external_exports.string().min(1), message: external_exports.string() }).strict(),
  external_exports.object({ kind: external_exports.literal("encoded"), outcome: executionResultSchema }).strict()
]);

// src/scenario-values.ts
var encodedArgumentsSchema = encodedValueSchema.refine((v) => v.tag === "array", "Scenario arguments must be an encoded array");
function scenarioArguments(s) {
  if (Object.hasOwn(s, "args") === Object.hasOwn(s, "encodedArgs")) throw new Error("Provide exactly one of args or encodedArgs");
  if (s.encodedArgs !== void 0) return decodeValue(encodedArgumentsSchema.parse(s.encodedArgs));
  if (!Array.isArray(s.args)) throw new Error("Scenario args must be an array");
  return s.args;
}
function losslessJson(value) {
  try {
    return stableJson(encodeValue(value)) === stableJson(encodeValue(JSON.parse(JSON.stringify(value))));
  } catch {
    return false;
  }
}

// src/type-validation.ts
function validateTypes(b, errors) {
  const types = b.language.types;
  const primitives = /* @__PURE__ */ new Set(["number", "string", "boolean", "any", "unknown"]);
  function base2(type) {
    let t = type, depth = 0;
    while (t.endsWith("?") || t.endsWith("[]")) {
      t = t.slice(0, t.endsWith("?") ? -1 : -2);
      if (++depth > 30) return void 0;
    }
    return /^[A-Za-z_$][\w$]*$/.test(t) ? t : void 0;
  }
  function ref(t) {
    const n = base2(t);
    if (!n) errors.push("Invalid or excessively nested type reference: " + t.slice(0, 160));
    else if (!primitives.has(n) && !Object.hasOwn(types, n)) errors.push("Unknown type: " + t);
  }
  for (const [name, d] of Object.entries(types)) {
    if (primitives.has(name)) errors.push("Domain type cannot shadow primitive: " + name);
    if (d.kind === "record" && (d.values !== void 0 || d.target !== void 0) || d.kind === "enum" && (d.fields !== void 0 || d.target !== void 0) || d.kind === "alias" && (d.fields !== void 0 || d.values !== void 0)) errors.push("Conflicting " + d.kind + " type properties: " + name);
    if (d.kind === "alias" && d.target) ref(d.target);
    if (d.kind === "record") for (const t of Object.values(d.fields ?? {})) ref(t);
    if (d.kind === "enum" && new Set(d.values).size !== d.values?.length) errors.push("Duplicate enum value: " + name);
  }
  for (const start of Object.keys(types)) {
    const seen = /* @__PURE__ */ new Set();
    let name = start;
    while (Object.hasOwn(types, name) && types[name]?.kind === "alias") {
      if (seen.has(name)) {
        errors.push("Recursive alias: " + start);
        break;
      }
      seen.add(name);
      const target = base2(types[name].target ?? "");
      if (!target) break;
      name = target;
    }
  }
  for (const f of [...b.language.operations, ...b.program.functions]) {
    for (const [p, t] of Object.entries(f.parameterTypes ?? {})) {
      if (!f.params.includes(p)) errors.push("Unknown typed parameter: " + p);
      ref(t);
    }
    if (f.resultType !== void 0) ref(f.resultType);
  }
}

// src/provenance-validation.ts
function validateProvenance(bundle, errors) {
  const evidence = new Map(bundle.evidence.map((e) => [e.id, e])), retained = new Map((bundle.recovery?.retained ?? []).map((r) => [r.id, r]));
  const references = (ids, owner) => {
    const seen = /* @__PURE__ */ new Set();
    for (const id of ids) {
      if (!retained.has(id)) errors.push("Dangling retained dependency: " + owner + " \u2192 " + id);
      if (seen.has(id)) errors.push("Duplicate retained dependency: " + owner + " \u2192 " + id);
      seen.add(id);
    }
  };
  for (const owner of [...bundle.language.operations, ...bundle.program.functions, ...bundle.program.decisions, ...bundle.program.machines]) if (owner.sourceId !== void 0 && !evidence.has(owner.sourceId)) errors.push("Dangling source evidence: " + owner.sourceId + " for " + owner.id);
  for (const source of bundle.evidence) {
    if (!source.id.trim()) errors.push("Source evidence identity is required");
    references(source.retained, "source " + source.id);
  }
  for (const m of bundle.program.machines) for (const t of m.transitions) references(t.retained, "transition " + t.id);
  for (const r of retained.values()) {
    if (!r.id.trim()) errors.push("Retained dependency identity is required");
    if (!/^[a-f0-9]{64}$/.test(r.hash)) errors.push("Invalid retained dependency digest: " + r.id);
    if (r.operations.some((op) => !op.trim()) || new Set(r.operations).size !== r.operations.length) errors.push("Invalid retained operation list: " + r.id);
  }
  const fileHashes = /* @__PURE__ */ new Map();
  for (const binding of bundle.recovery?.bindings ?? []) {
    references(binding.retained, "binding " + binding.id);
    if (!/^[a-f0-9]{64}$/.test(binding.sourceFileHash)) errors.push("Invalid source file digest: " + binding.id);
    const path = evidence.get(binding.sourceId)?.path;
    if (path !== void 0) {
      const previous = fileHashes.get(path);
      if (previous !== void 0 && previous !== binding.sourceFileHash) errors.push("Conflicting source revisions: " + path);
      fileHashes.set(path, binding.sourceFileHash);
    }
  }
}

// src/composition-validation.ts
var MAX_COMPOSITION_DEPTH = 80;
function validateComposition(bundle, errors) {
  const roots = new Map([...[...bundle.language.operations, ...bundle.program.functions].map((f) => [f.name, [f.body]]), ...bundle.program.decisions.map((d) => [d.id, [...d.rules.flatMap((r) => [r.when, r.result]), d.otherwise]])]), edges = /* @__PURE__ */ new Map();
  for (const [name, expressions] of roots) {
    const calls = /* @__PURE__ */ new Set(), stack = [...expressions];
    while (stack.length) {
      const e = stack.pop();
      if (e.op === "call" && e.name && roots.has(e.name)) calls.add(e.name);
      for (const child of e.args ?? []) stack.push(child);
    }
    edges.set(name, calls);
  }
  const state = /* @__PURE__ */ new Map(), order = [];
  let recursive = false;
  for (const name of roots.keys()) {
    const stack = [{ name }];
    while (stack.length) {
      const current = stack.pop();
      if (current.exit) {
        state.set(current.name, 2);
        order.push(current.name);
        continue;
      }
      const color = state.get(current.name);
      if (color === 2) continue;
      if (color === 1) {
        recursive = true;
        errors.push("Recursive operation: " + current.name);
        continue;
      }
      state.set(current.name, 1);
      stack.push({ ...current, exit: true });
      for (const child of edges.get(current.name) ?? []) stack.push({ name: child });
    }
  }
  if (recursive) return false;
  const weights = /* @__PURE__ */ new Map();
  let exceeded = false;
  function expressionDepth(root) {
    let max = 0;
    const stack = [{ e: root, depth: 0 }];
    while (stack.length) {
      const { e, depth } = stack.pop();
      max = Math.max(max, depth + (e.op === "call" ? 1 + (weights.get(e.name ?? "") ?? 0) : 0));
      if (max > MAX_COMPOSITION_DEPTH) return MAX_COMPOSITION_DEPTH + 1;
      for (const child of e.args ?? []) stack.push({ e: child, depth: depth + 1 });
    }
    return max;
  }
  for (const name of order) {
    let depth = 0;
    for (const root of roots.get(name)) depth = Math.max(depth, expressionDepth(root));
    weights.set(name, depth);
    if (depth > MAX_COMPOSITION_DEPTH && !exceeded) {
      exceeded = true;
      errors.push("Operation composition depth exceeded (" + MAX_COMPOSITION_DEPTH + "): " + name);
    }
  }
  for (const m of bundle.program.machines) for (const t of m.transitions) if (t.guard && expressionDepth(t.guard) > MAX_COMPOSITION_DEPTH && !exceeded) {
    exceeded = true;
    errors.push("Operation composition depth exceeded (" + MAX_COMPOSITION_DEPTH + "): " + t.id);
  }
  return !exceeded;
}

// src/compiler-contract.ts
var DEFAULT_COMPILER = "0.5.0";
var AVAILABLE_COMPILERS = ["0.5.0", "0.5.1"];
function compilerVersion(value) {
  if (!AVAILABLE_COMPILERS.includes(value)) throw new Error("Unsupported compiler version: " + value);
  return value;
}
function temporaryBindings(f, version, exports2) {
  const occupied = /* @__PURE__ */ new Set([...f.params, ...version === "0.5.1" ? exports2 : []]), unique = (stem) => {
    let name = stem;
    while (occupied.has(name)) name += "_";
    occupied.add(name);
    return name;
  };
  return { result: unique("__result"), errors: unique("__errors") };
}
function machineBindings(version, exports2) {
  const unique = (stem) => {
    let name = stem;
    if (version === "0.5.1") while (exports2.includes(name)) name += "_";
    return name;
  };
  return { from: unique("from"), to: unique("to") };
}

// src/program-identity.ts
function programIdentity(bundle, compiler = bundle.compilerVersion ?? DEFAULT_COMPILER) {
  return { language: bundle.language, program: bundle.program, compiler };
}

// src/revision-contract.ts
var MAX_REVISION = 2147483647;
var revisionSchema = external_exports.number().int().min(0).max(MAX_REVISION);
var revisionRequestSchema = external_exports.object({ version: external_exports.literal(1).optional(), expectedRevision: revisionSchema }).passthrough();

// src/scenario-report-contract.ts
var fingerprint = external_exports.string().regex(/^[a-f0-9]{64}$/);
var scenarioCheckCaseSchema = external_exports.object({ id: external_exports.string().min(1).max(160), ok: external_exports.boolean(), actual: executionResultSchema, expected: executionResultSchema, originalExpected: executionResultSchema, classification: external_exports.enum(["compatibility", "approved-change"]) }).strict().superRefine((c, ctx) => {
  try {
    const actual = canonicalOutcome(c.actual), expected = canonicalOutcome(c.expected), original = canonicalOutcome(c.originalExpected);
    if (c.ok !== sameOutcome(actual, expected)) ctx.addIssue({ code: "custom", message: "Scenario pass flag contradicts its actual and expected outcomes" });
    if (c.classification === "compatibility" && !sameOutcome(expected, original)) ctx.addIssue({ code: "custom", message: "Compatibility results must preserve the independent expectation" });
  } catch {
    ctx.addIssue({ code: "custom", message: "Scenario result is outside the supported observation format" });
  }
});
var scenarioReportSchema = external_exports.object({ version: external_exports.literal(1), scope: external_exports.literal("domain-scenarios"), status: external_exports.enum(["passed", "failed", "unverified"]), compiler: external_exports.enum(AVAILABLE_COMPILERS), programHash: fingerprint, scenarioHash: fingerprint, revision: revisionSchema.optional(), cases: external_exports.array(scenarioCheckCaseSchema), limitations: external_exports.array(external_exports.string().min(1)).min(1) }).strict().superRefine((r, ctx) => {
  if (new Set(r.cases.map((c) => c.id)).size !== r.cases.length) ctx.addIssue({ code: "custom", message: "Duplicate scenario result" });
  const status = !r.cases.length ? "unverified" : r.cases.every((c) => c.ok) ? "passed" : "failed";
  if (status !== r.status) ctx.addIssue({ code: "custom", message: "Scenario report status contradicts its checked cases" });
});

// src/types.ts
function checkValue(value, type, language, depth = 0) {
  if (depth > 30) return ["Type nesting limit exceeded"];
  if (type.endsWith("?")) return value == null ? [] : checkValue(value, type.slice(0, -1), language, depth + 1);
  if (type.endsWith("[]")) return !Array.isArray(value) ? ["Expected list"] : value.flatMap((v, i) => checkValue(v, type.slice(0, -2), language, depth + 1).map((e) => i + ": " + e));
  if (type === "unknown" || type === "any") return [];
  if (["string", "number", "boolean"].includes(type)) return typeof value === type ? [] : ["Expected " + type];
  const d = language.types[type];
  if (!d) return ["Unknown type " + type];
  if (d.kind === "alias") return checkValue(value, d.target, language, depth + 1);
  if (d.kind === "enum") return d.values?.includes(value) ? [] : ["Expected " + d.values?.join(" | ")];
  if (typeof value !== "object" || value === null || Array.isArray(value)) return ["Expected record " + type];
  return Object.entries(d.fields ?? {}).flatMap(([field, t]) => checkValue(value[field], t, language, depth + 1).map((e) => field + ": " + e));
}

// src/binding-contract.ts
function emittedBindings(b) {
  return [...b.language.operations, ...b.program.functions].map((f) => f.name).concat(b.program.decisions.map((d) => d.id), b.program.machines.flatMap((m) => [m.id, m.id + "Definition", m.id + "Transitions"]));
}
function validateBindings(b, version, reserved, errors) {
  const bindings = emittedBindings(b), seen = /* @__PURE__ */ new Set();
  for (const name of bindings) {
    if (seen.has(name)) errors.push("Conflicting generated export: " + name);
    seen.add(name);
    if (reserved.has(name)) errors.push("Reserved generated binding: " + name);
  }
  for (const d of b.program.decisions) if (new Set(d.params).size !== d.params.length) errors.push("Duplicate decision parameter: " + d.id);
  if (version === "0.5.0") for (const f of [...b.language.operations, ...b.program.functions]) {
    const local = temporaryBindings(f, version, bindings), calls = /* @__PURE__ */ new Set();
    const walk = (e) => {
      if (e.op === "call") calls.add(e.name);
      e.args?.forEach(walk);
    };
    walk(f.body);
    for (const name of [local.result, ...f.resultType ? [local.errors] : []]) if (calls.has(name)) errors.push("Compiler 0.5.0 temporary binding shadows operation " + name + " in " + f.name + "; explicitly select compiler 0.5.1");
  }
  if (version === "0.5.0") for (const m of b.program.machines) for (const t of m.transitions) {
    const walk = (e) => {
      if (e.op === "call" && ["from", "to"].includes(e.name)) errors.push("Compiler 0.5.0 workflow parameter shadows operation " + e.name + " in " + m.id + "; explicitly select compiler 0.5.1");
      e.args?.forEach(walk);
    };
    if (t.guard) walk(t.guard);
  }
}

// src/authoring-contract.ts
var declaration = external_exports.object({ ownerId: external_exports.string(), name: external_exports.string(), kind: external_exports.enum(["input", "local", "item", "accumulator", "field"]) }).strict();
var vocabularySchema = external_exports.object({ version: external_exports.literal(1), terms: external_exports.array(external_exports.object({ target: external_exports.string().min(1).max(600), label: external_exports.string().trim().min(1).max(160), description: external_exports.string().trim().max(2e3), declaration: declaration.optional() }).strict()).max(500), meanings: external_exports.array(external_exports.object({ target: external_exports.string().min(1).max(600), type: external_exports.string().min(1).max(256), declaration }).strict()).max(500).optional() }).strict();

// src/expression-patterns.ts
function addsSelectedField(e) {
  const a = e.args ?? [], next = a[2];
  return e.op === "fold" && a[1]?.op === "literal" && a[1].value === 0 && next?.op === "add" && next.args?.[0]?.op === "get" && next.args[0].path === e.path && next.args?.[1]?.op === "at" && next.args[1].args?.[0]?.op === "get" && next.args[1].args[0].path === e.name && next.args[1].args?.[1]?.op === "get";
}
function sourceHelperLabel(name, sourceId, body) {
  if (!sourceId) return name;
  return addsSelectedField(body) ? "Add field values" : name.replace(/^operation_[a-f0-9]{10}_/, "");
}

// src/meaning-types.ts
function meaningBase(bundle, input) {
  let type = input;
  const seen = /* @__PURE__ */ new Set();
  for (let i = 0; type && i < 60; i++) {
    if (type.endsWith("?")) {
      type = type.slice(0, -1);
      continue;
    }
    if (seen.has(type)) return;
    seen.add(type);
    const d = bundle.language.types[type];
    if (d?.kind === "alias") {
      type = d.target;
      continue;
    }
    return type;
  }
}
function meaningField(bundle, input, key) {
  const type = meaningBase(bundle, input), definition = type && bundle.language.types[type];
  return definition && definition.kind === "record" ? { type: definition.fields?.[key], fieldId: definition.fieldIds?.[key], recordId: definition.id } : void 0;
}
function meaningPath(bundle, type, segments) {
  for (const key of segments) type = meaningField(bundle, type, key)?.type;
  return type;
}
function meaningItem(bundle, type) {
  const base2 = meaningBase(bundle, type);
  return base2?.endsWith("[]") ? base2.slice(0, -2) : void 0;
}
function validMeaning(bundle, type) {
  let t = type, count = 0;
  while (t.endsWith("?") || t.endsWith("[]")) {
    t = t.slice(0, t.endsWith("?") ? -1 : -2);
    if (++count > 30) return false;
  }
  return /^[A-Za-z_$][\w$]*$/.test(t) && (["number", "string", "boolean", "any", "unknown"].includes(t) || Object.hasOwn(bundle.language.types, t));
}

// src/domain-atlas.ts
var readableName = (name) => name.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ").replace(/^./, (s) => s.toUpperCase());
var resultOf = (e) => !e ? "Incomplete expression" : e.op === "let" ? resultOf(e.args?.[1]) : ["eq", "ne", "lt", "le", "gt", "ge", "not", "isArray", "some", "every", "includes"].includes(e.op) ? "True or false" : ["filter", "map", "array"].includes(e.op) ? "A list" : e.op === "record" ? "A record of named fields" : "A value; no result type is declared";
function domainAtlas(bundle) {
  const atlas = { version: 1, concepts: [], bindings: [], references: [], records: [], sharedFields: [], locations: [], calls: [], integrationLinks: [], unresolved: [] }, bindings = /* @__PURE__ */ new Map(), callNames = /* @__PURE__ */ new Map();
  const terms = new Map(bundle.projection.vocabulary?.terms.map((t) => [t.target, t]) ?? []), meanings = new Map(bundle.projection.vocabulary?.meanings?.map((m) => [m.target, m.type]) ?? []);
  for (const [name, r] of Object.entries(bundle.language.types)) {
    if (r.kind !== "record") continue;
    const id = r.id ?? "type:" + name;
    atlas.records.push({ id, name, label: terms.get(id)?.label ?? readableName(name), description: terms.get(id)?.description ?? "A declared domain record. Meaning links guide authoring; input runtime checks are shown separately.", fields: Object.entries(r.fields ?? {}).map(([field, type]) => {
      const fieldId = r.fieldIds?.[field] ?? id + "/" + field;
      atlas.sharedFields.push({ id: fieldId, recordId: id, name: field, label: terms.get(fieldId)?.label ?? readableName(field), description: terms.get(fieldId)?.description ?? "Shared field meaning from " + name + ".", type, uses: [] });
      return fieldId;
    }) });
  }
  const addBinding = (binding) => {
    const term = terms.get(binding.id);
    if (term) {
      binding.label = term.label;
      binding.description = term.description;
    }
    binding.meaningType = meanings.get(binding.id) ?? binding.meaningType ?? binding.type;
    bindings.set(binding.id, binding);
    atlas.bindings.push(binding);
    return binding.id;
  };
  const scopeIds = (scope) => [...new Set(scope.values())];
  const concepts = [...bundle.language.operations.map((f) => ({ ...f, kind: "vocabulary-operation" })), ...bundle.program.functions.map((f) => ({ ...f, kind: "calculation" })), ...bundle.program.decisions.map((d) => ({ ...d, name: d.id, kind: bundle.recovery?.bindings.some((b) => b.target === d.id && b.kind === "guard") ? "transition-policy" : "decision" })), ...bundle.program.machines.map((m) => ({ ...m, name: m.id, params: ["from", "to", "context"], kind: m.kind === "graph" ? "graph" : "workflow" }))];
  for (const f of concepts) {
    const term = terms.get(f.id), view = bundle.projection.views.find((v) => v.target === f.id), kind = f.kind;
    callNames.set(f.name, f.id);
    atlas.concepts.push({ id: f.id, name: f.name, label: term?.label ?? (view && view.title !== f.name ? view.title : readableName(kind === "vocabulary-operation" && "body" in f ? sourceHelperLabel(f.name, f.sourceId, f.body) : f.name)), kind, description: term?.description ?? (kind === "transition-policy" ? "Ordered checks return either a refusal outcome or permission to continue in the original process. Continuing does not bypass other checks." : kind === "decision" ? "Rules are tried in order. The first match returns its outcome; the fallback handles no match." : kind === "graph" ? "Defines available source and destination states. Original process checks still determine whether an available move succeeds." : kind === "workflow" ? "Defines states, available transitions and their modeled conditions." : "Computes a value from its inputs. Calls below show which other modeled definitions it uses."), result: kind === "transition-policy" ? "Continue, or return an explicit outcome" : "body" in f ? "resultType" in f && f.resultType ? f.resultType : resultOf(f.body) : "rules" in f ? "The first matching outcome, or the fallback" : "An available move; additional process checks may apply", sourceId: f.sourceId, calls: [], callers: [], inputs: [], retained: bundle.recovery?.bindings.find((b) => b.target === f.id)?.retained ?? [], views: bundle.projection.views.filter((v) => v.target === f.id).map((v) => v.kind) });
  }
  const knownPath = (e, scope) => {
    if (!e) return;
    if (e.op === "get") {
      const [name, ...parts] = (e.path ?? "").split("."), bindingId = scope.get(name);
      return bindingId ? { bindingId, segments: parts } : void 0;
    }
    if (e.op === "at" && e.args?.[1]?.op === "literal" && typeof e.args[1].value === "string") {
      const receiver = knownPath(e.args[0], scope);
      return receiver ? { ...receiver, segments: [...receiver.segments, e.args[1].value] } : void 0;
    }
  };
  const absent = (e) => !!e && (e.op === "literal" && (e.value === void 0 || e.value === null || Array.isArray(e.value) && e.value.length === 0) || e.op === "array" && !e.args?.length);
  function hint(e, scope, depth = 0) {
    if (!e || depth > 40) return;
    const path = knownPath(e, scope);
    if (path) {
      const b = bindings.get(path.bindingId);
      return meaningPath(bundle, b?.meaningType ?? b?.type, path.segments);
    }
    const a = e.args ?? [];
    if (e.op === "filter") return hint(a[0], scope, depth + 1);
    if (e.op === "find") return meaningItem(bundle, hint(a[0], scope, depth + 1));
    if (e.op === "if" || e.op === "coalesce") {
      const left = a[e.op === "if" ? 1 : 0], right = a[e.op === "if" ? 2 : 1], l = hint(left, scope, depth + 1), r = hint(right, scope, depth + 1);
      return l === r ? l : l && absent(right) ? l : r && absent(left) ? r : void 0;
    }
    if (e.op === "call") return [...bundle.program.functions, ...bundle.language.operations].find((f) => f.name === e.name)?.resultType;
  }
  function fieldReference(ownerId, e, nodeId, path, scope) {
    const receiver = bindings.get(path.bindingId), id = "field:" + path.bindingId + ":" + encodeURIComponent(JSON.stringify(path.segments)), display = path.segments.map((s) => /^[A-Za-z_$][\w$]*$/.test(s) ? s : JSON.stringify(s)).join(" \u2192 ");
    let binding = bindings.get(id);
    if (!binding) {
      let type = receiver.type, meaningType = receiver.meaningType ?? type, sharedFieldId;
      for (const member of path.segments) {
        const f = meaningField(bundle, meaningType, member);
        sharedFieldId = f?.fieldId;
        type = meaningField(bundle, type, member)?.type;
        meaningType = f?.type;
      }
      const shared2 = atlas.sharedFields.find((f) => f.id === sharedFieldId);
      addBinding(binding = { id, ownerId, name: path.segments.join("."), kind: "field", label: receiver.label + " \u2192 " + (shared2 ? [...path.segments.slice(0, -1), shared2.label].join(" \u2192 ") : display), description: "A field read from " + receiver.label + ". This is distinct from equally named inputs and fields on other values.", type, meaningType, sharedFieldId, uses: [], receiver: path.bindingId, field: path.segments.join("."), fieldSegments: path.segments });
    }
    binding.uses.push(nodeId);
    const shared = atlas.sharedFields.find((f) => f.id === binding.sharedFieldId);
    if (shared && !shared.uses.includes(nodeId)) shared.uses.push(nodeId);
    atlas.references.push({ nodeId, ownerId, bindingId: id, kind: "field", path: path.segments.join("."), ...e.op === "at" ? { fieldKey: path.segments.at(-1) } : {}, scope: scopeIds(scope), receiver: path.bindingId });
  }
  function walk(e, ownerId, scope, fallback) {
    if (!e) return;
    const id = e.id ?? fallback, a = e.args ?? [];
    atlas.locations.push({ nodeId: id, ownerId, scope: scopeIds(scope) });
    if (e.op === "get") {
      const [head, ...members] = (e.path ?? "").split("."), bindingId = scope.get(head);
      if (!bindingId) {
        atlas.unresolved.push({ nodeId: id, name: e.path ?? "", ownerId });
        atlas.references.push({ nodeId: id, ownerId, kind: "value", path: e.path ?? "", scope: scopeIds(scope) });
      } else if (members.length) fieldReference(ownerId, e, id, { bindingId, segments: members }, scope);
      else {
        bindings.get(bindingId).uses.push(id);
        atlas.references.push({ nodeId: id, ownerId, bindingId, kind: "value", path: e.path, scope: scopeIds(scope), definitionNode: bindings.get(bindingId).definedAt });
      }
      return;
    }
    if (e.op === "call") {
      const to = callNames.get(e.name);
      if (to) atlas.calls.push({ from: ownerId, to, nodeId: id });
    }
    if (e.op === "at" && a[1]?.op === "literal" && typeof a[1].value === "string") {
      const path = knownPath(e, scope);
      if (path) fieldReference(ownerId, e, a[1].id ?? id + "/field", path, scope);
    }
    if (e.op === "let" || ["filter", "map", "some", "every", "find", "fold"].includes(e.op)) {
      const fold = e.op === "fold", local = e.op === "let";
      walk(a[0], ownerId, scope, id + "/0");
      if (fold) walk(a[1], ownerId, scope, id + "/1");
      const collection = knownPath(a[0], scope), collectionLabel = collection ? [bindings.get(collection.bindingId)?.name, ...collection.segments].join(".") : "the collection at this step";
      const nested = new Map(scope), name = e.name ?? "item", bindingId = addBinding({ id: "binding:" + id + ":" + (local ? "local" : "item"), ownerId, name, kind: local ? "local" : "item", label: local ? "Local value: " + name : "Each " + name + " in " + collectionLabel, description: local ? "Defined by this calculation step; available only in its continuation." : "One item in " + collectionLabel + "; available only inside this collection expression.", definedAt: id, meaningType: local ? hint(a[0], scope) : meaningItem(bundle, hint(a[0], scope)), uses: [] });
      nested.set(name, bindingId);
      if (fold) {
        const accumulator = e.path, accId = addBinding({ id: "binding:" + id + ":accumulator", ownerId, name: accumulator, kind: "accumulator", label: "Running total: " + accumulator, description: "The accumulated value for this fold step. It is a separate local declaration.", definedAt: id, meaningType: hint(a[1], scope), uses: [] });
        nested.set(accumulator, accId);
      }
      walk(a[fold ? 2 : 1], ownerId, nested, id + "/" + (fold ? 2 : 1));
      return;
    }
    a.forEach((child, i) => walk(child, ownerId, scope, id + "/" + i));
  }
  for (const f of concepts) {
    const scope = /* @__PURE__ */ new Map(), concept = atlas.concepts.find((c) => c.id === f.id);
    f.params.forEach((name, i) => {
      const type = "parameterTypes" in f ? f.parameterTypes?.[name] : void 0, id = addBinding({ id: "input:" + f.id + ":" + i, ownerId: f.id, name, kind: "input", label: "Input: " + name, description: "An input to " + concept.label + ". All uses linked here read this declaration; another definition may have an input with the same spelling.", type, uses: [] });
      scope.set(name, id);
      concept.inputs.push(id);
    });
    if ("body" in f) walk(f.body, f.id, scope, f.id + "/body");
    else if ("rules" in f) {
      f.rules.forEach((r) => {
        walk(r.when, f.id, scope, r.id + "/when");
        walk(r.result, f.id, scope, r.id + "/result");
      });
      walk(f.otherwise, f.id, scope, f.id + "/otherwise");
    } else for (const t of f.transitions) if (t.guard) walk(t.guard, f.id, /* @__PURE__ */ new Map([["context", scope.get("context")]]), t.id + "/guard");
  }
  for (const c of atlas.concepts) {
    c.calls = [...new Set(atlas.calls.filter((r) => r.from === c.id).map((r) => r.to))];
    c.callers = [...new Set(atlas.calls.filter((r) => r.to === c.id).map((r) => r.from))];
  }
  const sourceBindings = bundle.recovery?.bindings ?? [];
  for (let i = 0; i < sourceBindings.length; i++) for (let j = i + 1; j < sourceBindings.length; j++) {
    const from = sourceBindings[i], to = sourceBindings[j], a = bundle.evidence.find((e) => e.id === from.sourceId), b = bundle.evidence.find((e) => e.id === to.sourceId);
    if (a && b && a.path === b.path && from.kind !== to.kind) atlas.integrationLinks.push({ from: from.target, to: to.target, path: a.path, kind: "shared-source-file", description: "Integrated in the same original source file. This is source context, not a modeled call or a claim that one check runs for every transition." });
  }
  return atlas;
}
function validateVocabulary(bundle, errors) {
  if (!bundle.projection.vocabulary) return;
  const atlas = domainAtlas(bundle), targets = new Set([...atlas.concepts, ...atlas.bindings, ...atlas.records, ...atlas.sharedFields].map((x) => x.id)), seen = /* @__PURE__ */ new Set();
  for (const term of bundle.projection.vocabulary.terms) {
    if (!targets.has(term.target)) errors.push("Vocabulary target no longer exists: " + term.target + "; remove or reassign its authored documentation in the same change");
    if (term.declaration) {
      const b = atlas.bindings.find((b2) => b2.id === term.target);
      if (!b || b.ownerId !== term.declaration.ownerId || b.name !== term.declaration.name || b.kind !== term.declaration.kind) errors.push("Vocabulary declaration changed; review its meaning before reassigning documentation: " + term.target);
    }
    if (seen.has(term.target)) errors.push("Duplicate vocabulary target: " + term.target);
    seen.add(term.target);
  }
  const assigned = /* @__PURE__ */ new Set();
  for (const m of bundle.projection.vocabulary.meanings ?? []) {
    const b = atlas.bindings.find((b2) => b2.id === m.target);
    if (!b || b.kind === "field" || b.ownerId !== m.declaration.ownerId || b.name !== m.declaration.name || b.kind !== m.declaration.kind) errors.push("Meaning declaration changed or is missing: " + m.target);
    if (!validMeaning(bundle, m.type)) errors.push("Unknown or invalid domain meaning: " + m.type);
    if (b?.type && b.type !== m.type) errors.push("Domain meaning conflicts with the declared runtime type: " + m.target);
    if (assigned.has(m.target)) errors.push("Duplicate meaning assignment: " + m.target);
    assigned.add(m.target);
  }
}

// src/domain.ts
var import_node_crypto = require("node:crypto");
var VERSION = DEFAULT_COMPILER;
var exprSchema = external_exports.lazy(() => external_exports.object({ id: external_exports.string().optional(), origin: sourceOriginSchema.optional(), diagnostic: external_exports.string().max(500).optional(), fields: external_exports.array(external_exports.string()).optional(), mode: external_exports.enum(["iterate", "reduce"]).optional(), op: external_exports.string(), args: external_exports.array(exprSchema).optional(), value: external_exports.unknown().optional(), path: external_exports.string().optional(), name: external_exports.string().optional() }).strict());
var expressionSchema = guardedArtifactSchema(exprSchema);
var identifier = external_exports.string().regex(/^[A-Za-z_$][\w$]*$/);
var functionSchema = guardedArtifactSchema(external_exports.object({ id: identifier, name: identifier, params: external_exports.array(identifier), sourceParameters: external_exports.array(identifier).optional(), body: exprSchema, parameterTypes: external_exports.record(external_exports.string()).optional(), resultType: external_exports.string().optional(), sourceId: external_exports.string().optional() }).strict());
var languageSchema = guardedArtifactSchema(external_exports.object({ version: external_exports.literal(1), name: external_exports.string(), types: external_exports.record(external_exports.object({ id: identifier.optional(), fieldIds: external_exports.record(identifier).optional(), kind: external_exports.enum(["record", "enum", "alias"]), fields: external_exports.record(external_exports.string()).optional(), values: external_exports.array(external_exports.string()).optional(), target: external_exports.string().optional() }).strict()), operations: external_exports.array(functionSchema) }).strict());
var programSchema = guardedArtifactSchema(external_exports.object({ version: external_exports.literal(1), name: external_exports.string(), functions: external_exports.array(functionSchema), machines: external_exports.array(external_exports.object({ id: identifier, initial: external_exports.string().optional(), kind: external_exports.enum(["workflow", "graph"]).optional(), sourceId: external_exports.string().optional(), stateIds: external_exports.record(identifier).optional(), stateOrigins: external_exports.record(sourceOriginSchema).optional(), states: external_exports.array(external_exports.string()), transitions: external_exports.array(external_exports.object({ id: identifier, from: external_exports.string(), to: external_exports.string(), origin: sourceOriginSchema.optional(), guard: exprSchema.optional(), retained: external_exports.array(external_exports.string()).default([]) }).strict()) }).strict()), decisions: external_exports.array(external_exports.object({ id: identifier, params: external_exports.array(identifier), sourceParameters: external_exports.array(identifier).optional(), rules: external_exports.array(external_exports.object({ id: identifier, when: exprSchema, result: exprSchema }).strict()), otherwise: exprSchema, sourceId: external_exports.string().optional() }).strict()) }).strict());
var recoverySchema = external_exports.object({ version: external_exports.literal(1), source: external_exports.object({ commit: external_exports.string().regex(/^[a-f0-9]{40}$/), repository: external_exports.string().optional() }).strict().optional(), bindings: external_exports.array(external_exports.object({ id: external_exports.string(), kind: external_exports.enum(["function", "graph", "guard"]), target: external_exports.string(), sourceId: external_exports.string(), sourceFileHash: external_exports.string(), params: external_exports.array(external_exports.string()), retained: external_exports.array(external_exports.string()) }).strict()), retained: external_exports.array(external_exports.object({ id: external_exports.string(), label: external_exports.string(), path: external_exports.string(), start: external_exports.number().int().positive(), end: external_exports.number().int().positive(), hash: external_exports.string(), position: external_exports.enum(["before", "after", "hook"]), operations: external_exports.array(external_exports.string()), operationIds: external_exports.record(identifier).optional() }).strict()) }).strict();
var evidenceSchema = external_exports.object({ id: external_exports.string(), path: external_exports.string(), start: external_exports.number().int().positive(), end: external_exports.number().int().positive(), source: external_exports.string(), hash: external_exports.string(), retained: external_exports.array(external_exports.string()) }).strict();
var projectionSchema = external_exports.object({ version: external_exports.literal(1), vocabulary: vocabularySchema.optional(), views: external_exports.array(external_exports.object({ kind: external_exports.enum(["table", "form", "state"]), target: external_exports.string(), title: external_exports.string(), edits: external_exports.array(external_exports.enum(["set_expression", "set_transition", "move_rule", "add_state", "add_transition", "insert_rule", "duplicate_rule", "remove_rule", "compose_condition", "wrap_conditional"])).optional() }).strict()) }).strict();
var resultSchema = executionResultSchema;
var scenarioSchema = guardedArtifactSchema(external_exports.object({ version: external_exports.literal(1).optional(), id: external_exports.string().min(1).max(160), kind: external_exports.enum(["compatibility", "approved-change"]), entry: external_exports.string(), args: external_exports.array(external_exports.unknown()).max(1e4).optional(), encodedArgs: encodedArgumentsSchema.optional(), expected: external_exports.unknown().optional(), expectedOutcome: resultSchema.optional(), reason: external_exports.string().max(2e3).optional() }).strict().superRefine((s, ctx) => {
  try {
    scenarioArguments(s);
  } catch (e) {
    ctx.addIssue({ code: "custom", message: e.message });
  }
  if (s.args && !losslessJson(s.args)) ctx.addIssue({ code: "custom", message: "Use encodedArgs to preserve undefined, missing values, special numbers and negative zero" });
  if (Object.hasOwn(s, "expected") && (!losslessJson(s.expected) || s.expectedOutcome)) ctx.addIssue({ code: "custom", message: "Provide one lossless expected value, or use expectedOutcome" });
  if (s.kind === "approved-change" && (!s.expectedOutcome && !Object.hasOwn(s, "expected") || (s.reason?.trim().length ?? 0) < 8)) ctx.addIssue({ code: "custom", message: "New behavior requires an independent expectation and a reason of at least eight characters" });
}));
var bundleSchema = guardedArtifactSchema(external_exports.object({ compilerVersion: external_exports.enum(["0.5.0", "0.5.1"]).optional(), identityVersion: external_exports.literal(1).optional(), behavior: behaviorSchema.optional(), recovery: recoverySchema.optional(), language: languageSchema, program: programSchema, projection: projectionSchema, evidence: external_exports.array(evidenceSchema), scenarios: external_exports.array(scenarioSchema), unresolved: external_exports.array(external_exports.string()) }).strict());
var changeSetSchema = external_exports.object({ version: external_exports.literal(1), expectedRevision: revisionSchema, summary: external_exports.string().trim().min(1).max(2e3), bundle: bundleSchema }).strict();
var legacyChangeSetSchema = changeSetSchema.omit({ version: true }).extend({ summary: changeSetSchema.shape.summary.optional() }).strict();
var ops = /* @__PURE__ */ new Set(["literal", "get", "array", "if", "and", "or", "not", "eq", "ne", "lt", "le", "gt", "ge", "add", "sub", "mul", "div", "mod", "abs", "neg", "filter", "map", "sum", "every", "some", "includes", "length", "coalesce", "call", "at", "isArray", "let", "fold", "find", "record"]);
var forbidden = /* @__PURE__ */ new Set(["__proto__", "prototype", "constructor"]);
function hash(v) {
  return (0, import_node_crypto.createHash)("sha256").update(stableJson(v) ?? "undefined").digest("hex");
}
function validate(b, compiler) {
  const structure = inspectArtifactData(b);
  if (structure.errors.length) return structure.errors;
  try {
    compilerVersion(compiler ?? b?.compilerVersion ?? VERSION);
  } catch (error) {
    return [error.message];
  }
  const errors = [];
  const envelope = bundleSchema.safeParse(b);
  if (!envelope.success) return [envelope.error.message];
  for (const [label, schema, value] of [["language", languageSchema, b.language], ["program", programSchema, b.program]]) {
    const r = schema.safeParse(value);
    if (!r.success) errors.push(label + ": " + r.error.message);
  }
  if (errors.length) return errors;
  for (const [name, definition] of Object.entries(b.language.types)) {
    if (!/^[A-Za-z_$][\w$]*$/.test(name)) errors.push("Invalid type name");
    if (definition.kind === "alias" && !definition.target) errors.push("Alias target required");
    if (definition.kind === "enum" && !definition.values?.length) errors.push("Enum values required");
  }
  const all = [...b.language.operations, ...b.program.functions];
  const names = /* @__PURE__ */ new Set([...all.map((f) => f.name), ...b.program.decisions.map((d) => d.id)]);
  if (names.size !== all.length + b.program.decisions.length) errors.push("Duplicate function names");
  if (b.behavior && new Set(b.behavior.approvals.map((a) => a.caseId)).size !== b.behavior.approvals.length) errors.push("Duplicate behavior approvals");
  const evidenceIds = /* @__PURE__ */ new Set();
  for (const evidence of b.evidence) {
    if (evidenceIds.has(evidence.id)) errors.push("Duplicate source evidence: " + evidence.id);
    evidenceIds.add(evidence.id);
    if (evidence.end < evidence.start || hash(evidence.source) !== evidence.hash) errors.push("Invalid source evidence: " + evidence.id);
  }
  for (const m of b.program.machines) for (const t of m.transitions) if (!Array.isArray(t.retained)) errors.push("Explicit retained-operation list required: " + t.id + "; use retained: [] when empty");
  if (errors.length) return errors;
  validateTypes(b, errors);
  validateIdentities(b, errors);
  validateProvenance(b, errors);
  const ids = /* @__PURE__ */ new Set();
  const checkId = (id) => {
    if (ids.has(id)) errors.push("Duplicate node id: " + id);
    ids.add(id);
  };
  const walk = (e, depth = 0) => {
    if (depth > 80) {
      errors.push("Expression depth exceeded");
      return;
    }
    if (e.id) checkId(e.id);
    if (e.op === "literal" && e.value !== void 0) {
      try {
        if (JSON.stringify(encodeValue(e.value)) !== JSON.stringify(encodeValue(JSON.parse(JSON.stringify(e.value))))) errors.push("Literal is not losslessly JSON serializable");
      } catch {
        errors.push("Unsupported literal");
      }
    }
    if (!ops.has(e.op)) errors.push("Unsupported primitive: " + e.op);
    if (e.path && (!/^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*)*$/.test(e.path) || e.path.split(".").some((p) => forbidden.has(p)))) errors.push("Forbidden property or invalid path");
    if (["let", "fold", "filter", "map", "some", "every", "find"].includes(e.op) && (["let", "fold"].includes(e.op) && !e.name || reserved.has(e.name ?? "item"))) errors.push("Invalid lexical binding");
    if (e.op === "fold" && (!e.path || !/^[A-Za-z_$][\w$]*$/.test(e.path) || e.path === e.name || reserved.has(e.path))) errors.push("Invalid fold accumulator");
    if (e.op !== "fold" && e.mode) errors.push("Mode is only valid on folds");
    if (e.diagnostic && !["filter", "map", "some", "every", "find", "fold"].includes(e.op)) errors.push("Diagnostic is only valid on collection operations");
    if (e.op === "record" && (!e.fields || e.fields.length !== (e.args?.length ?? 0) || new Set(e.fields).size !== e.fields.length || e.fields.some((f) => forbidden.has(f)))) errors.push("Invalid record fields");
    if (e.op !== "record" && e.fields) errors.push("Fields are only valid on records");
    if (e.op === "get" && !e.path) errors.push("Missing property path");
    if (e.name && !/^[A-Za-z_$][\w$]*$/.test(e.name)) errors.push("Invalid expression name");
    if (e.op === "call" && !names.has(e.name)) errors.push("Unknown operation: " + e.name);
    const arity = { literal: 0, get: 0, if: 3, not: 1, neg: 1, abs: 1, length: 1, sum: 1, isArray: 1, and: 2, or: 2, eq: 2, ne: 2, lt: 2, le: 2, gt: 2, ge: 2, add: 2, sub: 2, mul: 2, div: 2, mod: 2, filter: 2, map: 2, some: 2, every: 2, includes: 2, coalesce: 2, at: 2, let: 2, fold: 3, find: 2 };
    if (e.op in arity && (e.args?.length ?? 0) !== arity[e.op]) errors.push("Invalid arity: " + e.op);
    e.args?.forEach((a) => walk(a, depth + 1));
  };
  const reserved = /* @__PURE__ */ new Set(["__collection", "__map", "__fold", "__type", "__at", "__language", "Math", "Array", "Object", "Error", "TypeError", "String", "Number", "JSON", "Infinity", "NaN", "eval", "arguments", "await", "yield", "return", "class", "const", "let", "var", "function", "new", "this", "super", "default", "import", "export", "null", "true", "false", "delete", "throw", "try", "catch", "finally", "for", "while", "if", "else", "switch", "case", "break", "continue", "debugger", "with", "in", "instanceof", "void", "typeof", "do", "extends", "static", "implements", "interface", "package", "private", "protected", "public", "enum"]);
  for (const f of all) {
    if (reserved.has(f.name) || f.params.some((p) => reserved.has(p))) errors.push("Reserved compiler binding");
  }
  for (const d of b.program.decisions) if (reserved.has(d.id) || d.params.some((p) => reserved.has(p))) errors.push("Reserved compiler binding");
  validateBindings(b, compiler ?? b.compilerVersion ?? VERSION, reserved, errors);
  all.forEach((f) => {
    checkId(f.id);
    walk(f.body);
    if (new Set(f.params).size !== f.params.length) errors.push("Duplicate parameter");
  });
  function bindings(e, scope) {
    if (e.op === "get" && !scope.has((e.path ?? "").split(".")[0])) errors.push("Unbound domain reference: " + e.path);
    if (e.op === "call") {
      if (scope.has(e.name)) errors.push("Lexically shadowed operation: " + e.name);
      const f = all.find((f2) => f2.name === e.name) ?? b.program.decisions.find((d) => d.id === e.name);
      if (f && (e.args?.length ?? 0) !== f.params.length) errors.push("Operation argument count: " + e.name);
    }
    for (const [i, a] of (e.args ?? []).entries()) bindings(a, i === 1 && ["filter", "map", "every", "some", "find", "let"].includes(e.op) ? /* @__PURE__ */ new Set([...scope, e.name ?? "item"]) : i === 2 && e.op === "fold" ? /* @__PURE__ */ new Set([...scope, e.name, e.path]) : scope);
  }
  all.forEach((f) => bindings(f.body, new Set(f.params)));
  b.program.decisions.forEach((d) => {
    d.rules.forEach((r) => {
      bindings(r.when, new Set(d.params));
      bindings(r.result, new Set(d.params));
    });
    bindings(d.otherwise, new Set(d.params));
  });
  b.program.machines.forEach((m) => m.transitions.forEach((t) => {
    if (t.guard) bindings(t.guard, /* @__PURE__ */ new Set(["context"]));
  }));
  const compositionSafe = validateComposition(b, errors);
  for (const m of b.program.machines) {
    checkId(m.id);
    if (m.states.some((s) => forbidden.has(s))) errors.push("Unsupported reflective state name");
    if (new Set(m.states).size !== m.states.length) errors.push("Duplicate state");
    if (m.initial === void 0 ? m.kind !== "graph" : !m.states.includes(m.initial)) errors.push("Missing initial state");
    const edges = /* @__PURE__ */ new Set();
    for (const t of m.transitions) {
      checkId(t.id);
      if (!m.states.includes(t.from) || !m.states.includes(t.to)) errors.push("Dangling transition");
      const key = t.from + ">" + t.to;
      if (edges.has(key)) errors.push("Duplicate transition");
      edges.add(key);
      if (t.guard) walk(t.guard);
    }
  }
  for (const d of b.program.decisions) {
    checkId(d.id);
    d.rules.forEach((r) => {
      checkId(r.id);
      walk(r.when);
      walk(r.result);
    });
    walk(d.otherwise);
  }
  const entries = /* @__PURE__ */ new Set([...names, ...b.program.machines.map((m) => m.id)]);
  const scenarioIds = /* @__PURE__ */ new Set();
  for (const scenario of b.scenarios) {
    if (scenarioIds.has(scenario.id)) errors.push("Duplicate scenario: " + scenario.id);
    scenarioIds.add(scenario.id);
    if (!entries.has(scenario.entry)) errors.push("Unknown scenario entry: " + scenario.entry);
    if (scenario.kind === "approved-change" && !("expected" in scenario) && !scenario.expectedOutcome) errors.push("Approved change requires an independent expectation");
  }
  const guardMemo = /* @__PURE__ */ new Map();
  function guardOutcome(e) {
    if (!e) return false;
    if (e.op === "record") {
      const kindIndex = e.fields?.indexOf("kind") ?? -1;
      const kind = kindIndex >= 0 ? e.args?.[kindIndex] : void 0;
      return kind?.op === "literal" && (kind.value === "continue" ? e.fields?.length === 1 : kind.value === "return" && e.fields?.length === 2 && e.fields.includes("value"));
    }
    if (e.op === "let") return guardOutcome(e.args[1]);
    if (e.op === "if") return guardOutcome(e.args[1]) && guardOutcome(e.args[2]);
    if (e.op === "call") {
      const name = e.name ?? "";
      if (guardMemo.has(name)) return guardMemo.get(name);
      const f = all.find((f2) => f2.name === name), d = b.program.decisions.find((d2) => d2.id === name), result = f ? guardOutcome(f.body) : !!d && d.rules.every((r) => guardOutcome(r.result)) && guardOutcome(d.otherwise);
      guardMemo.set(name, result);
      return result;
    }
    return false;
  }
  if (b.recovery) {
    const bindingIds = /* @__PURE__ */ new Set(), targets = /* @__PURE__ */ new Set(), retainedIds = /* @__PURE__ */ new Set();
    for (const r of b.recovery.retained) {
      if (retainedIds.has(r.id) || r.end < r.start) errors.push("Invalid retained dependency: " + r.id);
      retainedIds.add(r.id);
    }
    for (const binding of b.recovery.bindings) {
      if (!/^[A-Za-z_$][\w$]*$/.test(binding.id) || bindingIds.has(binding.id) || targets.has(binding.target)) errors.push("Duplicate or invalid recovery binding");
      bindingIds.add(binding.id);
      targets.add(binding.target);
      const e = b.evidence.find((e2) => e2.id === binding.sourceId);
      const target = binding.kind === "function" ? b.program.functions.find((f) => f.id === binding.target) : binding.kind === "graph" ? b.program.machines.find((m) => m.id === binding.target) : b.program.decisions.find((d) => d.id === binding.target);
      if (!e || !target || target.sourceId !== binding.sourceId) errors.push("Dangling recovery binding: " + binding.id);
      if (target && "params" in target && (JSON.stringify(target.sourceParameters ?? target.params) !== JSON.stringify(binding.params) || target.params.length !== binding.params.length)) errors.push("Recovery interface parameters changed");
      if (binding.kind === "guard" && target && "rules" in target && compositionSafe && (!target.rules.every((r) => guardOutcome(r.result)) || !guardOutcome(target.otherwise))) errors.push("Guard must return explicit continue/return outcomes");
      if (binding.retained.some((id) => !retainedIds.has(id))) errors.push("Dangling retained dependency");
    }
  }
  for (const f of [...all, ...b.program.decisions]) if (f.sourceParameters && !b.recovery?.bindings.some((r) => r.target === f.id && r.kind !== "graph" && JSON.stringify(r.params) === JSON.stringify(f.sourceParameters))) errors.push("Source parameter aliases require their original recovery binding: " + f.id);
  validateProjections(b, errors);
  validateVocabulary(b, errors);
  return errors;
}
function assertValid(b, compiler) {
  const e = validate(b, compiler);
  if (e.length) throw new Error(e.join("\n"));
}
function collectionMethod(list, method, diagnostic) {
  const fn = list[method];
  if (typeof fn !== "function") throw new TypeError((diagnostic ?? "collection." + method) + " is not a function");
  if (!Array.isArray(list) || Object.prototype.hasOwnProperty.call(list, method)) throw new Error("Unsupported collection receiver; use domain lists with standard methods");
  if (list.length > 1e4) throw new Error("Collection budget exceeded");
  return fn;
}
function evaluate(e, scope, b, trace = [], fuel = { left: 1e4 }) {
  if (--fuel.left < 0) throw new Error("Evaluation budget exceeded");
  const a = e.args ?? [];
  const v = (i) => evaluate(a[i], scope, b, trace, fuel);
  let out;
  switch (e.op) {
    case "literal":
      out = e.value !== null && typeof e.value === "object" ? JSON.parse(JSON.stringify(e.value)) : e.value;
      break;
    case "let": {
      const initial = v(0);
      out = evaluate(a[1], { ...scope, [e.name]: initial }, b, trace, fuel);
      break;
    }
    case "fold": {
      const list = v(0);
      const reduce = e.mode === "reduce" ? list.reduce : void 0;
      let accumulator = v(1);
      if (e.mode === "reduce") {
        collectionMethod(list, "reduce", e.diagnostic);
        out = reduce.call(list, (accumulator2, item) => evaluate(a[2], { ...scope, [e.name]: item, [e.path]: accumulator2 }, b, trace, fuel), accumulator);
      } else {
        if (list == null || typeof list[Symbol.iterator] !== "function") throw new TypeError((e.diagnostic ?? "collection") + " is not iterable");
        if (!Array.isArray(list) || list.length > 1e4) throw new Error("Unsupported or oversized domain list");
        for (const item of list) accumulator = evaluate(a[2], { ...scope, [e.name]: item, [e.path]: accumulator }, b, trace, fuel);
        out = accumulator;
      }
      break;
    }
    case "get": {
      out = scope;
      for (const p of (e.path ?? "").split(".")) {
        if (forbidden.has(p)) throw new Error("Forbidden property");
        out = out[p];
      }
      break;
    }
    case "array":
      out = a.map((_, i) => v(i));
      break;
    case "record":
      out = Object.fromEntries(e.fields.map((name, i) => [name, v(i)]));
      break;
    case "object":
      out = Object.fromEntries(a.map((x) => [x.name, evaluate(x, scope, b, trace, fuel)]));
      break;
    case "at": {
      const object = v(0), key = v(1);
      if (forbidden.has(String(key))) throw new Error("Forbidden property");
      out = object[key];
      break;
    }
    case "if": {
      const condition = v(0), yes = !!condition;
      fuel.observer?.branch(e.id, "if", yes ? "then" : "otherwise", a[yes ? 1 : 2].id, a[yes ? 2 : 1].id, yes ? "Condition was truthy; the Otherwise branch was not evaluated" : "Condition was falsy; the Then branch was not evaluated");
      out = v(yes ? 1 : 2);
      break;
    }
    case "and":
    case "or":
    case "coalesce": {
      const left = v(0), right = e.op === "and" ? !!left : e.op === "or" ? !left : left === null || left === void 0;
      fuel.observer?.branch(e.id, e.op, right ? "right" : "left", a[right ? 1 : 0].id, right ? void 0 : a[1].id, right ? "The right operand was needed and evaluated" : "The left operand determined the result; the right operand was not evaluated");
      out = right ? v(1) : left;
      break;
    }
    case "not":
      out = !v(0);
      break;
    case "neg":
      out = -v(0);
      break;
    case "abs":
      out = Math.abs(v(0));
      break;
    case "eq":
      out = v(0) === v(1);
      break;
    case "ne":
      out = v(0) !== v(1);
      break;
    case "lt":
      out = v(0) < v(1);
      break;
    case "le":
      out = v(0) <= v(1);
      break;
    case "gt":
      out = v(0) > v(1);
      break;
    case "ge":
      out = v(0) >= v(1);
      break;
    case "add":
      out = v(0) + v(1);
      break;
    case "sub":
      out = v(0) - v(1);
      break;
    case "mul":
      out = v(0) * v(1);
      break;
    case "div":
      out = v(0) / v(1);
      break;
    case "mod":
      out = v(0) % v(1);
      break;
    case "isArray":
      out = Array.isArray(v(0));
      break;
    case "length":
      out = v(0).length;
      break;
    case "includes":
      out = v(0).includes(v(1));
      break;
    case "sum":
      out = v(0).reduce((s, x) => s + x, 0);
      break;
    case "filter":
    case "map":
    case "some":
    case "every":
    case "find": {
      const list = v(0);
      out = collectionMethod(list, e.op, e.diagnostic).call(list, (item) => evaluate(a[1], { ...scope, [e.name ?? "item"]: item }, b, trace, fuel));
      break;
    }
    case "call":
      out = invoke(b, e.name, a.map((_, i) => v(i)), trace, fuel);
      break;
    default:
      throw new Error("Unsupported primitive: " + e.op);
  }
  if (e.op === "get" || e.op === "at") fuel.observer?.read(e.op === "at" ? a[1]?.id ?? e.id : e.id, out);
  try {
    trace.push({ node: e.id, op: e.op, value: encodeValue(out) });
  } catch {
    trace.push({ node: e.id, op: e.op, valueUnavailable: "Value is outside the supported observation format" });
  }
  return out;
}
function invoke(b, name, args, trace = [], fuel = { left: 1e4 }) {
  const f = [...b.language.operations, ...b.program.functions].find((f2) => f2.name === name), d = b.program.decisions.find((d2) => d2.id === name), m = b.program.machines.find((m2) => m2.id === name), definition = f ?? d ?? m;
  const observer = fuel.observer, call = definition ? observer?.begin(definition.id, name, f?.params ?? d?.params ?? ["from", "to", "context"], args) : void 0;
  try {
    const value = run();
    if (definition) observer?.end(call, () => value);
    return value;
  } catch (error) {
    if (definition) observer?.end(call, () => {
      throw error;
    });
    throw error;
  }
  function run() {
    if (f) {
      for (const [i, p] of f.params.entries()) {
        if (f.parameterTypes?.[p]) {
          const errors = checkValue(args[i], f.parameterTypes[p], b.language);
          if (errors.length) throw new Error(p + ": " + errors.join(", "));
        }
      }
      const value = evaluate(f.body, Object.fromEntries(f.params.map((p, i) => [p, args[i]])), b, trace, fuel);
      if (f.resultType) {
        const errors = checkValue(value, f.resultType, b.language);
        if (errors.length) throw new Error("Result: " + errors.join(", "));
      }
      return value;
    }
    if (d) {
      const scope = Object.fromEntries(d.params.map((p, i) => [p, args[i]]));
      for (const r of d.rules) {
        const matches = evaluate(r.when, scope, b, trace, fuel);
        observer?.rule(r.id, matches ? "matched" : "not-matched");
        if (matches) {
          trace.push({ node: r.id });
          return evaluate(r.result, scope, b, trace, fuel);
        }
      }
      observer?.rule(d.otherwise.id, "fallback");
      return evaluate(d.otherwise, scope, b, trace, fuel);
    }
    if (m) {
      const [from, to, context] = args, t = m.transitions.find((t2) => t2.from === from && t2.to === to);
      if (!t) {
        observer?.transition(m.id, from, to, "denied");
        return { allowed: false, state: from };
      }
      if (t.retained.length) {
        observer?.transition(t.id, from, to, "retained-required");
        throw new Error("Retained operations require adapter: " + t.retained.join(", "));
      }
      const allowed = !t.guard || !!evaluate(t.guard, { context }, b, trace, fuel);
      observer?.transition(t.id, from, to, allowed ? "allowed" : "denied");
      trace.push({ node: t.id });
      return { allowed, state: allowed ? to : from };
    }
    throw new Error("Unknown entry: " + name);
  }
}
function compile(b, requestedCompiler) {
  assertArtifactData(b);
  const compiler = compilerVersion(requestedCompiler ?? b?.compilerVersion ?? VERSION);
  assertValid(b, compiler);
  const lines = ["// Generated by Intentional " + compiler + ". Edit the domain model, then regenerate."];
  const map = {};
  const markerNodes = [];
  function js(e) {
    const text = lowerExpression(e);
    if (!e.id) return text;
    const index = markerNodes.push(e.id) - 1;
    return `/*@i:${index}:start*/(${text})/*@i:${index}:end*/`;
  }
  const lowerExpression = (e) => {
    const a = e.args ?? [];
    const v = (i) => js(a[i]);
    const bin = { eq: "===", ne: "!==", lt: "<", le: "<=", gt: ">", ge: ">=", add: "+", sub: "-", mul: "*", div: "/", mod: "%", and: "&&", or: "||", coalesce: "??" };
    if (bin[e.op]) return `(${v(0)} ${bin[e.op]} ${v(1)})`;
    switch (e.op) {
      case "literal":
        return e.value === void 0 ? "undefined" : e.value !== null && typeof e.value === "object" ? `JSON.parse(${JSON.stringify(JSON.stringify(e.value))})` : JSON.stringify(e.value);
      case "let":
        return `((${e.name}:any)=>(${v(1)}))(${v(0)})`;
      case "fold":
        return `__fold(${v(0)},()=>(${v(1)}),(${e.path}:any,${e.name}:any)=>(${v(2)}),${JSON.stringify(e.mode ?? "iterate")},${JSON.stringify(e.diagnostic)})`;
      case "get":
        return e.path.split(".").map((x, i) => i === 0 ? x : `[${JSON.stringify(x)}]`).join("");
      case "array":
        return `[${a.map(js).join(",")}]`;
      case "record":
        return `({${e.fields.map((name, i) => `[${JSON.stringify(name)}]:${v(i)}`).join(",")}})`;
      case "if":
        return `(${v(0)} ? ${v(1)} : ${v(2)})`;
      case "not":
        return `(!${v(0)})`;
      case "neg":
        return `(-${v(0)})`;
      case "abs":
        return `Math.abs(${v(0)})`;
      case "isArray":
        return `Array.isArray(${v(0)})`;
      case "length":
        return `(${v(0)}).length`;
      case "includes":
        return `(${v(0)}).includes(${v(1)})`;
      case "sum":
        return `(${v(0)}).reduce((s:any,x:any)=>s+x,0)`;
      case "filter":
      case "map":
      case "some":
      case "every":
      case "find":
        return `__map(${v(0)},${JSON.stringify(e.op)},(${e.name ?? "item"}:any)=>${v(1)},${JSON.stringify(e.diagnostic)})`;
      case "call":
        return `${e.name}(${a.map(js).join(",")})`;
      case "at":
        return `__at(${v(0)},${v(1)})`;
      default:
        throw new Error("Compiler unsupported: " + e.op);
    }
  };
  const emit = (id, s) => {
    map[id] = { start: lines.length + 1, end: lines.length + s.split("\n").length };
    lines.push(s);
  };
  lines.push("function __collection(list:any,method:string,diagnostic?:string):Function {const fn=list[method];if(typeof fn!=='function')throw new TypeError((diagnostic??'collection.'+method)+' is not a function');if(!Array.isArray(list)||Object.prototype.hasOwnProperty.call(list,method))throw new Error('Unsupported collection receiver; use domain lists with standard methods');if(list.length>10000)throw new Error('Collection budget exceeded');return fn;}");
  lines.push("function __map(list:any,method:string,step:(item:any)=>any,diagnostic?:string):any {return __collection(list,method,diagnostic).call(list,step);}");
  lines.push("function __fold(list:any,initial:()=>any,step:(acc:any,item:any)=>any,mode:string,diagnostic?:string):any {const reduce=mode==='reduce'?list.reduce:undefined;let value=initial();if(mode==='reduce'){__collection(list,'reduce',diagnostic);return reduce.call(list,step,value);}if(list==null||typeof list[Symbol.iterator]!=='function')throw new TypeError((diagnostic??'collection')+' is not iterable');if(!Array.isArray(list)||list.length>10000)throw new Error('Unsupported or oversized domain list');for(const item of list)value=step(value,item);return value;}");
  lines.push("function __at(object:any,key:any):any { if(['__proto__','prototype','constructor'].includes(String(key)))throw new Error('Forbidden property');return object[key]; }");
  const languageLine = lines.length + 1;
  lines.push("const __language = JSON.parse(" + JSON.stringify(stableJson(b.language)) + ");");
  lines.push(`function __type(v:any,t:string,d=0):string[]{if(d>30)return ['Type nesting limit exceeded'];if(t.endsWith('?'))return v==null?[]:__type(v,t.slice(0,-1),d+1);if(t.endsWith('[]'))return !Array.isArray(v)?['Expected list']:v.flatMap((x:any,i:number)=>__type(x,t.slice(0,-2),d+1).map(e=>i+': '+e));if(t==='any'||t==='unknown')return [];if(['number','string','boolean'].includes(t))return typeof v===t?[]:['Expected '+t];const a:any=(__language.types as any)[t];if(!a)return ['Unknown type '+t];if(a.kind==='alias')return __type(v,a.target,d+1);if(a.kind==='enum')return a.values.includes(v)?[]:['Expected '+a.values.join(' | ')];if(typeof v!=='object'||v===null||Array.isArray(v))return ['Expected record '+t];return Object.entries(a.fields??{}).flatMap(([k,t])=>__type(v[k],String(t),d+1).map(e=>k+': '+e));}`);
  for (const f of [...b.language.operations, ...b.program.functions]) {
    const { result, errors } = temporaryBindings(f, compiler, emittedBindings(b));
    const checks = f.params.filter((p) => f.parameterTypes?.[p]).map((p) => `{const ${errors}=__type(${p},${JSON.stringify(f.parameterTypes[p])});if(${errors}.length)throw new Error(${JSON.stringify(p + ": ")}+${errors}.join(', '));}`).join("");
    emit(f.id, `export function ${f.name}(${f.params.map((p) => p + ":any").join(",")}):any { ${checks}const ${result}=${js(f.body)};${f.resultType ? `const ${errors}=__type(${result},${JSON.stringify(f.resultType)});if(${errors}.length)throw new Error('Result: '+${errors}.join(', '));` : ""}return ${result}; }`);
  }
  for (const d of b.program.decisions) emit(d.id, `export function ${d.id}(${d.params.map((p) => p + ":any").join(",")}):any {
${d.rules.map((r) => ` if (${js(r.when)}) return ${js(r.result)}; // ${r.id}`).join("\n")}
 return ${js(d.otherwise)};
}`);
  for (const m of b.program.machines) {
    const { from, to } = machineBindings(compiler, emittedBindings(b)), definitionLine = lines.length + 1;
    for (const id of Object.values(m.stateIds ?? {})) map[id] = { start: definitionLine, end: definitionLine, precision: "definition" };
    lines.push(`export const ${m.id}Definition:any = ${JSON.stringify(Object.fromEntries(m.states.map((state) => [state, { to: m.transitions.filter((t) => t.from === state).map((t) => t.to) }])))};`);
    emit(m.id, `export const ${m.id}Transitions = ${JSON.stringify(m.transitions.map((t) => ({ id: t.id, from: t.from, to: t.to, retained: t.retained })), null, 2)};
export function ${m.id}(${from}:any,${to}:any,context:any):any {
${m.transitions.map((t) => `if(${from}===${JSON.stringify(t.from)}&&${to}===${JSON.stringify(t.to)}) {${t.retained.length ? `throw new Error('Retained operations require adapter');` : `const allowed=${t.guard ? `!!(${js(t.guard)})` : "true"}; return {allowed,state:allowed?${to}:${from}};`}}`).join("\n")}
return {allowed:false,state:${from}};
}`);
  }
  function mapExpr(e, owner) {
    if (e.id && map[owner]) map[e.id] = { ...map[owner] };
    e.args?.forEach((a) => mapExpr(a, owner));
  }
  for (const f of [...b.language.operations, ...b.program.functions]) mapExpr(f.body, f.id);
  for (const d of b.program.decisions) {
    d.rules.forEach((r, i) => {
      map[r.id] = { start: map[d.id].start + 1 + i, end: map[d.id].start + 1 + i, precision: "statement" };
      mapExpr(r.when, d.id);
      mapExpr(r.result, d.id);
    });
    mapExpr(d.otherwise, d.id);
  }
  for (const m of b.program.machines) for (const t of m.transitions) {
    const line = map[m.id].start + JSON.stringify(m.transitions.map((t2) => ({ id: t2.id, from: t2.from, to: t2.to, retained: t2.retained })), null, 2).split("\n").length + 1 + m.transitions.indexOf(t);
    map[t.id] = { start: line, end: line, precision: "statement" };
    if (t.guard) mapExpr(t.guard, m.id);
  }
  const code = lines.join("\n") + "\n";
  Object.assign(map, expressionLocations(code, markerNodes));
  for (const t of Object.values(b.language.types)) {
    if (t.id) map[t.id] = { start: languageLine, end: languageLine, precision: "definition" };
    for (const id of Object.values(t.fieldIds ?? {})) map[id] = { start: 7, end: 7, precision: "definition" };
  }
  return { code, map, hash: hash(programIdentity(b, compiler)), compiler };
}

// src/simulation-contract.ts
var simulationRequestSchema = external_exports.object({ version: external_exports.literal(1).optional(), entry: external_exports.string().min(1).max(200), expectedRevision: revisionSchema.optional(), args: external_exports.array(external_exports.unknown()).max(1e4).optional(), encodedArgs: encodedArgumentsSchema.optional() }).strict().superRefine((s, ctx) => {
  try {
    scenarioArguments(s);
  } catch (e) {
    ctx.addIssue({ code: "custom", message: e.message });
  }
  if (s.args && !losslessJson(s.args)) ctx.addIssue({ code: "custom", message: "Use encodedArgs for values that ordinary JSON changes" });
});
var simulationTraceSchema = external_exports.object({ node: external_exports.string().optional(), op: external_exports.string().optional(), value: encodedValueSchema.optional(), valueUnavailable: external_exports.string().min(1).max(1e3).optional() }).strict().refine((t) => !(t.value !== void 0 && t.valueUnavailable !== void 0), "A trace value cannot also be unavailable");
var simulationReportSchema = external_exports.object({ version: external_exports.literal(1), entry: external_exports.string(), revision: revisionSchema, compiler: external_exports.enum(["0.5.0", "0.5.1"]), programHash: external_exports.string().regex(/^[a-f0-9]{64}$/), outcome: executionResultSchema, trace: external_exports.array(simulationTraceSchema), execution: executionExplanationSchema.optional() }).strict();

// src/simulation.ts
function simulateRevision(bundle, revision, input) {
  const request = simulationRequestSchema.parse(input);
  if (request.expectedRevision !== void 0 && request.expectedRevision !== revision) throw Object.assign(new Error("Stale revision; refresh before simulation"), { statusCode: 409 });
  const names = [...bundle.language.operations, ...bundle.program.functions].map((f) => f.name).concat(bundle.program.decisions.map((d) => d.id), bundle.program.machines.map((m) => m.id));
  if (!names.includes(request.entry)) throw new Error("Unknown domain entry: " + request.entry);
  const generated = compile(bundle), trace = [], args = scenarioArguments(request), recorder = executionRecorder(), outcome = capture(() => invoke(bundle, request.entry, args, trace, { left: 1e4, observer: recorder.observer }));
  return simulationReportSchema.parse({ version: 1, entry: request.entry, revision, compiler: generated.compiler, programHash: generated.hash, outcome, trace, execution: recorder.report });
}

// src/core-cli.ts
var import_promises2 = require("node:fs/promises");
var import_node_path2 = require("node:path");

// src/core-bundle.ts
var import_promises = require("node:fs/promises");
var import_node_path = require("node:path");
async function readCoreBundle(input, compiler) {
  const json = async (name) => JSON.parse(await (0, import_promises.readFile)(name, "utf8"));
  if ((await (0, import_promises.stat)(input)).isFile()) {
    const bundle2 = await json(input);
    assertValid(bundle2, compiler);
    return bundle2;
  }
  const root = (0, import_node_path.resolve)(input), manifest = await json((0, import_node_path.resolve)(root, "intentional/manifest.json"));
  const bundle = { ...manifest.compilerSelection ? { compilerVersion: compilerVersion(manifest.compilerSelection) } : {}, ...manifest.identityFormatVersion === 1 ? { identityVersion: 1 } : {}, language: await json((0, import_node_path.resolve)(root, "intentional/language.json")), program: await json((0, import_node_path.resolve)(root, "intentional/program.json")), projection: await json((0, import_node_path.resolve)(root, "intentional/projections.json")), evidence: await json((0, import_node_path.resolve)(root, "intentional/provenance.json")), scenarios: await json((0, import_node_path.resolve)(root, "intentional/scenarios.json")), unresolved: await json((0, import_node_path.resolve)(root, "intentional/unresolved.json")) };
  if (compilerVersion(manifest.compiler) !== (bundle.compilerVersion ?? VERSION)) throw new Error("Canonical compiler selection disagrees with its manifest; restore or export a reviewed package");
  for (const [key, file] of [["recovery", "recovery.json"], ["behavior", "behavior.json"]]) try {
    bundle[key] = await json((0, import_node_path.resolve)(root, "intentional", file));
  } catch (e) {
    if (e.code !== "ENOENT") throw e;
  }
  assertValid(bundle, compiler);
  return bundle;
}

// src/core-cli.ts
async function main() {
  const [command, input, ...args] = process.argv.slice(2);
  if (!input) throw new Error("Core commands: validate bundle-or-checkout; simulate bundle-or-checkout entry arguments-json; emit bundle-or-checkout new-output-directory; optional --compiler VERSION");
  const flag = args.indexOf("--compiler"), override = flag < 0 ? void 0 : compilerVersion(args[flag + 1]);
  if (flag >= 0) args.splice(flag, 2);
  if (args.includes("--compiler")) throw new Error("Specify one compiler version");
  const bundle = await readCoreBundle(input, override), compiler = override ?? bundle.compilerVersion ?? VERSION;
  if (command === "validate") console.log(JSON.stringify({ version: 1, compiler, status: validate(bundle, compiler).length ? "invalid" : "valid", errors: validate(bundle, compiler), programHash: compile(bundle, compiler).hash }));
  else if (command === "simulate") {
    const explain = args.includes("--explain");
    if (explain) args.splice(args.indexOf("--explain"), 1);
    if (args.length !== 2) throw new Error("simulate requires an entry and an argument list or tagged argument record");
    const parsed = JSON.parse(args[1]), values = scenarioArguments(Array.isArray(parsed) ? { args: parsed } : parsed), trace = [];
    console.log(JSON.stringify(explain ? simulateRevision(bundle, 0, { entry: args[0], encodedArgs: encodeValue(values) }) : { version: 1, compiler, outcome: capture(() => invoke(bundle, args[0], values, trace)), trace }));
  } else if (command === "emit") {
    if (args.length !== 1) throw new Error("emit requires a new output directory");
    const generated = compile(bundle, compiler), directory = (0, import_node_path2.resolve)(args[0]);
    await (0, import_promises2.mkdir)(directory);
    await (0, import_promises2.writeFile)((0, import_node_path2.resolve)(directory, "domain.ts"), generated.code, { flag: "wx" });
    await (0, import_promises2.writeFile)((0, import_node_path2.resolve)(directory, "domain.map.json"), JSON.stringify(generated.map, null, 2), { flag: "wx" });
    console.log(JSON.stringify({ version: 1, compiler, programHash: generated.hash, output: directory, integration: false }));
  } else throw new Error("Unknown core command. Use validate, simulate or emit. Source integration requires the optional TypeScript source adapter.");
}
main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  readCoreBundle
});
