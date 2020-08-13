import { DataSource } from 'apollo-datasource';
import {
  MutationCreateLocationArgs,
  MutationCreateOrderArgs,
  MutationCreateProductArgs,
  QueryLocationArgs,
  QueryOrderArgs,
  QueryProductArgs
} from '../../generated/graphql';
import { StoreInterface } from '../../utils';

export class OrderManagementDb extends DataSource {
  private store: StoreInterface;
  constructor({ store }) {
    super();
    this.store = store;
  }

  // ORDER
  public async getOrder(args: QueryOrderArgs) {
    return this.store.Order.findByPk(args.id);
  }

  public async getOrders() {
    return this.store.Order.findAll();
  }

  public async createOrder(args: MutationCreateOrderArgs) {
    const { name, serviceLocationId } = args.order;
    const order = await this.store.Order.create({
      name,
      serviceLocationId
    });
    return order;
  }

  // PRODUCT
  public async getProduct(args: QueryProductArgs) {
    return this.store.Product.findByPk(args.id);
  }

  public async getProducts() {
    return this.store.Product.findAll();
  }

  public async createProduct(args: MutationCreateProductArgs) {
    const { name, description, price } = args.product;
    const product = await this.store.Product.create({
      name,
      description,
      price
    });
    return product;
  }

  // LOCATION
  public async getLocation(args: QueryLocationArgs) {
    return this.store.Location.findByPk(args.id);
  }

  public async getLocations() {
    return this.store.Location.findAll();
  }

  public async createLocation(args: MutationCreateLocationArgs) {
    const {
      latitude,
      longitude,
      streetAddress,
      city,
      isoCountryCode,
      regionOrState,
      zipOrPostCode
    } = args.location;
    const location = await this.store.Location.create({
      latitude,
      longitude,
      streetAddress,
      city,
      isoCountryCode,
      regionOrState,
      zipOrPostCode
    });
    return location;
  }
}
