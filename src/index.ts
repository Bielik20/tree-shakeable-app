import { LibConsumerClass, LibDependencyClass, Container, LibUnusedClass , Scope} from 'tree-shakeable-lib';
import { AppDependencyClass } from './core';
import { AppConsumerClass } from './products';

Container.bind(LibConsumerClass).to(AppConsumerClass);
// Container.bind(AppDependencyClass).scope(Scope.Transient);
Container.bind(LibDependencyClass).to(AppDependencyClass);

const instance = Container.get(LibConsumerClass);
// Container.get(LibUnusedClass);

instance.printName();

Container.get(LibDependencyClass);
