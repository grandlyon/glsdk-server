import { BootScript } from '@mean-expert/boot-script';

@BootScript()
class Root {

  constructor(app: any) {
    const router = app.loopback.Router();
    router.get('/', app.loopback.status());
    app.use(router);
  }

}

module.exports = Root;
