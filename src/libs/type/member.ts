import { MemberStatus, MemberType } from "./enums/member.enam";

export interface Member{
    memberType: MemberType;
    memberStatus: MemberStatus;
    memberNick: string;
    memberPhone: string;
    memberPassword?: string;
    memberAddress?: string;
    memberDecs?: string;
    memberImage?: string;
    memberPoints: number;
    createdAt: Date;
    updatadAt: Date;
};

export interface MemberInput{
    memberType?: MemberType;
    memberStatus?: MemberStatus;
    memberNick: string;
    memberPhone: string;
    memberPassword: string;
    memberAddress?: string;
    memberDecs?: string;
    memberImage?: string;
    memberPoints?: number;
};