import { EnvironmentConfigService } from '../../globals/environment-config.service';
import { EnvironmentsKeys } from '../../globals/environments-keys';

const envConfigService: EnvironmentConfigService =
  new EnvironmentConfigService();

export const jwtConstants = {
  secret: envConfigService.getEnv(EnvironmentsKeys.JWT_SECRET),
  expiresIn: envConfigService.getEnv(EnvironmentsKeys.JWT_EXPIRES_IN),
};
