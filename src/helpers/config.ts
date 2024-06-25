import Joi from 'joi';

const configSchema = Joi.object({
    PORT: Joi.number().integer().min(1).max(65535).required()
});

export const config = {
    PORT: process.env.PORT,
};

const { error } = configSchema.validate(config);

if (error) {
    throw new Error(`Configuration validation error: ${error.message}`);
}