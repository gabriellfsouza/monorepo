import { factory, MongooseAdapter } from 'factory-girl';
import ToDo from '~/app/schemas/ToDoSchema';
import ToDoFaker from '~/__tests__/utils/fakers/ToDoFaker';

/**
 * Generate mongodb object to interct with mongodb.
 * Used for tests purposes
 */
const adapter = new MongooseAdapter();

factory.setAdapter(adapter);
factory.define('ToDo', ToDo, ToDoFaker.create());

export default factory;
