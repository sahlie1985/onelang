import { ISchemaTransform } from "./../SchemaTransformer";
import { OneAst as one } from "./../Ast";

export class FillNameTransform implements ISchemaTransform {
    name = "fillName";

    transform(schema: one.Schema) {
        for (const globName of Object.keys(schema.globals))
            schema.globals[globName].name = globName;

        for (const enumName of Object.keys(schema.enums))
            schema.enums[enumName].name = enumName;

        for (const className of Object.keys(schema.classes)) {
            const cls = schema.classes[className];
            cls.name = className;

            for (const propName of Object.keys(cls.properties))
                cls.properties[propName].name = propName;

            for (const fieldName of Object.keys(cls.fields))
                cls.fields[fieldName].name = fieldName;

            for (const methodName of Object.keys(cls.methods))
                cls.methods[methodName].name = methodName;
        }
    }
}