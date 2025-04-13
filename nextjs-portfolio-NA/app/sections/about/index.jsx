"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							My name is Mel Jackson. I am a front-end developer with over four years of experience,
							focused on creating user-friendly and visually appealing websites.
						</p>
						<p>
							I specialize in improving user experience and boosting engagement through thoughtful
							design and practical functionality.
						</p>
						<p>
							With a strong foundation in HTML, CSS, JavaScript, and React, I have successfully
							completed many projects.{" "}
						</p>
						<p className="my-3.5">
							My attention to detail and design skills ensure that every website I build is both
							functional and aesthetically pleasing.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
