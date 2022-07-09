'use strict';

/**
 * starterpack service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::starterpack.starterpack');
