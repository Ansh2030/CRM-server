const {CommunicationLog} = require('../models/communication');

const sendCampaign = async (req, res) => {
        const { audience, message } = req.body;
        console.log(audience);
const dt = new Date();
    const communicationLog = new CommunicationLog({
        audience,
        message,
        sentAt: dt,
        status: 'PENDING',
        sentCount: 0,
        failedCount: 0
    });

    await communicationLog.save();

    // Simulate sending messages and receiving delivery receipts
    audience.forEach((user, index) => {
        setTimeout(() => {
            const isSent = Math.random() < 0.9;
            communicationLog.sentCount += isSent ? 1 : 0;
            communicationLog.failedCount += isSent ? 0 : 1;

            // Update the status in the database
            if (index === audience.length - 1) {
                communicationLog.status = 'COMPLETED';
                communicationLog.save();
            }
        }, 1000*index );
    });

    res.status(200).json({ message: 'Campaign sent successfully', id: communicationLog._id });
};

module.exports = { sendCampaign };
