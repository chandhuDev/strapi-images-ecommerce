'use strict';

/**
 * testimage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::testimage.testimage');
