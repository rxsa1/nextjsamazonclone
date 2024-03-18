import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  isadmin?: BooleanNullableFilter;
  lastName?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  reviews?: ReviewListRelationFilter;
  username?: StringFilter;
};
