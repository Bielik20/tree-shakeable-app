import { LibConsumerClass, LibDependencyClass } from 'tree-shakeable-lib';
import { Container, Scope } from 'typescript-ioc';
import { AppDependencyClass, AppDependencyOfDependencyClass } from './core';
import { AppConsumerClass } from './products';

Container.bind(LibConsumerClass).to(AppConsumerClass);
// Container.bind(AppDependencyClass).scope(Scope.Local);
Container.bind(AppDependencyOfDependencyClass);
Container.bind(LibDependencyClass).to(AppDependencyClass);

const instance: LibConsumerClass = Container.get(LibConsumerClass);
const dep: LibDependencyClass = Container.get(LibDependencyClass);

instance.printName();
