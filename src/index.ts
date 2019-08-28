import { LibConsumerClass, LibDependencyClass, container, LibUnusedClass , Scope} from 'tree-shakeable-lib';
import { AppDependencyClass } from './core';
import { AppConsumerClass } from './products';

container.bind(LibConsumerClass).to(AppConsumerClass);
// Container.bind(AppDependencyClass).scope(Scope.Transient);
container.bind(LibDependencyClass).to(AppDependencyClass);

const instance = container.get(LibConsumerClass);
// Container.get(LibUnusedClass);

instance.printName();

container.get(LibDependencyClass);
