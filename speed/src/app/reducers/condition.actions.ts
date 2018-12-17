import { Action } from '@ngrx/store';

export enum ActionTypes {
  Status = 'Status',
  GetStatus = 'GetStatus',
  NotCondition = 'Not Condition'
}
export interface Action {
  readonly type: ActionTypes;
  readonly payload?: any[];
}
export class ConditionStatus implements Action {
  public type = ActionTypes.Status;
  constructor(readonly payload: any) {}
}
export class GetConditionStatus implements Action {
  public type = ActionTypes.GetStatus;
  constructor(readonly payload: any) {}
}
export class NotSetCondition implements Action {
  readonly type = ActionTypes.NotCondition;
  constructor(readonly payload: any) {}
}

export type ConditionActions =
ConditionStatus | GetConditionStatus | NotSetCondition;
