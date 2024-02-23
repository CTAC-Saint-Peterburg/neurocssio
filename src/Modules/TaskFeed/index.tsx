import useClient from "../../Store/store";

const TaskFeed = () => {
  const { client }: any = useClient();
  console.log(client);
  return <>TaskFeed</>;
};

export default TaskFeed;
