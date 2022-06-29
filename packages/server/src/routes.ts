/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import {
  Controller,
  ValidationService,
  FieldErrors,
  ValidateError,
  TsoaRoute,
  HttpStatusCodeLiteral,
  TsoaResponse,
  fetchMiddlewares,
} from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { FixturesController } from './routes/fixtures/fixtures.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { PlayersController } from './routes/players/players.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { StandingsController } from './routes/standings/standings.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TeamsController } from './routes/teams/teams.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UsersController } from './routes/users/users.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { VideosController } from './routes/videos/videos.controller';
import type { RequestHandler } from 'express';
import * as express from 'express';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
  Tier: {
    dataType: 'refEnum',
    enums: ['TIER_CUP', 'TIER_ONE', 'TIER_TWO'],
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  FixtureEntity: {
    dataType: 'refObject',
    properties: {
      fixtureId: { dataType: 'string', required: true },
      competition: { dataType: 'string', required: true },
      competitionTier: { ref: 'Tier', required: true },
      season: { dataType: 'double', required: true },
      round: { dataType: 'string', required: true },
      status: { dataType: 'string', required: true },
      date: { dataType: 'string', required: true },
      time: { dataType: 'string', required: true },
      stadium: { dataType: 'string', required: true },
      homeId: { dataType: 'string', required: true },
      homeTeam: { dataType: 'string', required: true },
      homeScore: { dataType: 'double', required: true },
      awayId: { dataType: 'string', required: true },
      awayTeam: { dataType: 'string', required: true },
      awayScore: { dataType: 'double', required: true },
      note: { dataType: 'string', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  PlayerEntity: {
    dataType: 'refObject',
    properties: {
      playerId: { dataType: 'string', required: true },
      shirtNumber: { dataType: 'double', required: true },
      position: { dataType: 'string', required: true },
      fullName: { dataType: 'string', required: true },
      dateOfBirth: { dataType: 'string', required: true },
      teamId: { dataType: 'string', required: true },
      team: { dataType: 'string', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  StandingEntity: {
    dataType: 'refObject',
    properties: {
      standingId: { dataType: 'string', required: true },
      competition: { dataType: 'string', required: true },
      competitionTier: { dataType: 'string', required: true },
      season: { dataType: 'double', required: true },
      position: { dataType: 'double', required: true },
      teamId: { dataType: 'string', required: true },
      team: { dataType: 'string', required: true },
      played: { dataType: 'double', required: true },
      points: { dataType: 'double', required: true },
      won: { dataType: 'double', required: true },
      drawn: { dataType: 'double', required: true },
      lost: { dataType: 'double', required: true },
      goals: { dataType: 'double', required: true },
      goalsAgainst: { dataType: 'double', required: true },
      goalsDifference: { dataType: 'double', required: true },
      yellowCards: { dataType: 'double', required: true },
      redCards: { dataType: 'double', required: true },
      note: { dataType: 'string', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  TeamEntity: {
    dataType: 'refObject',
    properties: {
      teamId: { dataType: 'string', required: true },
      name: { dataType: 'string', required: true },
      fullName: { dataType: 'string', required: true },
      stadium: { dataType: 'string', required: true },
      province: { dataType: 'string', required: true },
      chairman: { dataType: 'string', required: true },
      manager: { dataType: 'string', required: true },
      founded: { dataType: 'string', required: true },
      active: { dataType: 'boolean', required: true },
      tier: { dataType: 'string', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  UserEntity: {
    dataType: 'refObject',
    properties: {
      email: { dataType: 'string', required: true },
      key: { dataType: 'string', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Video: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        thumbnail: { dataType: 'string', required: true },
        publishedAt: { dataType: 'string', required: true },
        channelTitle: { dataType: 'string', required: true },
        channelId: { dataType: 'string', required: true },
        description: { dataType: 'string', required: true },
        title: { dataType: 'string', required: true },
        id: { dataType: 'string', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: express.Router) {
  // ###########################################################################################################
  //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
  //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
  // ###########################################################################################################
  app.get(
    '/api/fixtures',
    ...fetchMiddlewares<RequestHandler>(FixturesController),
    ...fetchMiddlewares<RequestHandler>(
      FixturesController.prototype.getFixtures
    ),

    function FixturesController_getFixtures(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        limit: {
          in: 'query',
          name: 'limit',
          required: true,
          dataType: 'double',
        },
        season: {
          in: 'query',
          name: 'season',
          required: true,
          dataType: 'double',
        },
        sortBy: {
          in: 'query',
          name: 'sortBy',
          required: true,
          dataType: 'string',
        },
        status: {
          in: 'query',
          name: 'status',
          required: true,
          dataType: 'string',
        },
        tier: { in: 'query', name: 'tier', required: true, ref: 'Tier' },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new FixturesController();

        const promise = controller.getFixtures.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/fixtures/:fixtureId',
    ...fetchMiddlewares<RequestHandler>(FixturesController),
    ...fetchMiddlewares<RequestHandler>(
      FixturesController.prototype.getFixture
    ),

    function FixturesController_getFixture(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        fixtureId: {
          in: 'path',
          name: 'fixtureId',
          required: true,
          dataType: 'string',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new FixturesController();

        const promise = controller.getFixture.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/players',
    ...fetchMiddlewares<RequestHandler>(PlayersController),
    ...fetchMiddlewares<RequestHandler>(PlayersController.prototype.getPlayers),

    function PlayersController_getPlayers(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        skip: { default: 0, in: 'query', name: 'skip', dataType: 'double' },
        limit: { default: 50, in: 'query', name: 'limit', dataType: 'double' },
        teamId: { in: 'query', name: 'teamId', dataType: 'string' },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new PlayersController();

        const promise = controller.getPlayers.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/players/:playerId',
    ...fetchMiddlewares<RequestHandler>(PlayersController),
    ...fetchMiddlewares<RequestHandler>(PlayersController.prototype.getPlayer),

    function PlayersController_getPlayer(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        playerId: {
          in: 'path',
          name: 'playerId',
          required: true,
          dataType: 'string',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new PlayersController();

        const promise = controller.getPlayer.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/standings',
    ...fetchMiddlewares<RequestHandler>(StandingsController),
    ...fetchMiddlewares<RequestHandler>(
      StandingsController.prototype.getStandings
    ),

    function StandingsController_getStandings(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        tier: { in: 'query', name: 'tier', required: true, ref: 'Tier' },
        season: {
          in: 'query',
          name: 'season',
          required: true,
          dataType: 'double',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new StandingsController();

        const promise = controller.getStandings.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/standings/:standingId',
    ...fetchMiddlewares<RequestHandler>(StandingsController),
    ...fetchMiddlewares<RequestHandler>(
      StandingsController.prototype.getStanding
    ),

    function StandingsController_getStanding(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        tier: { in: 'query', name: 'tier', required: true, ref: 'Tier' },
        season: {
          in: 'query',
          name: 'season',
          required: true,
          dataType: 'double',
        },
        teamId: {
          in: 'query',
          name: 'teamId',
          required: true,
          dataType: 'string',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new StandingsController();

        const promise = controller.getStanding.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/teams',
    ...fetchMiddlewares<RequestHandler>(TeamsController),
    ...fetchMiddlewares<RequestHandler>(TeamsController.prototype.getTeams),

    function TeamsController_getTeams(request: any, response: any, next: any) {
      const args = {};

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new TeamsController();

        const promise = controller.getTeams.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/teams/:teamId',
    ...fetchMiddlewares<RequestHandler>(TeamsController),
    ...fetchMiddlewares<RequestHandler>(TeamsController.prototype.getTeam),

    function TeamsController_getTeam(request: any, response: any, next: any) {
      const args = {
        teamId: {
          in: 'path',
          name: 'teamId',
          required: true,
          dataType: 'string',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new TeamsController();

        const promise = controller.getTeam.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/users',
    ...fetchMiddlewares<RequestHandler>(UsersController),
    ...fetchMiddlewares<RequestHandler>(UsersController.prototype.getUser),

    function UsersController_getUser(request: any, response: any, next: any) {
      const args = {
        email: {
          in: 'query',
          name: 'email',
          required: true,
          dataType: 'string',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new UsersController();

        const promise = controller.getUser.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.post(
    '/api/users',
    ...fetchMiddlewares<RequestHandler>(UsersController),
    ...fetchMiddlewares<RequestHandler>(UsersController.prototype.createUser),

    function UsersController_createUser(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        body: {
          in: 'body',
          name: 'body',
          required: true,
          dataType: 'nestedObjectLiteral',
          nestedProperties: { email: { dataType: 'string', required: true } },
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new UsersController();

        const promise = controller.createUser.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/videos',
    ...fetchMiddlewares<RequestHandler>(VideosController),
    ...fetchMiddlewares<RequestHandler>(VideosController.prototype.getVideos),

    function VideosController_getVideos(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        maxResults: {
          in: 'query',
          name: 'maxResults',
          required: true,
          dataType: 'double',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new VideosController();

        const promise = controller.getVideos.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function isController(object: any): object is Controller {
    return (
      'getHeaders' in object && 'getStatus' in object && 'setStatus' in object
    );
  }

  function promiseHandler(
    controllerObj: any,
    promise: any,
    response: any,
    successStatus: any,
    next: any
  ) {
    return Promise.resolve(promise)
      .then((data: any) => {
        let statusCode = successStatus;
        let headers;
        if (isController(controllerObj)) {
          headers = controllerObj.getHeaders();
          statusCode = controllerObj.getStatus() || statusCode;
        }

        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

        returnHandler(response, statusCode, data, headers);
      })
      .catch((error: any) => next(error));
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function returnHandler(
    response: any,
    statusCode?: number,
    data?: any,
    headers: any = {}
  ) {
    if (response.headersSent) {
      return;
    }
    Object.keys(headers).forEach((name: string) => {
      response.set(name, headers[name]);
    });
    if (
      data &&
      typeof data.pipe === 'function' &&
      data.readable &&
      typeof data._read === 'function'
    ) {
      data.pipe(response);
    } else if (data !== null && data !== undefined) {
      response.status(statusCode || 200).json(data);
    } else {
      response.status(statusCode || 204).end();
    }
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function responder(
    response: any
  ): TsoaResponse<HttpStatusCodeLiteral, unknown> {
    return function (status, data, headers) {
      returnHandler(response, status, data, headers);
    };
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function getValidatedArgs(args: any, request: any, response: any): any[] {
    const fieldErrors: FieldErrors = {};
    const values = Object.keys(args).map((key) => {
      const name = args[key].name;
      switch (args[key].in) {
        case 'request':
          return request;
        case 'query':
          return validationService.ValidateParam(
            args[key],
            request.query[name],
            name,
            fieldErrors,
            undefined,
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'path':
          return validationService.ValidateParam(
            args[key],
            request.params[name],
            name,
            fieldErrors,
            undefined,
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'header':
          return validationService.ValidateParam(
            args[key],
            request.header(name),
            name,
            fieldErrors,
            undefined,
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'body':
          return validationService.ValidateParam(
            args[key],
            request.body,
            name,
            fieldErrors,
            undefined,
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'body-prop':
          return validationService.ValidateParam(
            args[key],
            request.body[name],
            name,
            fieldErrors,
            'body.',
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'formData':
          if (args[key].dataType === 'file') {
            return validationService.ValidateParam(
              args[key],
              request.file,
              name,
              fieldErrors,
              undefined,
              { noImplicitAdditionalProperties: 'throw-on-extras' }
            );
          } else if (
            args[key].dataType === 'array' &&
            args[key].array.dataType === 'file'
          ) {
            return validationService.ValidateParam(
              args[key],
              request.files,
              name,
              fieldErrors,
              undefined,
              { noImplicitAdditionalProperties: 'throw-on-extras' }
            );
          } else {
            return validationService.ValidateParam(
              args[key],
              request.body[name],
              name,
              fieldErrors,
              undefined,
              { noImplicitAdditionalProperties: 'throw-on-extras' }
            );
          }
        case 'res':
          return responder(response);
      }
    });

    if (Object.keys(fieldErrors).length > 0) {
      throw new ValidateError(fieldErrors, '');
    }
    return values;
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
