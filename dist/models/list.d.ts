export interface IList {
    id: String;
    title: String;
    completed: Boolean;
    createdAt: Date;
}
export declare const List: import("mongoose").Model<IList, {}, {}, {}, import("mongoose").Document<unknown, {}, IList, {}, {}> & IList & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
//# sourceMappingURL=list.d.ts.map