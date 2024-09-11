import MemberModel from "../schema/Member.model";
import { Member, MemberInput } from "../libs/type/member";

class MemberService {
private readonly memberModel;

    constructor () {
this.memberModel = MemberModel;
    }

    public async processSignup(input: MemberInput): Promise<Member> {
        const result = await this.memberModel.create(input);

        // const tempResult = new this.memberModel(input);
        // const result = await tempResult.save();
        result.memberPassword = "";

        return result;
    }
}
export default MemberService;