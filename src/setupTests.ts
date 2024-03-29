import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import axios from "axios";
import nock from "nock";
import httpAdapter from "axios/lib/adapters/http";

configure({ adapter: new Adapter() });

axios.defaults.adapter = httpAdapter;
nock.disableNetConnect();
