const { Ticket } = require('./models');

export const getTickets = async (ctx) => {
  try {
    const tickets = await Ticket.findAll({});
    ctx.ok(tickets);
  } catch (error) {
    ctx.badRequest({ message: error.message });
  }
};