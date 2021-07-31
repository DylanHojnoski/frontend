import React from 'react';
import {Box, Code, Container, Heading, ListItem, OrderedList, Text, VStack} from '@chakra-ui/react';
import {NextSeo} from 'next-seo';

const EnableImageCopyPage = () => (
	<Container mb={10}>
		<NextSeo
			title="Help | Enable Image Copy"
		/>

		<VStack spacing={6} align="flex-start">
			<Heading size="xl">Enabling Image Copy</Heading>

			<Text>
        Some browsers may require you to manually enable image copying. Here's how:
			</Text>

			<Box>
				<Heading size="md" mb={3}>🦊 Firefox</Heading>

				<OrderedList spacing={3}>
					<ListItem>
            Open <Code>about:config</Code> in a new tab.
					</ListItem>
					<ListItem>
            Search for <Code>dom.events.asyncClipboard.clipboardItem</Code> and double-click it to change the value to <Code>true</Code>.
					</ListItem>
					<ListItem>
            Reload your michigantechcourses.com tab.
					</ListItem>
				</OrderedList>
			</Box>

			<Box>
				<Heading size="md" mb={3}>🧭 Safari</Heading>

				<Text>Enabled by default.</Text>
			</Box>

			<Box>
				<Heading size="md" mb={3}>✨ Chrome</Heading>

				<Text>Enabled by default.</Text>
			</Box>
		</VStack>
	</Container>
);

export default EnableImageCopyPage;
