'use strict';

/**
 * mug service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mug.mug');
