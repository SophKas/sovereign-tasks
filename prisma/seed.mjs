export async function seed({ prisma }) {
  console.log("🌱 Seeding prisma for tasks plugin...");

  const userId = "demo-user";

  // --- Create Task Lists ---
  const inbox = await prisma.taskList.create({
    data: {
      userId,
      name: "Inbox",
      slug: "inbox",
      position: 0,
    },
  });

  const work = await prisma.taskList.create({
    data: {
      userId,
      name: "Work",
      slug: "work",
      position: 1,
    },
  });

  // --- Create Tasks ---
  await prisma.task.createMany({
    data: [
      {
        userId,
        listId: inbox.id,
        title: "Buy groceries",
        description: "Milk, bread, eggs, coffee",
        completed: false,
        starred: true,
        position: 0,
      },
      {
        userId,
        listId: inbox.id,
        title: "Read a book",
        description: null,
        completed: false,
        starred: false,
        position: 1,
      },
      {
        userId,
        listId: work.id,
        title: "Prepare meeting slides",
        description: "For Monday 10am presentation",
        completed: false,
        starred: true,
        position: 0,
      },
      {
        userId,
        listId: work.id,
        title: "Reply to client emails",
        completed: true,
        starred: false,
        position: 1,
      },
    ],
  });

  console.log("✅ Tasks plugin seed completed.");
}