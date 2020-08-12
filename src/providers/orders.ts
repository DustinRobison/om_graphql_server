import { DataSource } from 'apollo-datasource';
import { QueryOrderArgs } from '../generated/graphql';

const orders = [{}];

export class OrdersProvider extends DataSource {
  public async getOrder(args: QueryOrderArgs) {
    return orders[args.id];
  }
}
