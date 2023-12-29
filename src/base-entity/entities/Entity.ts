import IEntity from '../interfaces/IEntity'
export default abstract class Entity<TKey> implements IEntity<TKey> {
  id!: TKey
}
