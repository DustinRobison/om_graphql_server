import { DataSource } from 'apollo-datasource';
import {
  MutationSubmitOrderArgs,
  Order,
  QueryOrderArgs
} from '../generated/graphql';
import { StoreInterface } from '../utils';

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

export class OrderManagementDb extends DataSource {
  private store: StoreInterface;
  constructor({ store }) {
    super();
    this.store = store;
  }

  public async getOrder(args: QueryOrderArgs) {
    return orders.find((order) => order.id === args.id);
  }

  public async getOrders() {
    return this.store.Order.findAll();
    // return ordersRefs.every(order => order instanceof this.store.Order);
  }

  public async submitOrder(args: MutationSubmitOrderArgs) {
    const order = await this.store.Order.create({
      customerRelationshipId: args.order.customerRelationshipId
    });
    return order;
  }
}
