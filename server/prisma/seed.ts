import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const firstHabitId = '0730ffac-d039-4194-9571-01aa2aa0efbd'
const firstHabitCreationDate = new Date('2023-01-01T00:00:00.000')

const secondHabitId = '00880d75-a933-4fef-94ab-e05744435297'
const secondHabitCreationDate = new Date('2023-01-01T00:00:00.000')

const thirdHabitId = 'fa1a1bcf-3d87-4626-8c0d-d7fd1255ac00'
const thirdHabitCreationDate = new Date('2023-01-01T00:00:00.000')

async function run() {
  await prisma.habit.deleteMany()
  await prisma.day.deleteMany()

  /**
   * Create habits
   */
  await Promise.all([
    prisma.habit.create({
      data: {
        id: firstHabitId,
        title: 'Beber 2L água',
        created_at: firstHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 0 },
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
            { week_day: 6 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: secondHabitId,
        title: 'Exercitar',
        created_at: secondHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 0 },
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
            { week_day: 6 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: thirdHabitId,
        title: 'Dormir 8h',
        created_at: thirdHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 0 },
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
            { week_day: 6 },
          ]
        }
      }
    })
  ])

  await Promise.all([





    prisma.day.create({
      data: {
        /** Domingo */
        date: new Date('2023-01-01T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: thirdHabitId },
          ]
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Wednesday */
        date: new Date('2023-01-02T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId }
          ]
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Friday */
        date: new Date('2023-01-03T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: secondHabitId,
          }
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Wednesday */
        date: new Date('2023-01-04T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId }
          ]
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Domingo */
        date: new Date('2023-01-05T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: thirdHabitId },
          ]
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Friday */
        date: new Date('2023-01-06T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: secondHabitId,
          }
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Friday */
        date: new Date('2023-01-07T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: secondHabitId,
          }
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Domingo */
        date: new Date('2023-01-08T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: thirdHabitId },
          ]
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Friday */
        date: new Date('2023-01-09T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: secondHabitId,
          }
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Friday */
        date: new Date('2023-01-10T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: secondHabitId,
          }
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Friday */
        date: new Date('2023-01-11T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: secondHabitId,
          }
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Wednesday */
        date: new Date('2023-01-12T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId }
          ]
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Wednesday */
        date: new Date('2023-01-13T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId }
          ]
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Friday */
        date: new Date('2023-01-14T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: secondHabitId,
          }
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Wednesday */
        date: new Date('2023-01-15T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId }
          ]
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Domingo */
        date: new Date('2023-01-16T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: thirdHabitId },
          ]
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Friday */
        date: new Date('2023-01-17T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: secondHabitId,
          }
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Friday */
        date: new Date('2023-01-18T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: secondHabitId,
          }
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Domingo */
        date: new Date('2023-01-19T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: thirdHabitId },
          ]
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Friday */
        date: new Date('2023-01-20T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: secondHabitId,
          }
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Friday */
        date: new Date('2023-01-21T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: secondHabitId,
          }
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Domingo */
        date: new Date('2023-01-22T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: thirdHabitId },
          ]
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Friday */
        date: new Date('2023-01-23T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: secondHabitId,
          }
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Friday */
        date: new Date('2023-01-24T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: secondHabitId,
          }
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Friday */
        date: new Date('2023-01-25T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: secondHabitId,
          }
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Wednesday */
        date: new Date('2023-01-26T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId }
          ]
        }
      }
    }),



    prisma.day.create({
      data: {
        /** Wednesday */
        date: new Date('2023-01-27T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId }
          ]
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Friday */
        date: new Date('2023-01-28T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: secondHabitId,
          }
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Wednesday */
        date: new Date('2023-01-29T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId }
          ]
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Domingo */
        date: new Date('2023-01-30T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: thirdHabitId },
          ]
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Domingo */
        date: new Date('2023-01-31T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: thirdHabitId },
          ]
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Wednesday */
        date: new Date('2023-02-01T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId }
          ]
        }
      }
    }),

    prisma.day.create({
      data: {
        /** Wednesday */
        date: new Date('2023-02-02T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId }
          ]
        }
      }
    }),
  ])
}

run()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })