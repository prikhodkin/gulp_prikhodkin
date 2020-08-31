import Turbolinks from "turbolinks";
import { Application } from "stimulus"
import Tabs from "%modules%/tabs/tabs"
import {$, $$} from "./util";
Turbolinks.start();

const application = Application.start();
const tabs = $(`[data-tabs]`);


new Tabs(tabs);
