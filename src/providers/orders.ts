import { DataSource } from 'apollo-datasource';
import { Order, QueryOrderArgs } from '../generated/graphql';

const orders: Order[] = [
  {
    id: '123',
    orderLines: [],
    customerRelationshipId: 'abc',
    executionDate: '2020-01-01T00:00:00.000Z',
    state: 'new'
  },
  {
    id: '234',
    orderLines: [],
    customerRelationshipId: 'abc',
    executionDate: '2020-01-01T00:00:00.000Z',
    state: 'new'
  },
  {
    id: '34',
    orderLines: [],
    customerRelationshipId: 'abc',
    executionDate: '2020-01-01T00:00:00.000Z',
    state: 'new'
  }
];

export class OrdersProvider extends DataSource {
  public async getOrder(args: QueryOrderArgs) {
    return orders.find((order) => order.id === args.id);
  }

  public async getOrders() {
    return orders;
  }
}
